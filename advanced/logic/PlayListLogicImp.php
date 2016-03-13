<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/27
 * Time: 21:07
 */

namespace logic;


use common\help\Response;
use dao\PlayListCollectDao;
use dao\PlayListDao;
use models\PlayList;
use models\PlayListCollect;
use models\Song;
use models\SongCollect;
use models\User;
use yii\helpers\ArrayHelper;

class PlayListLogicImp implements PlayListLogic
{
    public function getUserPlayListByUid($uid, $limit = 0)
    {
        if(empty($uid)){
            return [];
        }
        $result = PlayList::find() -> where(['uid' => $uid, 'state' => 0]);
        if(!empty($limit)){
            $result = $result -> limit($limit);
        }
        return $result ->  asArray() -> all();
    }

    /**
     * 获取用户收藏的歌单
     * @param $uid
     * @return mixed
     */
    public function getUserCollectListByUid($uid) {
        if(empty($uid)){
            return [];
        }
        $ids = PlayListCollect::find() -> select('pid')-> where(['uid' => $uid]) -> column();
        if(empty($ids)){
            return [];
        }
        $playList =  PlayList::find() -> where(['id' => $ids, 'state' => 0]);
        return $playList ->  asArray() -> all();
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
//        file_put_contents("c:\log.txt", var_export($model -> errors, true));
        if($result){
            return Response::returnInfo(1, '创建歌单成功', ['id' => $model -> id]);
        }
        return Response::returnInfo(0, '创建歌单失败');
    }

    /**
     * 保存歌单信息
     * @param $params
     * @return mixed
     */
    public function saveInfo($params)
    {
        if(empty($params['name']) || trim($params['name']) == ''){
            return Response::returnInfo(0, '歌单名称不能为空字符串');
        }
        if(empty($params['id'])){
            return Response::returnInfo(0, '请求的歌单ID不能为空');
        }
        $model = PlayList::findOne($params['id']);
        if(empty($model)){
            return Response::returnInfo(0, '未找到数据');
        }
        $model -> profile = $params['profile'];
        $model -> name = $params['name'];
        $result = $model -> save();
        if($result){
            $tagLogic = new TagLogicImp();
            $tagLogic -> savePlayListTag($params['id'], $params['tidArr']);
            return Response::returnInfo(1, '保存成功');
        }
        return Response::returnInfo(0, '保存失败');
    }

