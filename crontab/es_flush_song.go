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

type Song struct {
	Id         int    `json:"id"`
	Name       string `json:"name"`
	Author     string `json:"author"`
	Src        string `json:"src"`
	Cover      string `json:"cover"`
	Duration   int    `json:"duration"`
	Lyric      string `json:"lyric"`
	Collectnum int    `json:"collectnum"`
	Sharenum   string `json:"sharenum"`
	State      int    `json:"state"`
}

var c chan int

func flush(start int, len int) {
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

	rows, err := db.Query("select id,name,author,src,IFNULL(cover,''), duration,IFNULL(lyric,''),collectnum,sharenum,state from song limit ?, ?", start, len)
	if err != nil {
		panic(err.Error())
	}
	defer rows.Close()

	bulkRequest := client.Bulk()

	var song Song
	for rows.Next() {
		err := rows.Scan(&song.Id, &song.Name, &song.Author, &song.Src, &song.Cover, &song.Duration, &song.Lyric, &song.Collectnum, &song.Sharenum, &song.State)
		if err != nil {
			panic(err.Error())
		}

		bulkRequest.Add(elastic.NewBulkIndexRequest().Index("music").Type("song").Id(strconv.Itoa(song.Id)).Doc(song))
	}
	_, err = bulkRequest.Do()
	if err != nil {
		fmt.Println(err.Error())
	}
	c <- start
}
func main() {
	t1 := time.Now().Unix()
	c = make(chan int)
	num := 10
	length := 10000
	for n := 0; n < 6; n++ {
		for i := 0; i < num; i++ {
			go flush(i*length+n*length*10, length)
		}

		for j := 0; j < num; j++ {
			fmt.Println(<-c)
		}
	}

	t2 := time.Now().Unix()
	excTime := t2 - t1
	fmt.Printf("execute_time:%d", (excTime))
}
