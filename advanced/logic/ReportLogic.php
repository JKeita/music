<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/19
 * Time: 14:41
 */

namespace logic;


interface ReportLogic
{
    /**
     * 举报评论
     * @param $cid
     * @param $uid
     * @param $reason
     * @return mixed
     */
    public function report($cid, $uid, $reason);

    /**
     * 举报列表页面
     * @return mixed
     */
    public function getReportListPage();

    /**
     * 审核
     * @param $ids
     * @param $type
     * @return mixed
     */
    public function examine($ids, $type);
}