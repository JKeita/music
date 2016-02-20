<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/8
 * Time: 14:56
 */

namespace logic;


use common\help\Response;
use dao\CommentDao;
use models\Comment;

class CommentLogicImp implements CommentLogic
{
    /**
     * 保存评论
     * @return mixed
     */
    public function save($params)
    {
        $model = new Comment();
        if(empty($params['uid'])){
            return Response::returnInfo(0, '用户ID不能为空');
        }
        if(empty($params['content'])){
            return Response::returnInfo(0, '评论不能为空');
        }
        $model -> uid = $params['uid'];
        $model -> content = $params['content'];
        if(!empty($params['sid'])){
            $model -> type = 1;
            $model -> psid = $params['sid'];
        }else if(!empty($params['pid'])){
            $model -> type = 2;
            $model -> psid = $params['pid'];
        }else{
            return Response::returnInfo(0, '评论对象的ID不能为空');
        }
        if(!empty($params['tid'])){
            $model -> tid = $params['tid'];
        }
        $result = $model -> save();
        if($result){
            return Response::returnInfo(1, '评论成功');
        }
        return Response::returnInfo(0, '评论失败');
    }

    /**
     * 删除用户评论
     * @param $cid
     * @param $uid
     * @return mixed
     */
    public function del($cid, $uid)
    {
        if(empty($cid)||!is_numeric($cid)){
            return Response::returnInfo(0, '评论ID参数出错');
        }
        if(empty($uid)||!is_numeric($uid)){
            return Response::returnInfo(0, '用户ID参数出错');
        }
        $model = Comment::findOne(['id' => $cid, 'uid' => $uid, 'state' => 0]);
        if(empty($model)){
            return Response::returnInfo(0, '删除失败：没有找到对应数据');
        }
        $result = $model -> delete();
        if($result){
            return Response::returnInfo(1, '删除成功');
        }
        return Response::returnInfo(0, '删除失败');
    }


    /**
     * 获取评论分页数据
     * @param $params
     * @return mixed
     */
    public function getPage($params)
    {
        $commentDao = new CommentDao();
        return $commentDao -> getCommentPagination($params);
    }


}