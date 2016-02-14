<?php
require_once __DIR__.'/../advanced/vendor/autoload.php';
use Elasticsearch\Client;
use Elasticsearch\ClientBuilder;

header('Content-Type: text/html; charset=utf-8');
date_default_timezone_set('PRC');

$client = ClientBuilder::create()->setHosts(['127.0.0.1:9200'])->build();

$params['index'] = 'music';
$params['type'] = 'song';
$params['body']['query']['match']['name']='你好毒';

$result = $client -> search($params);
file_put_contents("c:\log.txt", var_export($result, true));