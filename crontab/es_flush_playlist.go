package main

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
	"gopkg.in/olivere/elastic.v2"
	// "encoding/json"
	"fmt"
	"strconv"
	"time"
)

type PlayList struct {
	Id         int       `json:"id"`
	Name       string    `json:"name"`
	Cover      string    `json:"cover"`
	Uid        int       `json:"uid"`
	Collectnum int       `json:"collectnum"`
	Sharenum   string    `json:"sharenum"`
	Profile    string    `json:"profile"`
	Created    time.Time `json:"created"`
	State      int       `json:"state"`
	Tags       []string  `json:"tags"`
}

func main() {
	t1 := time.Now().Unix()

	client, err := elastic.NewClient()
	if err != nil {
		// Handle error
		panic(err.Error())
	}

	db, err := sql.Open("mysql", "root:123456@tcp(localhost:3306)/music?parseTime=true")
	if err != nil {
		panic(err.Error()) // Just for example purpose. You should use proper error handling instead of panic
	}
	defer db.Close()

	// Open doesn't open a connection. Validate DSN data:
	err = db.Ping()
	if err != nil {
		panic(err.Error()) // proper error handling instead of panic in your app
	}

	rows, err := db.Query("select id, IFNULL(name,''), IFNULL(cover,''), uid, collectnum, sharenum, IFNULL(profile, ''), created, state from playlist ")
	if err != nil {
		panic(err.Error())
	}
	defer rows.Close()

	bulkRequest := client.Bulk()

	var playlist PlayList

	for rows.Next() {
		err := rows.Scan(&playlist.Id, &playlist.Name, &playlist.Cover, &playlist.Uid, &playlist.Collectnum, &playlist.Sharenum, &playlist.Profile, &playlist.Created, &playlist.State)
		if err != nil {
			panic(err.Error())
		}
		var tagArr []string
		tags, err := db.Query("select name from tag where id in (select tid from playlist_tag where pid = ?)", playlist.Id)

		if err != nil {
			continue
		}
		tag := ""
		for tags.Next() {
			err := tags.Scan(&tag)
			if err != nil {
				continue
			}
			if tag != "" {
				tagArr = append(tagArr, tag)
			}
		}
		playlist.Tags = tagArr
		bulkRequest.Add(elastic.NewBulkIndexRequest().Index("music").Type("playlist").Id(strconv.Itoa(playlist.Id)).Doc(playlist))
	}
	_, err = bulkRequest.Do()
	if err != nil {
		panic(err.Error())
	}

	t2 := time.Now().Unix()
	excTime := t2 - t1
	fmt.Printf("execute_time:%d", (excTime))
}
