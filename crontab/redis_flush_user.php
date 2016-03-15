<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/3/13
 * Time: 14:32
 */
set_time_limit(0);
try{
    $redis = new Redis();
    $redis -> connect('127.0.0.1',6379);
    $result = $redis -> ping();
    var_dump($result);
//    $redis -> delete($redis -> keys("music:user:*"));die();
    $db = new PDO("mysql:host=127.0.0.1;dbname=music","root","123456");
    $db->exec('set names utf8');
    $sql = "select id,username,headimg,email,sex,ctime,following,follower,profile from user";
    $query = $db -> query($sql, PDO::FETCH_ASSOC);
    while($row = $query -> fetch()){
        foreach($row as $key => $value){
            $redis -> hSet("music:user:{$row['id']}", $key, $value);
        }
        echo $row['id']."\n";
    }
}catch(Exception $e){
    echo $e -> getMessage();
}