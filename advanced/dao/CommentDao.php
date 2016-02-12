<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/16
 * Time: 16:04
 */
namespace dao;
use models\Comment;
use yii\data\Pagination;
use yii\db\Query;

class CommentDao {
    public function getCommentPagination($params){
        $query = new Query();
        $query
            -> select ('*')
            -> from('comment')
            -> where([
                'psid' => $params['psid'],
                'type' => $params['type'],
                'state' => 0,
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