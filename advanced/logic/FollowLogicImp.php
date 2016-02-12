<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/12
 * Time: 14:17
 */

namespace logic;


use common\help\Response;
use models\Follow;
use models\User;

class FollowLogicImp implements FollowLogic
{
    /**
     * 关注好友
     * @param $uid
     * @param $fid
     * @return mixed
     */
    public function follow($uid, $fid)
    {
        if(empty($uid)||empty($fid)){
            return Response::returnInfo(0, '请求参数出错');
        }
        if($uid == $fid){
            return Response::returnInfo(0, '不能关注自己');
        }
        if($this -> isFollow($uid, $fid)){
            return Response::returnInfo(0, '已关注');
        }
        $model = new Follow();
        $model -> uid = $uid;
        $model -> fid = $fid;
        $result = $model -> save();
        if($result){
            return Response::returnInfo(1, '关注成功');
        }
        return Response::returnInfo(0, '关注失败');
    }

    /**
     * 取消关注
     * @param $uid
     * @param $fid
     * @return mixed
     */
    public function delFollow($uid, $fid)
    {
        if(empty($uid)||empty($fid)){
            return Response::returnInfo(0, '请求参数出错');
        }
        if($uid == $fid){
            return Response::returnInfo(0, '请求参数出错');
        }
        if(!$this -> isFollow($uid, $fid)){
            return Response::returnInfo(0, '未关注');
        }
        $model = Follow::findOne(['uid' => $uid, 'fid' => $fid]);
        $result = $model ->delete();
        if($result){
            return Response::returnInfo(1, '取消关注成功');
        }
        return Response::returnInfo(0, '取消关注失败');
    }

    /**
     * 获取关注信息
     * @param $uid
     * @return mixed
     */
    public function getFollows($uid)
    {
        if(empty($uid)){
            return [];
        }
        $ids = Follow::find() -> select('fid')-> where(['uid' => $uid]) -> column();
        if(empty($ids)){
            return [];
        }
        $playList =  User::find() -> where(['id' => $ids]);
        return $playList ->  asArray() -> all();
    }

    /**
     * 获取粉丝信息
     * @param $uid
     * @return mixed
     */
    public function getFans($uid)
    {
        if(empty($uid)){
            return [];
        }
        $ids = Follow::find() -> select('uid')-> where(['fid' => $uid]) -> column();
        if(empty($ids)){
            return [];
        }
        $playList =  User::find() -> where(['id' => $ids]);
        return $playList ->  asArray() -> all();
    }

    /**
     * 获取关注数
     * @param $uid
     * @return mixed
     */
    public function getFollowsNum($uid)
    {
        if(empty($uid)){
            return 0;
        }
        $count = Follow::find() -> select('fid')-> where(['uid' => $uid]) -> count();
        return $count;
    }

    /**
     * 获取粉丝数
     * @param $uid
     * @return mixed
     */
    public function getFansNum($uid)
    {
        if(empty($uid)){
            return [];
        }
        $count = Follow::find() -> select('uid')-> where(['fid' => $uid]) -> count();
        return $count;
    }


    /**
     * 检查是否已经关注
     * @param $uid
     * @param $fid
     * @return mixed
     */
    public function isFollow($uid, $fid)
    {
        if(empty($uid)||empty($fid)){
            return false;
        }
        $model = Follow::findOne(['uid' => $uid, 'fid' => $fid]);
        if(!empty($model)){
            return true;
        }
        return false;
    }


}