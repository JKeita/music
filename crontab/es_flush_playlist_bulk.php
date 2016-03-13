<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/3/12
 * Time: 18:57
 */
require_once __DIR__.'/../advanced/vendor/autoload.php';
use Elasticsearch\Client;
use Elasticsearch\ClientBuilder;


header('Content-Type: text/html; charset=utf-8');
date_default_timezone_set('PRC');
set_time_limit(0);
$t1 = time();

$client = ClientBuilder::create()->setHosts(['127.0.0.1:9200'])->build();

//$info = $client -> info();
//var_dump($info);

$db = new PDO("mysql:host=127.0.0.1;dbname=music","root","123456");
$db->exec('set names utf8');
$sql = "select * from playlist where state = 0";
$query = $db -> query($sql, PDO::FETCH_ASSOC);
$tagSth = $db -> prepare("select name from tag where id in (select tid from playlist_tag where pid = :pid)");
$params['index'] = 'test';
$params['type'] = 'playlist';
while($row = $query -> fetch()){
    $row['created'] = date("c", strtotime($row['created']));
	$row['updated'] = date("c", strtotime($row['updated']));
    $tags = [];
    $tagSthResult = $tagSth -> execute([
        ':pid' => $row['id']
    ]);
    if($tagSthResult){
        $tags = $tagSth -> fetchAll(PDO::FETCH_COLUMN);
    }
    $row['tags'] = $tags;
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