<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/24
 * Time: 20:36
 */

namespace logic;


use common\help\Response;
use dao\SongDao;
use Elasticsearch\ClientBuilder;
use models\Song;


class SongLogicImp implements  SongLogic
{
    public function getSongById($id)
    {

        $redisLogic = new RedisLogicImp();
        $data = $redisLogic -> getSongById($id);
//        file_put_contents("c:\log.txt", var_export($data, true));
        if(empty($data)){
            $data = Song::findOne(['id' => $id, 'state' => 0]);
            if(!empty($data)){
                $data = $data -> toArray();
            }
        }

        if(!empty($data)){
            return Response::returnInfo(1, 'ok', $data);
        }
        return Response::returnInfo(0, 'no found');
    }

    /**
     * 保存歌曲
     * @param $params
     * @return mixed
     */
    public function save($params)
    {
        if(empty($params['name'])){
            return Response::returnInfo(0, '歌曲名不能为空');
        }
        if(empty($params['src'])){
            return Response::returnInfo(0, '歌曲路径不能为空');
        }
        if(empty($params['duration'])){
            return Response::returnInfo(0, '歌曲时长不能为空');
        }
       if(!empty($params['id'])){
           $model = Song::findOne(['id' => $params['id'], 'state' => 0]);
           if(empty($model)){
               return Response::returnInfo(0, '保存失败:未找到相关数据');
           }
       }else{
           $model = new Song();
       }

        $model -> name = $params['name'];
        $model -> src = $params['src'];
        $model -> duration = $params['duration'];
        $model -> author = !empty($params['author'])?$params['author']:'';
        $model -> cover = !empty($params['cover'])?$params['cover']:'';
        $model -> lyric = !empty($params['lyric'])?$params['lyric']:'';
        $result = $model -> save();
        if($result){
            $esParams['id'] = $model -> id;
            $esParams['body'] = [
                'id' => $model -> id,
                'name' => $model -> name,
                'src' => $model -> src,
                'duration' => $model -> duration,
                'author' => $model -> author,
                'cover' => $model -> cover,
                'lyric' => $model -> lyric,
                'collectnum' => $model -> collectnum,
                'sharenum' => $model -> sharenum,
                'state' => $model -> state,
            ];
            $this -> esIndex($esParams);
            $redisLogic = new RedisLogicImp();
            $redisParams = $esParams['body'];
            $redisLogic -> saveSong($redisParams);
            return Response::returnInfo(1, '保存成功');
        }
        return Response::returnInfo(0, '保存失败');
    }

    /**
     * 删除歌单
     * @param $ids
     * @return mixed
     */
    public function del($ids)
    {
        if(empty($ids)){
            return Response::returnInfo(0, 'id不能为空');
        }
        $result = Song::updateAll(['state' => 1], ['id' => $ids]);
        if($result > 0){
            $redisLogic = new RedisLogicImp();
            if(is_array($ids)){
                foreach($ids as $id){
                    $params['id'] = $id;
                    $this -> esDel($params);
                    $redisLogic -> delSongById($id);
                }
            }else{
                $params['id'] = $ids;
                $this -> esDel($params);
                $redisLogic -> delSongById($ids);
            }
            return Response::returnInfo(1, '删除成功');
        }
        return Response::returnInfo(0, '删除失败');
    }


    /**
     * 获取歌曲列表页面
     * @param $params
     * @return mixed
     */
    public function getSongListPage($params)
    {
        $songDao = new SongDao();
        return $songDao -> getSongListPage($params);
    }

    /**
     * es创建或更新文档
     * @param $params
     * @return mixed
     */
    public function esIndex($params)
    {
        $client = ClientBuilder::create()->setHosts(['127.0.0.1:9200'])->build();
        $params['index'] = 'music';
        $params['type'] = 'song';
        if(empty($params['body'])||empty($params['id'])){
            return [];
        }
        return $client->index($params);
    }

    /**
     * es删除文档
     * @param $params
     * @return mixed
     */
    public function esDel($params)
    {
        $client = ClientBuilder::create()->setHosts(['127.0.0.1:9200'])->build();
        $params['index'] = 'music';
        $params['type'] = 'song';
        return $client -> delete($params);
    }

}