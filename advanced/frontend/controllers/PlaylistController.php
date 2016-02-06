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
        ];
        if(in_array($action -> id,$actionArr)){
            return true;
        }
        return parent::beforeAction($action);
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

    public function actionTest(){
        $playListLogic = new PlayListLogicImp();
        $result = $playListLogic -> getSongIdArrByPid('1');
        var_dump($result);
    }
}