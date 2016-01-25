<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/24
 * Time: 20:35
 */

namespace logic;


interface SongLogic
{
    /**
     * 通过id查找歌曲信息
     * @param $id
     * @return mixed
     */
    public function getSongById($id);
}