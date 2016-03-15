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

    /**
     * 获取歌单信息
     * @param $id
     */
    public function getPlayListById($id){
        $query = new Query();
        $query
            -> select([
                'p.*',
                'pt.tags'
            ])
            -> from('playlist as p')
            -> leftJoin('(
	            select pid, GROUP_CONCAT(t.name) as tags
	            from playlist_tag
	            inner join tag as t on tid = t.id
	            where pid = :pid
	            group by pid
                ) as pt', 'pt.pid = p.id')
            -> where([
                'p.id' => $id
            ])
            -> limit(1)
            -> addParams([':pid' => $id]);
        $result = $query -> one();
        file_put_contents("c:\log.txt", var_export($result, true));
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

    /**
     * 获取热门歌单
     * @param $limit
     * @return mixed
     */
    public function getHotPlayList($limit = 5)
    {
        $query = new Query();
        $query
            -> select ('p.*, u.username')
            -> from('playlist as p')
            -> leftJoin('user as u', 'p.uid = u.id')
            -> where([
                'state' => 0
            ])
            -> orderBy('collectnum desc, sharenum desc, created desc')
            -> limit($limit);
        return $query -> all();
    }
}