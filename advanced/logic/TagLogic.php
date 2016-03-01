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

    /**
     * 获取标签列表页面
     * @return mixed
     */
    public function getListPage();

    /**
     * 保存标签
     * @param $params
     * @return mixed
     */
    public function save($params);

    /**
     * 删除标签
     * @param $id
     * @return mixed
     */
    public function delTagById($id);
}