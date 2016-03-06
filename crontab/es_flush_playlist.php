<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/3/6
 * Time: 14:45
 */
require_once __DIR__.'/../advanced/vendor/autoload.php';
use Elasticsearch\Client;
use Elasticsearch\ClientBuilder;


header('Content-Type: text/html; charset=utf-8');
date_default_timezone_set('PRC');
set_time_limit(0);

$client = ClientBuilder::create()->setHosts(['127.0.0.1:9200'])->build();

//$info = $client -> info();
//var_dump($info);

$db = new PDO("mysql:host=127.0.0.1;dbname=music","root","123456");
$db->exec('set names utf8');
$sql = "select * from playlist where state = 0";
$query = $db -> query($sql, PDO::FETCH_ASSOC);
$tagSth = $db -> prepare("select name from tag where id in (select tid from playlist_tag where pid = :pid)");
$params['index'] = 'music';
$params['type'] = 'playlist';
while($row = $query -> fetch()){
    $params['id'] = $row['id'];
    echo $params['id']."\n";
    $params['body'] = $row;
    $params['body']['created'] = date("c", strtotime($row['created']));
    $tags = [];
    $tagSthResult = $tagSth -> execute([
        ':pid' => $row['id']
    ]);
    if($tagSthResult){
        $tags = $tagSth -> fetchAll(PDO::FETCH_COLUMN);
    }
    $params['body']['tags'] = $tags;
//    var_dump($params);
    try{
        $client->index($params);
    }catch(Exception $e){
        echo $e -> getMessage();
    }


//    break;
}