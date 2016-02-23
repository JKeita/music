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
     * 通过ID获取Reids中Song数据
     * @param $id
     * @return mixed
     */
    public function getSongById($id);

    /**
     * 保存Song数据
     * @param $params
     * @return mixed
     */
    public function saveSong($params);

    /**
     * 通过ID删除歌曲
     * @param $id
     * @return mixed
     */
    public function delSongById($id);

    /**
     * 检查redis是否连接成功
     * @return mixed
     */
    public function isLink();
}