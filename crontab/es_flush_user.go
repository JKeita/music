package main

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
	"gopkg.in/olivere/elastic.v2"
	// "encoding/json"
	"time"
	"fmt"
	"strconv"
)
type User struct {
   Id int `json:"id"`
   Username string `json:"username"`
   Headimg string `json:"headimg"`
   Email string `json:"email"`
   Sex	string `json:"sex"`
   Ctime time.Time `json:"ctime"`
   Following int `json:"following"`
   Follower int `json:"follower"`
   Profile string `json:"profile"`
}


func main(){
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
	
	rows, err := db.Query("select id, IFNULL(username,''), IFNULL(headimg,''), IFNULL(email,''), sex, ctime, following, follower, IFNULL(profile,'') from user ")
	if err != nil {
		panic(err.Error())
	}	
	defer rows.Close()
	
	bulkRequest := client.Bulk()

	var user User
	for rows.Next() {
		err := rows.Scan(&user.Id, &user.Username, &user.Headimg, &user.Email, &user.Sex, &user.Ctime, &user.Following, &user.Follower, &user.Profile)
		if err != nil {
			panic(err.Error())
		}

		bulkRequest.Add(elastic.NewBulkIndexRequest().Index("music").Type("user").Id(strconv.Itoa(user.Id)).Doc(user))
	}
	_, err = bulkRequest.Do()
	if err != nil {
	  panic(err.Error())
	}


	t2 := time.Now().Unix()
	excTime := t2 - t1;
	fmt.Printf("execute_time:%d",(excTime))
}