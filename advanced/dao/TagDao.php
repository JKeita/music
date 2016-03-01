<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/3/1
 * Time: 20:24
 */

namespace dao;


use yii\data\Pagination;
use yii\db\Query;

class TagDao
{
    public function getListPage(){
        $query = new Query();
        $query
            -> select('id,name')
            -> from('tag')
            -> orderBy('id desc');
        $count = $query -> count();
        $page = new Pagination([
            'totalCount' => $count,
            'defaultPageSize' => 10
        ]);
        $data = $query -> limit($page -> limit) -> offset($page -> offset) -> all();
        return ['data' => $data, 'page' => $page];
    }
}