<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/3/12
 * Time: 19:10
 */
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
    $sql = "select * from song";
    $query = $db -> query($sql, PDO::FETCH_ASSOC);
    $params['index'] = 'test';
    $params['type'] = 'song';
    $i = 0;
    while($row = $query -> fetch()){
		$row['created'] = date("c", strtotime($row['created']));
		$row['updated'] = date("c", strtotime($row['updated']));
        $params['body'][] = [
            'index' => [
                '_id' => $row['id']
            ]
        ];
        $params['body'][] = $row;
        $i++;
        if($i >= 10000){
            $client -> bulk($params);
            unset($params['body']);
            $i=0;
        }
    }
    if($i > 0){
        $client -> bulk($params);
        unset($params['body']);
        $i=0;
    }
    $t2 = time();
    print('excTime:'.($t2 - $t1));
}catch(Exception $e){
    echo $e ->getMessage();
}