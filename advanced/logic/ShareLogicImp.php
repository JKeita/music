<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/13
 * Time: 12:48
 */

namespace logic;


use common\help\Response;
use dao\ShareDao;
use models\Playlist;
use models\Share;
use models\Song;

class ShareLogicImp implements ShareLogic
{
    /**
     * 分享功能
     * @param $params
     * @return mixed
     */
    public function share($params)
    {
        $model = new Share();
        if(empty($params['uid'])){
            return Response::returnInfo(0, '用户ID不能为空');
        }
        $model -> uid = $params['uid'];
        if(!empty($params['id'])){
            if(!empty($params['type'])){
                if($params['type'] != 1 && $params['type'] != 2){
                    return Response::returnInfo(0, '请求类型出错');
                }
                $model -> type = $params['type'];
                $model -> psid = $params['id'];
            }
        }else{
            return Response::returnInfo(0, '分享对象的ID不能为空');
        }
        $result = $model -> save();
        if($result){
            if($model -> type == 1){
                $song = Song::findOne($model -> psid);
                $song -> sharenum += 1;
                $song -> save();
            }else if($model -> type == 2){
                $playList = Playlist::findOne($model -> psid);
                $playList -> sharenum += 1;
                $playList -> save();
            }
            return Response::returnInfo(1, '分享成功');
        }
        return Response::returnInfo(0, '分享失败');
    }

    /**
     * 获取用户动态页面
     * @param $uid
     * @return mixed
     */
    public function getUserEventPage($uid)
    {
        if(empty($uid) || !is_numeric($uid)){
            return [];
        }
        $shareDao = new ShareDao();
        return $shareDao -> getUserEventPage($uid);
    }

    /**
     * 获取关注用户动态
     * @param $uid
     * @return mixed
     */
    public function getFollowEventPage($uid)
    {
        if(empty($uid) || !is_numeric($uid)){
            return [];
        }
        $shareDao = new ShareDao();
        return $shareDao -> getFollowEventPage($uid);
    }

    /**
     * 获取用户动态数
     * @param $uid
     * @return mixed
     */
    public function getUserEventCount($uid)
    {
        if(empty($uid)){
            return [];
        }
        $count = Share::find() -> select('id')-> where(['uid' => $uid]) -> count();
        return $count;
    }

    /**
     * 删除分享
     * @param $uid
     * @param $id
     * @return mixed
     */
    public function delShare($uid, $id)
    {
        if(empty($uid) || empty($id)){
            return Response::returnInfo(0, '请求参数出错');
        }
        if(!$this -> isUserShare($uid, $id)){
            return Response::returnInfo(0, '不能删除他人的分享');
        }
        $model = Share::findOne(['uid' => $uid, 'id' => $id]);
        $result = $model -> delete();
        if($result){
            return Response::returnInfo(1, '删除成功');
        }
        return Response::returnInfo(0, '删除失败');
    }

    /**
     * 判断是否是用户分享
     * @param $uid
     * @param $id
     * @return mixed
     */
    public function isUserShare($uid, $id)
    {
        if(empty($uid) || empty($id)){
            return false;
        }

        $model = Share::findOne(['uid' => $uid, 'id' => $id]);
        if(!empty($model)){
            return true;
        }
        return false;
    }


}