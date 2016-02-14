<?php
require_once __DIR__.'/../advanced/vendor/autoload.php';
use Elasticsearch\Client;
use Elasticsearch\ClientBuilder;

header('Content-Type: text/html; charset=utf-8');
date_default_timezone_set('PRC');

$client = ClientBuilder::create()->setHosts(['127.0.0.1:9200'])->build();

//$info = $client -> info();
//var_dump($info);

$db = new PDO("mysql:host=127.0.0.1;dbname=music","root","123456");
$db->exec('set names utf8');
$sql = "select * from song";
$query = $db -> query($sql, PDO::FETCH_ASSOC);
$params['index'] = 'music';
$params['type'] = 'song';
while($row = $query -> fetch()){
    $params['id'] = $row['id'];
    echo $params['id']."\n";
    unset($row['id']);
    $params['body'] = $row;
    $client->index($params);
}