<?php
require_once __DIR__.'/../advanced/vendor/autoload.php';
use Elasticsearch\Client;
use Elasticsearch\ClientBuilder;

header('Content-Type: text/html; charset=utf-8');
date_default_timezone_set('PRC');
set_time_limit(0);
$t1 = time();

$client = ClientBuilder::create()->setHosts(['127.0.0.1:9200'])->build();
try{

    $db = new PDO("mysql:host=127.0.0.1;dbname=music","root","123456",[
        PDO::ATTR_PERSISTENT => true,
        PDO::ATTR_TIMEOUT => 3000,
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_PREFETCH => 1024,
    ]);
    $db->exec('set names utf8');
    $sql = "select id,username,headimg,email,sex,ctime,following,follower,profile from user";
    $query = $db -> query($sql, PDO::FETCH_ASSOC);
    $params['index'] = 'test';
    $params['type'] = 'user';
    while($row = $query -> fetch()){
        $row['ctime'] = date("c", strtotime($row['ctime']));
        $params['body'][] = [
            'index' => [
                '_id' => $row['id']
            ]
        ];
        $params['body'][] = $row;
    }
    $client->bulk($params);
    $t2 = time();
    print('excTime:'.($t2 - $t1));
}catch(Exception $e){
    echo $e ->getMessage();
}
