<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/20
 * Time: 14:23
 */

namespace backend\controllers;


use common\help\Request;
use logic\ReportLogicImp;
use yii\web\Controller;

class ReportController extends Controller
{
    public function beforeAction($action)
    {
        /**
         * 不需要csrf验证的action
         */
        $actionArr = [
            'examine',
        ];
        if(in_array($action -> id,$actionArr)){
            return true;
        }
        return parent::beforeAction($action);
    }

    public function actionList(){
        if(\Yii::$app -> user -> isGuest){
            return $this -> redirect(Url::to(['site/login']));
        }
        $reportLogic = new ReportLogicImp();
        $reportData = $reportLogic -> getReportListPage();
        $viewData = [
            'data' => $reportData['data'],
            'page' => $reportData['page'],
        ];
        if(\Yii::$app -> request -> isAjax){
            return $this -> renderPartial("list", $viewData);
        }else{
            return $this -> render("list", $viewData);
        }
    }

    public function actionExamine(){
        if(\Yii::$app -> user -> isGuest){
            return json_encode(['code' => 0, 'msg' => '请先登录']);
        }
        $ids = Request::getPostValue('id');
        if(empty($ids)){
            $ids = Request::getPostValue('ids');
            if(!empty($ids)){
                $ids = explode(",", $ids);
            }
        }
        $type = Request::getPostValue('type');
        $reportLogic = new ReportLogicImp();
        $result = $reportLogic -> examine($ids, $type);
        return json_encode($result);
    }
}