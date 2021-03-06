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
     * @param int $uid
     * @return int mixed
     */
    public function getUserPlayListByUid($uid, $limit = 0);

    /**
     * 获取用户收藏的歌单
     * @param $uid
     * @return mixed
     */
    public function getUserCollectListByUid($uid);

    /**
     * 创建歌单
     * @param $uid
     * @param $sid
     * @param $name
     * @return mixed
     */
    public function create($uid, $name);

    /**
     * 保存歌单信息
     * @param $params
     * @return mixed
     */
    public function saveInfo($params);

    /**
     * 保存封面
     * @param $pid
     * @param $path
     * @return mixed
     */
    public function saveCover($pid, $path);
    /**
     * 添加音乐到歌单
     * @param $sid
     * @param $pid
     * @return mixed
     */
    public function addSongToPlayList($sid, $pid);


    /**
     * 收藏所有
     * @param $sidArr
     * @param $pid
     * @return mixed
     */
    public function collectAll($sidArr, $pid);

    /**
     * 从歌单中删除指定音乐
     * @param $sid
     * @param $pid
     * @return mixed
     */
    public function delSongFromPlayList($sid, $pid);
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
     * 检查用户是否收藏该歌单
     * @param $uid
     * @param $pid
     * @return mixed
     */
    public function isUserCollect($uid, $pid);

    /**
     * 通过ID取歌单信息
     * @param $id
     * @return mixed
     */
    public function getPlayListById($id);

    /**
     * 通过ID删除歌单
     * @param $pid
     * @return mixed
     */
    public function del($pid);

    /**
     * 获取歌单歌曲
     * @param $id
     * @return mixed
     */
    public function getPlayListSongById($id);

    /**
     * 获取歌单里的歌曲ID列表
     * @param $pid
     * @return mixed
     */
    public function getSongIdArrByPid($pid);

    /**
     * 获取歌单信息
     * @param $pid
     * @return mixed
     */
    public function getInfo($pid);

    /**
     * 收藏歌单
     * @param $pid
     * @param $uid
     * @return mixed
     */
    public function collect($uid, $pid);

    /**
     * 删除收藏的歌单
     * @param $uid
     * @param $pid
     * @return mixed
     */
    public function delCollect($uid, $pid);

    /**
     * 歌单列表页面
     * @return mixed
     */
    public function getPlayListPage();

    /**
     * 获取收藏该歌单的用户信息
     * @param $pid
     * @param int $limit
     * @return mixed
     */
    public function getCollectUserByPid($pid, $limit = 8);

    /**
     * 获取热门歌单
     * @param $limit
     * @return mixed
     */
    public function getHotPlayList($limit = 5);

    /**
     * 获取用户歌单数
     * @param $id
     * @return mixed
     */
    public function getUserPlayListNum($id);
}