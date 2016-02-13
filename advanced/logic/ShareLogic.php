<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/13
 * Time: 12:48
 */

namespace logic;


interface ShareLogic
{
    /**
     * 分享功能
     * @param $params
     * @return mixed
     */
    public function share($params);

    /**
     * 获取用户动态页面
     * @param $uid
     * @return mixed
     */
    public function getUserEventPage($uid);

    /**
     * 获取关注用户动态
     * @param $uid
     * @return mixed
     */
    public function getFollowEventPage($uid);

    /**
     * 获取用户动态数
     * @param $uid
     * @return mixed
     */
    public function getUserEventCount($uid);

    /**
     * 删除分享
     * @param $uid
     * @param $id
     * @return mixed
     */
    public function delShare($uid, $id);

    /**
     * 判断是否是用户分享
     * @param $uid
     * @param $id
     * @return mixed
     */
    public function isUserShare($uid, $id);
}