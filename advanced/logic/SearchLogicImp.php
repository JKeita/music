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
     * 搜索
     * @param $condition
     * @return mixed
     */
    public function search($condition)
    {
        $client = ClientBuilder::create()->setHosts(['127.0.0.1:9200'])->build();
        $params['index'] = 'music';
        $params['type'] = 'song';
        $pageSize = !empty($condition['pageSize'])?$condition['pageSize']:10;
        $params['size'] = $pageSize;
        $params['from'] = !empty($condition['page'])?$condition['page']:0;
        if(!empty($condition['type'])){
            if($condition['type'] == 1){
                $params['body']['query']['match']['name'] = $condition['key'];
            }else if($condition['type'] == 2){
                $params['body']['query']['match']['author'] = $condition['key'];
            }else if($condition['type'] == 3){
                $params['body']['query']['match']['lyric'] = $condition['key'];
            }
        }else{
            $params['body']['query']['match']['name'] = $condition['key'];
        }
        $data = $client -> search($params);
        $totalCount = ($data['hits']['total'] > 10*$pageSize)?10*$pageSize:$data['hits']['total'];
        $page = new Pagination([
            'totalCount' => $totalCount,
            'defaultPageSize' => $pageSize,
        ]);
        file_put_contents("c:\log.txt", var_export($data, true));
        return ['page' => $page, 'data' => $data];
    }

}