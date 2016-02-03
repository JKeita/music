<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/16
 * Time: 16:10
 */
namespace dao;
use models\PlayList;
use yii\db\Query;
class PlayListDao {

    /**
     * 获取表单歌曲
     * @param $id
     */
    public function getPlayListSong($id){
        $query = new Query();
        $query
            -> select('s.*')
            -> from('song_collect as sc')
            -> innerJoin('song as s', 's.id=sc.sid')
            -> where([
                'sc.pid' => $id
            ]);
        $result = $query -> all();
        return $result;
    }
}