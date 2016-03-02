<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/16
 * Time: 16:11
 */
namespace dao;
use models\PlayListCollect;
use yii\db\Query;

class PlayListCollectDao {
    /**
     * 获取收藏该歌单的用户信息
     * @param $pid
     * @param int $limit
     * @return mixed
     */
    public function getCollectUserByPid($pid, $limit = 8){
        if(empty($pid)||!is_numeric($pid)){
            return [];
        }
        $query1 = new Query();
        $query1
            -> select('uid')
            -> from('play_list_collect')
            -> where([
               'pid' => $pid
            ])
            -> limit($limit);
        $uidArr = $query1 -> column();
        $query2 = new Query();
        $query2
            -> select('id,username,headimg')
            -> from('user')
            -> where([
                'id' => $uidArr
            ]);
        return $query2 -> all();
    }
}