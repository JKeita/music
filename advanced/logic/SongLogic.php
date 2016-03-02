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

    /**
     * 保存歌曲
     * @param $params
     * @return mixed
     */
    public function save($params);

    /**
     * 获取歌曲列表页面
     * @param $params
     * @return mixed
     */
    public function getSongListPage($params);

    /**
     * es创建或更新文档
     * @param $params
     * @return mixed
     */
    public function esIndex($params);

    /**
     * es删除文档
     * @param $params
     * @return mixed
     */
    public function esDel($params);

    /**
     * 删除歌单
     * @param $ids
     * @return mixed
     */
    public function del($ids);

    /**
     * 通过歌曲id获取包含该歌曲的歌单
     * @param $sid
     * @param $limit
     */
    public function getPlayListBySid($sid, $limit = 8);
}