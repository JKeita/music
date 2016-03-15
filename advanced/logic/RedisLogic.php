<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/23
 * Time: 14:50
 */

namespace logic;


interface RedisLogic
{
    /**
     * 检查redis是否连接成功
     * @return mixed
     */
    public function isLink();

    /**
     * 通过ID获取Reids中Song数据
     * @param $id
     * @return mixed
     */
    public function getSongById($id);

    /**
     * 通过ID获取Redis中的歌单数据
     * @param $id
     * @return mixed
     */
    public function getPlayListById($id);

    /**
     * 保存Song数据
     * @param $params
     * @return mixed
     */
    public function saveSong($params);

    /**
     * 保存playlist数据
     * @param $params
     * @return mixed
     */
    public function savePlayList($params);

    /**
     * 通过ID刷新同步mysql中的数据到redis
     * @param $id
     * @return mixed
     */
    public function flushPlayListById($id);

    /**
     * 通过ID删除歌曲
     * @param $id
     * @return mixed
     */
    public function delSongById($id);

    /**
     * 通过ID删除歌单
     * @param $id
     * @return mixed
     */
    public function delPlayListById($id);


}