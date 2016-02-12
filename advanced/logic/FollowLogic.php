<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/12
 * Time: 14:16
 */

namespace logic;


interface FollowLogic
{
    /**
     * 关注好友
     * @param $uid
     * @param $fid
     * @return mixed
     */
    public function follow($uid, $fid);

    /**
     * 取消关注
     * @param $uid
     * @param $fid
     * @return mixed
     */
    public function delFollow($uid, $fid);

    /**
     * 检查是否已经关注
     * @param $uid
     * @param $fid
     * @return mixed
     */
    public function isFollow($uid, $fid);

    /**
     * 获取关注信息
     * @param $uid
     * @return mixed
     */
    public function getFollows($uid);

    /**
     * 获取粉丝信息
     * @param $uid
     * @return mixed
     */
    public function getFans($uid);

    /**
     * 获取关注数
     * @param $uid
     * @return mixed
     */
    public function getFollowsNum($uid);

    /**
     * 获取粉丝数
     * @param $uid
     * @return mixed
     */
    public function getFansNum($uid);

}