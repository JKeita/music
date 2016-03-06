<?php
require_once __DIR__.'/../advanced/vendor/autoload.php';
use Elasticsearch\Client;
use Elasticsearch\ClientBuilder;

header('Content-Type: text/html; charset=utf-8');
date_default_timezone_set('PRC');
set_time_limit(0);

$client = ClientBuilder::create()->setHosts(['127.0.0.1:9200'])->build();

//$info = $client -> info();
//var_dump($info);
try{
    $db = new PDO("mysql:host=127.0.0.1;dbname=music","root","123456",[
	 PDO::ATTR_PERSISTENT => true,
	 PDO::ATTR_TIMEOUT => 3000,
	 PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
	 PDO::ATTR_PREFETCH => 1024,
	]);
    $db->exec('set names utf8');
	echo 'ok1';
    $sql = "select * from song where state = 0";
    $query = $db -> query($sql, PDO::FETCH_ASSOC);
	echo 'ok2';
    $params['index'] = 'music';
    $params['type'] = 'song';
    while($row = $query -> fetch()){
        $params['id'] = $row['id'];
        echo $params['id']."\n";
        $params['body'] = $row;
        $client->index($params);
    }
}catch(Exception $e){
    echo $e ->getMessage();
}