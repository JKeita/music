<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/16
 * Time: 16:11
 */
namespace dao;
use models\Song;
use yii\data\Pagination;
use yii\db\Query;

class SongDao {
    public function getSongListPage($params){
        $query = new Query();
        $query
            -> select('id,name,author')
            -> from('song')
            -> where([
                'state' => 0
            ])
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