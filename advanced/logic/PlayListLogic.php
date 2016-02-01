<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/27
 * Time: 21:07
 */

namespace logic;


interface PlayListLogic
{
    /**
     * 获取用户自建的歌单
     * @param $uid
     * @return mixed
     */
    public function getUserPlayListByUid($uid);

    /**
     * 创建歌单
     * @param $uid
     * @param $sid
     * @param $name
     * @return mixed
     */
    public function create($uid, $name);

    /**
     * 添加音乐到歌单
     * @param $sid
     * @param $pid
     * @return mixed
     */
    public function addSongToPlayList($sid, $pid);

    /**
     * 创建歌单并收藏音乐
     * @param $uid
     * @param $name
     * @param $sid
     * @return mixed
     */
    public function createAndCollect($uid, $name, $sid);

    /**
     * 检查是否是该用户的歌单
     * @param $uid
     * @param $pid
     * @return mixed
     */
    public function isUserPlayList($uid, $pid);

    /**
     * 通过ID取歌单信息
     * @param $id
     * @return mixed
     */
    public function getPlayListById($id);
}