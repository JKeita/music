<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/24
 * Time: 16:04
 */

namespace frontend\controllers;

use common\help\Request;
use yii\web\Controller;
use models\User;
use Yii;

class SongController extends Controller
{
    public function actionInfo(){
        if(\Yii::$app -> request -> isAjax){
            return $this -> renderPartial("song");
        }else{
            return $this -> render("song");
        }
    }
}