    /**
     * 保存封面
     * @param $pid
     * @param $path
     * @return mixed
     */
    public function saveCover($pid, $path)
    {
        if(empty($pid)){
            return Response::returnInfo(0, '请求的歌单ID不能为空');
        }
        $model = PlayList::findOne($pid);
        if(empty($model)){
            return Response::returnInfo(0, '未找到数据');
        }
        $model -> cover = $path;
        $result = $model -> save();
        if($result){
            return Response::returnInfo(1, '保存成功');
        }
        return Response::returnInfo(0, '保存失败');
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
            $song = Song::findOne($sid);
            $song -> collectnum += 1;
            $song -> save();
            return Response::returnInfo(1, '收藏成功', ['id' => $model -> id]);
        }
        return Response::returnInfo(0, '收藏失败');
    }

    /**
     * 收藏所有
     * @param $sidArr
     * @param $pid
     * @return mixed
     */
    public function collectAll($sidArr, $pid)
    {
        if(empty($sidArr) || !is_array($sidArr)){
            return Response::returnInfo(0, '歌曲ID数组参数出错');
        }
        if(empty($pid) || !is_numeric($pid)){
            return Response::returnInfo(0, '歌单ID参数出错');
        }
        $okCount = 0;
        $errorCount = 0;
        foreach($sidArr as $sid){
            $result = $this ->addSongToPlayList($sid, $pid);
            if($result['code'] == 1){
                $okCount++;
            }else{
                $errorCount++;
            }
        }
        if($okCount > 0){
            return Response::returnInfo(1, '收藏成功:'.$okCount.'首,收藏失败:'.$errorCount.'首');
        }
        return Response::returnInfo(0, '收藏失败');
    }


    /**
     * 从歌单中删除指定音乐
     * @param $sid
     * @param $pid
     * @return mixed
     */
    public function delSongFromPlayList($sid, $pid)
    {
        if(empty($sid)){
            return Response::returnInfo(0, '歌曲ID参数出错');
        }
        if(empty($pid)){
            return Response::returnInfo(0, '歌单ID参数出错');
        }
        $model = SongCollect::findOne(['sid' => $sid, 'pid' => $pid]);
        if(empty($model)){
            return Response::returnInfo(0, '歌曲不存在该歌单中');
        }
        $result = $model -> delete();
        if($result){
            $song = Song::findOne($sid);
            $collectnum =  $song -> collectnum - 1;
            if($collectnum < 0){
                $collectnum = 0;
            }
            $song -> collectnum = $collectnum;
            $song -> save();
            return Response::returnInfo(1, '删除成功');
        }
        return Response::returnInfo(0, '删除失败');
    }


    public function createAndCollect($uid, $name, $sid)
    {
       $result = $this -> create($uid, $name);
        if($result['code'] != 1){
            return $result;
        }
        if(is_array($sid)){
            $result = $this -> collectAll($sid, $result['data']['id']);
        }else{
            $result = $this -> addSongToPlayList($sid, $result['data']['id']);
        }
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
     * 检查用户是否收藏该歌单
     * @param $uid
     * @param $pid
     * @return mixed
     */
    public function isUserCollect($uid, $pid)
    {
        if(empty($uid)||empty($pid)){
            return false;
        }
        $model = PlayListCollect::findOne(['uid' => $uid, 'pid' => $pid]);
        if(!empty($model)){
            return true;
        }
        return false;
    }

    /**
     * 收藏歌单
     * @param $pid
     * @param $uid
     * @return mixed
     */
    public function collect($uid, $pid)
    {
        if(empty($uid)||empty($pid)){
            return Response::returnInfo(0, '请求参数出错');
        }
        if($this -> isUserPlayList($uid, $pid)){
            return Response::returnInfo(0, '该歌单是自己创建不能收藏');
        }
        if($this -> isUserCollect($uid, $pid)){
            return Response::returnInfo(0, '该歌单已收藏');
        }
        $model = new PlayListCollect();
        $model -> uid = $uid;
        $model -> pid = $pid;
        $result = $model -> save();
        if($result){
            $playList = Playlist::findOne($pid);
            $playList -> collectnum += 1;
            $playList -> save();
            return Response::returnInfo(1, '收藏成功');
        }
        return Response::returnInfo(0, '收藏失败');
    }

    /**
     * 删除收藏的歌单
     * @param $uid
     * @param $pid
     * @return mixed
     */
    public function delCollect($uid, $pid)
    {
        if(empty($uid)||empty($pid)){
            return Response::returnInfo(0, '请求参数出错');
        }
        if($this -> isUserPlayList($uid, $pid)){
            return Response::returnInfo(0, '该歌单是自己创建不是收藏歌单');
        }
        if(!$this -> isUserCollect($uid, $pid)){
            return Response::returnInfo(0, '该歌单未收藏');
        }
        $model = PlayListCollect::findOne(['uid' => $uid, 'pid' => $pid]);
        $result = $model -> delete();
        if($result){
            $playList = Playlist::findOne($pid);
            $collectnum =  $playList -> collectnum - 1;
            if($collectnum < 0){
                $collectnum = 0;
            }
            $playList -> collectnum = $collectnum;
            $playList -> save();
            return Response::returnInfo(1, '取消收藏成功');
        }
        return Response::returnInfo(0, '取消收藏失败');
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
            PlayListCollect::deleteAll(['pid' => $pid]);
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

    /**
     * 获取歌单里的歌曲ID列表
     * @param $pid
     * @return mixed
     */
    public function getSongIdArrByPid($pid)
    {
        if(empty($pid)){
            return [];
        }
        $playListDao = new PlayListDao();
        $arr =  $playListDao -> getPlayListSong($pid);
        $result = ArrayHelper::getColumn($arr, 'id', false);
        return $result;
    }

    /**
     * 获取歌单信息
     * @param $pid
     * @return mixed
     */
    public function getInfo($pid)
    {
        if(empty($pid)||!is_numeric($pid)){
            return [];
        }
        $model = PlayList::findOne(['id' => $pid, 'state' => 0]);
        if(empty($model)){
            return [];
        }
        $playList = $model -> toArray();
        $uid = $playList['uid'];
        $model = User::findOne($uid);
        if(empty($model)){
            return $playList;
        }
        $creator = $model -> toArray();
        $playList['creator'] = $creator;
        return $playList;
    }

    /**
     * 歌单列表页面
     * @return mixed
     */
    public function getPlayListPage()
    {
        $playListDao = new PlayListDao();
        return $playListDao -> getPlayListPage();
    }

    /**
     * 获取收藏该歌单的用户信息
     * @param $pid
     * @param int $limit
     * @return mixed
     */
    public function getCollectUserByPid($pid, $limit = 8)
    {
        $plcDao = new PlayListCollectDao();
        return $plcDao -> getCollectUserByPid($pid, $limit);
    }

    /**
     * 获取热门歌单
     * @param $limit
     * @return mixed
     */
    public function getHotPlayList($limit = 5)
    {
        $playListDao = new PlayListDao();
        return $playListDao -> getHotPlayList($limit);
    }

    /**
     * 获取用户歌单数
     * @param $id
     * @return mixed
     */
    public function getUserPlayListNum($id)
    {
        if(empty($id) || !is_numeric($id)){
            return 0;
        }
        return PlayList::find() -> where(['uid' => $id, 'state' => 0]) -> count();
    }


}
