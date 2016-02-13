<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/16
 * Time: 16:11
 */
namespace dao;
use models\Share;
use yii\data\Pagination;
use yii\db\Query;

class ShareDao {
    public function getUserEventPage($uid){
        $query = new Query();
        $query
            -> select ('*')
            -> from('share')
            -> where([
                'uid' => $uid,
                'state' => 0
            ])
            -> orderBy('ctime desc');
        $count = $query -> count();
        $page = new Pagination([
            'totalCount' => $count,
            'defaultPageSize' => 10,
        ]);
        $data = $query -> limit($page -> limit) -> offset($page -> offset) -> all();
        return ['data' => $data, 'page' => $page];
    }

    public function getFollowEventPage($uid){
        $idArr = (new Query) -> select('fid') -> from('follow') -> where(['uid' => $uid]);
        $query = new Query();
        $query
            -> select ('*')
            -> from('share')
            -> where([
                'uid' => $idArr,
                'state' => 0
            ])
            -> orderBy('ctime desc');
        $count = $query -> count();
        $page = new Pagination([
            'totalCount' => $count,
            'defaultPageSize' => 10,
        ]);
        $data = $query -> limit($page -> limit) -> offset($page -> offset) -> all();
        return ['data' => $data, 'page' => $page];
    }
}