<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/19
 * Time: 14:38
 */

namespace dao;


use yii\data\Pagination;
use yii\db\Query;

class ReportDao
{
    public function getReportListPage(){
        $query = new Query();
        $query
            -> select('c.id as cid,c.content,r.id as rid,r.reason,r.state')
            -> from('report as r')
            -> innerJoin('comment as c', 'c.id=r.cid')
            -> orderBy('r.ctime desc');
        $count = $query -> count();
        $page = new Pagination([
            'totalCount' => $count,
            'defaultPageSize' => 10,
        ]);
        $data = $query -> limit($page -> limit) -> offset($page -> offset) -> all();
        return ['data' => $data, 'page' => $page];
    }
}