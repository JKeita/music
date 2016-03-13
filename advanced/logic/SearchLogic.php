<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/14
 * Time: 14:47
 */

namespace logic;


interface SearchLogic
{
    /**
     * 搜索
     * @param $condition
     * @return mixed
     */
    public function search($condition);

    /**
     * 搜索歌单
     * @param $condition
     * @return mixed
     */
    public function searchPlayList($condition);

    /**
     * 搜索用户
     * @param $condition
     * @return mixed
     */
    public function searchUser($condition);
}