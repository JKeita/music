<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/27
 * Time: 21:07
 */

namespace logic;


use common\help\Response;
use dao\PlayListDao;
use models\PlayList;
use models\SongCollect;

class PlayListLogicImp implements PlayListLogic
{
    public function getUserPlayListByUid($uid)
    {
        if(empty($uid)){
            return [];
        }
        return PlayList::find() -> where(['uid' => $uid, 'state' => 0]) -> asArray() -> all();
    }


    public function create($uid, $name)
    {
        if(empty($uid) || !is_numeric($uid)){
            return Response::returnInfo(0, '用户ID参数出错');
        }

        if(!isset($name)){
            return Response::returnInfo(0, '歌单名不能为空');
        }
        $model = new PlayList();
        $model -> name = $name;
        $model -> uid = $uid;
        $result = $model -> save();
        file_put_contents("c:\log.txt", var_export($model -> errors, true));
        if($result){
            return Response::returnInfo(1, '创建歌单成功', ['id' => $model -> id]);
        }
        return Response::returnInfo(0, '创建歌单失败');
    }



    public function addSongToPlayList($sid, $pid)
    {
        if(empty($sid)){
            return Response::returnInfo(0, '歌曲ID参数出错');
        }
        if(empty($pid)){
            return Response::returnInfo(0, '歌单ID参数出错');
        }
        $model = SongCollect::findOne(['sid' => $sid, 'pid' => $pid]);
        if(!empty($model)){
            return Response::returnInfo(0, '歌曲已存在该歌单中');
        }
        $model = new SongCollect();
        $model -> sid = $sid;
        $model -> pid = $pid;
        $result = $model -> save();
        if($result){
            return Response::returnInfo(1, '收藏成功', ['id' => $model -> id]);
        }
        return Response::returnInfo(0, '收藏失败');
    }


    public function createAndCollect($uid, $name, $sid)
    {
       $result = $this -> create($uid, $name);
        if($result['code'] != 1){
            return $result;
        }
        $result = $this -> addSongToPlayList($sid, $result['data']['id']);
        return $result;
    }

    public function isUserPlayList($uid, $pid)
    {
       if(empty($uid)||empty($pid)){
           return false;
       }
        $model = PlayList::findOne(['id' => $pid, 'uid' => $uid]);
        if(!empty($model)){
            return true;
        }
        return false;
    }

    /**
     * 通过ID取歌单信息
     * @param $id
     * @return mixed
     */
    public function getPlayListById($id)
    {
        if(empty($id)){
            return [];
        }
        $model = PlayList::findOne(['id' => $id, 'state' => 0]);
        if(!empty($model)){
            return $model -> toArray();
        }
        return null;
    }

    /**
     * 通过ID删除歌单
     * @param $pid
     * @return mixed
     */
    public function del($pid)
    {
        if(empty($pid)){
            return Response::returnInfo(0, '删除失败:参数出错');
        }
        $model  = PlayList::findOne($pid);
        if(empty($model)){
            return Response::returnInfo(0, '删除失败:未找到数据');
        }
        $result = $model -> delete();
        if($result){
            return Response::returnInfo(1, '删除成功');
        }
        return Response::returnInfo(0,'删除失败');
    }

    /**
     * 获取歌单歌曲
     * @param $id
     * @return mixed
     */
    public function getPlayListSongById($id)
    {
        if(empty($id)){
            return [];
        }
        $playListDao = new PlayListDao();
        return $playListDao -> getPlayListSong($id);
    }


}