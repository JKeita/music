<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/16
 * Time: 17:09
 */

namespace backend\controllers;

use yii\web\Controller;
use yii\helpers\Url;
use Yii;
use common\help\Request;
use common\help\Response;

class SongController extends Controller
{
    public function actionEdit(){
        $viewData = [

        ];
        if(\Yii::$app -> request -> isAjax){
            return $this -> renderPartial("edit", $viewData);
        }else{
            return $this -> render("edit", $viewData);
        }
    }
}