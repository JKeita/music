<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/19
 * Time: 14:41
 */

namespace logic;


use common\help\Response;
use dao\ReportDao;
use models\Comment;
use models\Report;

class ReportLogicImp implements ReportLogic
{

    /**
     * 举报评论
     * @param $cid
     * @param $uid
     * @param $reason
     * @return mixed
     */
    public function report($cid, $uid, $reason)
    {
        if(empty($cid)||!is_numeric($cid)){
            return Response::returnInfo(0, '评论参数ID出错');
        }
        if(empty($uid)||!is_numeric($uid)){
            return Response::returnInfo(0, '举报人参数ID出错');
        }
        if(empty($reason)){
            return Response::returnInfo(0, '举报理由参数出错');
        }
        $model = new Report();
        $model -> cid = $cid;
        $model -> uid = $uid;
        $model -> reason = $reason;
        $result = $model -> save();
        if($result){
            return Response::returnInfo(1, '举报成功');
        }
        return Response::returnInfo(0, '举报失败');
    }

    /**
     * 举报列表页面
     * @return mixed
     */
    public function getReportListPage()
    {
        $reportDao = new ReportDao();
        return $reportDao -> getReportListPage();
    }

    /**
     * 审核
     * @param $ids
     * @param $type
     * @return mixed
     */
    public function examine($ids, $type)
    {
        if(empty($ids)){
            return Response::returnInfo(0, 'id不能为空');
        }
        if(empty($type)||($type != 1 && $type != 2)){
            return Response::returnInfo(0, '审核类型出错');
        }
        if($type == 1){
            $cidArr = Report::find() -> select('cid') ->where(['id' => $ids]) -> column();
            $result = Comment::updateAll(['state' => 1],['id' => $cidArr]);
            Report::updateAll(['state' => 1], ['id' => $ids, 'state' => 0]);
        }else if($type == 2){
            $result = Report::updateAll(['state' => 2], ['id' => $ids, 'state' => 0]);
        }
        if($result){
            return Response::returnInfo(1, '审核成功');
        }
        return Response::returnInfo(0, '审核失败');
    }


}