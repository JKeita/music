<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/27
 * Time: 21:12
 */

namespace frontend\controllers;



use logic\PlayListLogicImp;
use yii\base\Exception;
use yii\web\Controller;
use common\help\Request;
use yii\web\NotFoundHttpException;
use yii\web\UploadedFile;

class PlaylistController extends Controller
{
    public function beforeAction($action)
    {
        /**
         * 不需要csrf验证的action
         */
        $actionArr = [
            'select',
            'add',
            'create',
            'del',
            'collect-song',
            'del-song',
            'uploadcover',
        ];
        if(in_array($action -> id,$actionArr)){
            return true;
        }
        return parent::beforeAction($action);
    }

    /**
     * 歌单页
     */
    public function actionInfo(){
        $id = Request::getQueryValue('id');
        if(empty($id)){
            throw new NotFoundHttpException();
        }
        $playListLogic = new PlayListLogicImp();
        $data = $playListLogic -> getInfo($id);
        $songList = $playListLogic -> getPlayListSongById($id);
        $params = [
            'id' => $id,
            'data' => $data,
            'songList' => $songList,
        ];
        if(\Yii::$app -> request -> isAjax){
            return $this -> renderPartial("playlist", $params);
        }else{
            return $this -> render("playlist", $params);
        }
    }

    public function actionSelect(){
        if(\Yii::$app -> user -> isGuest){
            throw new NotFoundHttpException();
        }
        $playListLogic = new PlayListLogicImp();
        $user = \Yii::$app -> user -> identity;
        $playList = $playListLogic -> getUserPlayListByUid($user -> getId());
        return $this -> renderPartial('select',[
            'playList' => $playList
        ]);
    }

    public function actionAdd(){
        if(\Yii::$app -> user -> isGuest){
            throw new NotFoundHttpException();
        }
        $sid = Request::getPostValue('sid');
        $name = Request::getPostValue('name');
        $user = \Yii::$app -> user -> identity;
        $playListLogic = new PlayListLogicImp();
        $result = $playListLogic -> createAndCollect($user -> getId(), $name, $sid);
        return json_encode($result);
    }

    /**
     * 创建歌单
     */
    public function actionCreate(){
        if(\Yii::$app -> user -> isGuest){
            throw new NotFoundHttpException();
        }
        $name = Request::getPostValue('name');
        $user = \Yii::$app -> user -> identity;
        $playListLogic = new PlayListLogicImp();
        $result = $playListLogic -> create($user -> getId(), $name);
        return json_encode($result);
    }

    public function actionCollectSong(){
        if(\Yii::$app -> user -> isGuest){
            throw new NotFoundHttpException();
        }
        $user = \Yii::$app -> user -> identity;
        $sid = Request::getPostValue('sid');
        $pid = Request::getPostValue('pid');
        $playListLogic = new PlayListLogicImp();
        if($playListLogic -> isUserPlayList($user -> getId(), $pid)){
            $result = $playListLogic ->addSongToPlayList($sid, $pid);
            return json_encode($result);
        }
        throw new NotFoundHttpException();
    }

    /**
     * 删除歌单中的歌曲
     */
    public function actionDelSong(){
        if(\Yii::$app -> user -> isGuest){
            throw new NotFoundHttpException();
        }
        $user = \Yii::$app -> user -> identity;
        $sid = Request::getPostValue('sid');
        $pid = Request::getPostValue('pid');
        $playListLogic = new PlayListLogicImp();
        if($playListLogic -> isUserPlayList($user -> getId(), $pid)){
            $result = $playListLogic ->delSongFromPlayList($sid, $pid);
            return json_encode($result);
        }
        throw new NotFoundHttpException();
    }

    /**
     * 删除歌单
     * @return string
     * @throws NotFoundHttpException
     */
    public function actionDel(){
        if(\Yii::$app -> user -> isGuest){
            throw new NotFoundHttpException();
        }
        $user = \Yii::$app -> user -> identity;
        $pid = Request::getPostValue('pid');
        $playListLogic = new PlayListLogicImp();
        if($playListLogic -> isUserPlayList($user -> getId(), $pid)){
            $result = $playListLogic ->del($pid);
            return json_encode($result);
        }
        throw new NotFoundHttpException();
    }

    /**
     * 保存歌单基本信息
     */
    public function actionSaveinfo(){
        if(\Yii::$app -> user -> isGuest){
            throw new NotFoundHttpException();
        }
        $user = \Yii::$app -> user -> identity;
        $id = Request::getPostValue('id');
        $playListLogic = new PlayListLogicImp();
        if($playListLogic -> isUserPlayList($user -> getId(), $id)){
            $params = [
                'id' => $id,
                'name' => Request::getPostValue('name'),
                'profile' => Request::getPostValue('profile'),
            ];
            $result = $playListLogic -> saveInfo($params);
            return json_encode($result);
        }
        throw new NotFoundHttpException();
    }

    /**
     * 保存封面
     */
    public function actionUploadcover(){
        $file = UploadedFile::getInstanceByName('coverimg');
        $pid = Request::getPostValue('id');
        $path = 'cover/'.time().mt_rand(1,1000). ".jpg";
        $result = $file -> saveAs(__DIR__.'/../../upload/img/'.$path, true);
        if($result) {
            $playListLogic = new PlayListLogicImp();
            $result = $playListLogic->saveCover($pid, $path);
            if ($result['code'] == 1) {
                $result = true;
            } else {
                $result = false;
            }
        }
        return json_encode(['success' => $result]);
    }
    public function actionTest(){
        $playListLogic = new PlayListLogicImp();
        $result = $playListLogic -> getSongIdArrByPid('1');
        var_dump($result);
    }
}