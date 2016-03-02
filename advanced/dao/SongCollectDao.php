<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/16
 * Time: 16:12
 */
namespace dao;
use models\SongCollect;
use yii\db\Query;

class SongCollectDao {

    /**
     * 通过歌曲id获取包含该歌曲的歌单
     * @param $sid
     * @param $limit
     */
    public function getPlayListBySid($sid, $limit = 8){
        if(empty($sid)||!is_numeric($sid)){
            return [];
        }
        $query1 = new Query();
        $query1
            -> select('pid')
            -> from('song_collect')
            -> where([
                'sid' => $sid
            ])
            -> limit($limit);
        $pidArr = $query1 -> column();
        $query2 = new Query();
        $query2
            -> select('p.*, u.username')
            -> from('playlist as p')
            -> leftJoin('user as u', 'u.id = p.uid')
            -> where([
                'p.id' => $pidArr
            ]);
        return $query2 -> all();
    }
}