<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/23
 * Time: 14:50
 */

namespace logic;


class RedisLogicImp implements RedisLogic
{
    private $redis;
    public function __construct()
    {
        $this -> redis = new \Redis();
        $this -> redis -> connect('127.0.0.1',6379);
    }

    /**
     * 通过ID获取Reids中Song数据
     * @param $id
     * @return mixed
     */
    public function getSongById($id)
    {
        if(empty($id)||!is_numeric($id)){
            return [];
        }
//        return \Yii::$app -> redis -> hgetall('music:song:'.$id);
        if($this -> isLink()){
            return $this -> redis -> hGetAll('music:song:'.$id);
        }
        return [];
    }

    /**
     * 保存Song数据
     * @param $params
     * @return mixed
     */
    public function saveSong($params)
    {
        if(empty($params)){
            return false;
        }
        if($this -> isLink()){
            foreach($params as $key => $value){
                 $this -> redis -> hSet("music:song:{$params['id']}", $key, $value);
            }
            return true;
        }

        return false;
    }

    /**
     * 通过ID删除歌曲
     * @param $id
     * @return mixed
     */
    public function delSongById($id)
    {
        if(empty($id)){
            return false;
        }
        if($this -> isLink()){
            $result = $this -> redis -> del('music:song:'.$id);
            if($result){
                return true;
            }
        }

        return false;
    }

    /**
     * 检查redis是否连接成功
     * @return mixed
     */
    public function isLink(){
        $result = $this -> redis -> ping();
        return !empty($result);
    }
}