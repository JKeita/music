<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/14
 * Time: 13:56
 */

namespace frontend\controllers;


use common\help\Request;
use logic\SearchLogicImp;
use yii\web\Controller;

class SearchController extends Controller
{
    public function actionIndex(){
        $condition = [
            'key' => Request::getQueryValue('key'),
            'type' => Request::getQueryValue('type'),
            'page' => Request::getQueryValue('page'),
        ];
        $searchLogic = new SearchLogicImp();
        $searchData = $searchLogic -> search($condition);
        $viewData = [
            'key' => $condition['key'],
            'type' => $condition['type'],
            'data' => $searchData['data'],
            'page' => $searchData['page'],
        ];
        if(\Yii::$app -> request -> isAjax){
            return $this -> renderPartial("index", $viewData);
        }else{
            return $this -> render("index", $viewData);
        }
    }
}