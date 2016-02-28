<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/28
 * Time: 16:27
 */

namespace logic;


interface TagLogic
{
    /**
     * 获取所有标签
     * @return mixed
     */
    public function getAllTag();

    /**
     * 保存歌单标签
     * @param $pid
     * @param $tidArr
     * @return mixed
     */
    public function savePlayListTag($pid, $tidArr);

    /**
     * 获取歌单的标签
     * @param $pid
     * @return mixed
     */
    public function getTagByPid($pid);
}