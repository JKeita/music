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
        if(!empty($condition['type']) && $condition['type'] == 4){
            $searchData = $searchLogic -> searchPlayList($condition);
            $viewName = 'playlist';
            file_put_contents("c:\log.txt", var_export($searchData, true), FILE_APPEND);
        }else{
            $searchData = $searchLogic -> search($condition);
            $viewName = 'index';
        }

        $viewData = [
            'key' => $condition['key'],
            'type' => $condition['type'],
            'data' => $searchData['data'],
            'page' => $searchData['page'],
        ];
        if(\Yii::$app -> request -> isAjax){
            return $this -> renderPartial($viewName, $viewData);
        }else{
            return $this -> render($viewName, $viewData);
        }
    }
}