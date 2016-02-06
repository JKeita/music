<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/24
 * Time: 16:04
 */

namespace frontend\controllers;

use common\help\Lyric;
use common\help\Request;
use logic\PlayListLogicImp;
use logic\SongLogicImp;
use models\Song;
use yii\helpers\Html;
use yii\web\Controller;
use models\User;
use Yii;
use yii\web\NotFoundHttpException;

class SongController extends Controller
{
    public function beforeAction($action)
    {
        /**
         * 不需要csrf验证的action
         */
        $actionArr = [
            'getsongli',
        ];
        if(in_array($action -> id,$actionArr)){
            return true;
        }
        return parent::beforeAction($action);
    }
    public function actionInfo(){
        $id = Request::getValue('id');
        $songLogic = new SongLogicImp();
        $songInfo = $songLogic -> getSongById($id);
        if($songInfo['code'] != 1){
            throw new NotFoundHttpException();
        }
        $viewData = [
          'songInfo' => $songInfo['data']
        ];
        if(\Yii::$app -> request -> isAjax){
            return $this -> renderPartial("song", $viewData);
        }else{
            return $this -> render("song", $viewData);
        }
    }

    public function actionGetinfo(){
        $id = Request::getValue('id');
        $songLogic = new SongLogicImp();
        $result = $songLogic -> getSongById($id);
        if($result['code'] == 1){
           if(!empty($result['data']['lyric'])){
               $lyricRow = Lyric::parseLyric($result['data']['lyric']);
               $arr = [];
               foreach($lyricRow as $key => $value){
                   $arr[] = Html::tag('p',$value.Html::tag('br'),['class'=>'j-flag', 'data-time' => $key]);
               }
               $result['data']['lyric'] = implode("", $arr);
           }
        }
        return json_encode($result);
    }

    public function actionGetsongli(){
        $ids =  Request::getValue('ids');
        $pid = Request::getValue('pid');
        if(!empty($pid)){
            $playListLogic = new PlayListLogicImp();
            $ids = $playListLogic ->getSongIdArrByPid($pid);
        }
        if(!is_array($ids)){
            $ids = [$ids];
        }
        return $this -> renderPartial('songli', [
            'idArr' => $ids,
        ]);
    }
}