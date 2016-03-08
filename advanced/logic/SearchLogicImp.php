<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/14
 * Time: 14:48
 */

namespace logic;

use Elasticsearch\ClientBuilder;
use yii\data\Pagination;

class SearchLogicImp implements SearchLogic
{
    /**
     * 搜索歌曲
     * @param $condition
     * @return mixed
     */
    public function search($condition)
    {
        $maxPageCount = !empty($condition['maxPageCount'])?$condition['maxPageCount']:10;
        $client = ClientBuilder::create()->setHosts(['127.0.0.1:9200'])->build();
        $params['index'] = 'music';
        $params['type'] = 'song';
        $pageSize = !empty($condition['pageSize'])?$condition['pageSize']:10;
        $params['size'] = $pageSize;
        if(!empty($condition['page'])){
            $page = $condition['page'];
            if(is_numeric($page)){
                if($page<1){
                    $page=1;
                }else if($page > $maxPageCount){
                    $page = $maxPageCount;
                }
            }else{
                $page = 1;
            }
        }else{
            $page = 1;
        }
        $params['from'] = !empty($page)?($page-1)*$pageSize:0;
        if(empty($condition['key'])){
            $params['body']['query']['match_all']=[];
            $params['body']['sort']['id']['order'] = 'desc';
        }else{
            if(!empty($condition['type'])){
                if($condition['type'] == 1){
                    $params['body']['query']['match']['name'] = $condition['key'];
                    $params['body']['highlight'] = [
                        "pre_tags" => ["<span class=\"s-fc7\">"],
                        "post_tags" => ["</span>"],
                        "fields" => ["name" => (object)[]]
                    ];
                }else if($condition['type'] == 2){
                    $params['body']['query']['match']['author'] = $condition['key'];
                    $params['body']['highlight'] = [
                        "pre_tags" => ["<span class=\"s-fc7\">"],
                        "post_tags" => ["</span>"],
                        "fields" => ["author" => (object)[]]
                    ];
                }else if($condition['type'] == 3){
                    $params['body']['query']['match']['lyric'] = $condition['key'];
                }else if($condition['type'] == 'mult'){
                    if(is_numeric($condition['key'])){
                            $params['body']['query']['bool']['should']['term']['id']=$condition['key'];
                    }else{
                        $params['body']['query']['bool']['should']=[
                            ['match' => ['name' => $condition['key']]],
                            ['match' => ['author' => $condition['key']]],
                        ];
                    }
                }
            }else{
                $params['body']['query']['match']['name'] = $condition['key'];
            }
        }
        $data = $client -> search($params);
        $totalCount = ($data['hits']['total'] > 10*$pageSize)?10*$pageSize:$data['hits']['total'];
        $page = new Pagination([
            'totalCount' => $totalCount,
            'defaultPageSize' => $pageSize,
        ]);
//        file_put_contents("c:\log.txt", var_export($data, true));
        return ['page' => $page, 'data' => $data];
    }

    /**
     * 搜索歌单
     * @param $condition
     * @return mixed
     */
    public function searchPlayList($condition)
    {
        $maxPageCount = !empty($condition['maxPageCount'])?$condition['maxPageCount']:10;
        $client = ClientBuilder::create()->setHosts(['127.0.0.1:9200'])->build();
        $params['index'] = 'music';
        $params['type'] = 'playlist';
        $pageSize = !empty($condition['pageSize'])?$condition['pageSize']:10;
        $params['size'] = $pageSize;
        if(!empty($condition['page'])){
            $page = $condition['page'];
            if(is_numeric($page)){
                if($page<1){
                    $page=1;
                }else if($page > $maxPageCount){
                    $page = $maxPageCount;
                }
            }else{
                $page = 1;
            }
        }else{
            $page = 1;
        }
        $params['from'] = !empty($page)?($page-1)*$pageSize:0;
        if(empty($condition['key'])){
            $params['body']['query']['match_all']=[];
            $params['body']['sort']['id']['order'] = 'desc';
        }else{
            $params['body']['query']['match']['name'] = $condition['key'];
            $params['body']['highlight'] = [
                "pre_tags" => ["<span class=\"s-fc7\">"],
                "post_tags" => ["</span>"],
                "fields" => ["name" => (object)[]]
            ];
        }
        $data = $client -> search($params);
        $totalCount = ($data['hits']['total'] > 10*$pageSize)?10*$pageSize:$data['hits']['total'];
        $page = new Pagination([
            'totalCount' => $totalCount,
            'defaultPageSize' => $pageSize,
        ]);
        return ['page' => $page, 'data' => $data];
    }


}