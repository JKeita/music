<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/3/1
 * Time: 20:11
 */

namespace backend\controllers;


use common\help\Request;
use logic\TagLogicImp;
use yii\web\Controller;

class TagController extends Controller
{
    public function beforeAction($action)
    {
        /**
         * 不需要csrf验证的action
         */
        $actionArr = [
            'save',
            'del',
        ];
        if(in_array($action -> id,$actionArr)){
            return true;
        }
        return parent::beforeAction($action);
    }

    /**
     * 标签管理页面
     * @return string|\yii\web\Response
     */
    public function actionList(){
        if(\Yii::$app -> user -> isGuest){
            return $this -> redirect(Url::to(['site/login']));
        }
        $tagLogic = new TagLogicImp();
        $listData = $tagLogic -> getListPage();
        $viewData = [
            'page' => $listData['page'],
            'data' => $listData['data'],
        ];
        if(\Yii::$app -> request -> isAjax){
            return $this -> renderPartial("list", $viewData);
        }else{
            return $this -> render("list", $viewData);
        }
    }

    /**
     * 保存标签
     * @return string
     */
    public function actionSave(){
        if(\Yii::$app -> user -> isGuest){
            return json_encode(['code' => 0, 'msg' => '请先登录']);
        }
        $params = [
            'id' => Request::getPostValue('id'),
            'name' => Request::getPostValue('name'),
        ];
        $tagLogic = new TagLogicImp();
        $result = $tagLogic -> save($params);
        return json_encode($result);
    }

    /**
     * 删除标签
     */
    public function actionDel(){
        if(\Yii::$app -> user -> isGuest){
            return json_encode(['code' => 0, 'msg' => '请先登录']);
        }
        $id = Request::getPostValue('id');
        $tagLogic = new TagLogicImp();
        $result = $tagLogic -> delTagById($id);
        return json_encode($result);
    }
}