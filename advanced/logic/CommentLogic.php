<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/8
 * Time: 14:55
 */

namespace logic;


interface CommentLogic
{
    /**保存评论
     * @param $params
     * @return mixed
     */
    public function save($params);

    /**
     * 获取评论分页数据
     * @param $params
     * @return mixed
     */
    public function getPage($params);
}