<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/16
 * Time: 16:10
 */
namespace dao;
use models\PlayList;
use yii\data\Pagination;
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

    public function getPlayListPage(){
        $query = new Query();
        $query
            -> select ('*')
            -> from('playlist')
            -> where([
                'state' => 0
            ])
            -> orderBy('collectnum desc, sharenum desc, created desc');
        $count = $query -> count();
        $page = new Pagination([
            'totalCount' => $count,
            'defaultPageSize' => 20,
        ]);
        $data = $query -> limit($page -> limit) -> offset($page -> offset) -> all();
        return ['data' => $data, 'page' => $page];
    }
}