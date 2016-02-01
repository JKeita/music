<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/16
 * Time: 16:52
 */

namespace frontend\controllers;

use common\help\Request;
use common\models\LoginForm;
use logic\PlayListLogicImp;
use logic\UserLogicImp;
use models\User;
use Yii;
use frontend\models\SignupForm;
use yii\base\Exception;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\web\UploadedFile;

class UserController extends Controller{

    public function beforeAction($action)
    {
        /**
         * 不需要csrf验证的action
         */
        $actionArr = [
            'tophead',
            'logout',
            'uploadhead',
        ];
        if(in_array($action -> id,$actionArr)){
            return true;
        }
        return parent::beforeAction($action);
    }

    /**
     * 处理注册
     * @return string
     */
    public function actionSignup()
    {
        $model = new SignupForm();
        if ($model->load(Yii::$app->request->post(),'')) {
            $result = $model->signup();
            if ($result['code'] == 1) {
                Yii::$app->getUser()->login($result['data']);
                return json_encode(['code' => 1, 'msg' => '注册成功']);
            }
            return json_encode(['code' => 0, 'msg' => $result['msg']]);
        }

        return json_encode(['code' => 0, 'msg' => '注册失败!']);
    }

    /**
     * 登录处理
     * @return string
     */
    public function actionLogin(){
/*        if (!Yii::$app->user->isGuest) {
            return json_encode(['code' => 1, 'msg' => '已经登录']);
        }*/

        $model = new LoginForm(User::className());
        if ($model->load(Yii::$app->request->post(),'') && $model->login()) {
            return json_encode(['code' => 1, 'msg' => '登陆成功']);
        } else {
            return json_encode(['code' => 0, 'msg' => '账号或密码错误']);
        }
    }
    /**
     * 用户信息页面
     * @return string
     */
    public function actionUserInfo(){
        if(\Yii::$app -> request -> isAjax){
            return $this -> renderPartial("userinfo");
        }else{
            return $this -> render("userinfo");
        }
    }

    /**
     * 拉去顶部用护栏信息
     * @return string
     */
    public function actionTophead(){
        return json_encode(['code' => 1, 'data' => $this -> renderPartial('tophead')]);
    }

    /**
     * 退出登录
     * @return string
     */
    public function actionLogout()
    {
        if(Yii::$app->user->logout()){
            return json_encode(['code' => 1]);
        }
        return json_encode(['code' => 0]);

    }

    /**
     * 更新用户资料
     * @return string
     */
    public function actionUpdate(){
        if (Yii::$app->user->isGuest) {
            return json_encode(['code' => 0, 'msg' => '你尚未登录']);
        }
        $params = [
            'username' => Request::getPostValue('username'),
            'sex' => Request::getPostValue('sex'),
            'profile' => Request::getPostValue('profile'),
        ];
        $userLogic = new UserLogicImp();
        $result = $userLogic -> update($params);
        return json_encode($result);
    }

    /**
     * 上传头像
     */
    public function actionUploadhead(){
        $file = UploadedFile::getInstanceByName('headimg');
//        error_reporting("E_ALL");
//        ini_set("display_errors", 1);
        $path = 'head/'.time().mt_rand(1,1000). ".jpg";

        $result = $file -> saveAs(__DIR__.'/../../upload/img/'.$path, true);
//        file_put_contents("c:\log.txt", var_export($result, true));
        if($result){
            $userLogic = new UserLogicImp();
            $result = $userLogic -> updateHeadImg($path);
            if($result['code'] == 1){
                $result = true;
            }else{
                $result = false;
            }
        }

        return json_encode(['success' => $result]);
    }

    public function actionResetpwd(){
        $oldpwd = Request::getPostValue('oldpwd');
        $pwd = Request::getPostValue('pwd');
        $repwd = Request::getPostValue('repwd');
        $userLogic = new UserLogicImp();
        $result = $userLogic -> resetPwd($oldpwd, $pwd, $repwd);
        return json_encode($result);
    }

    /**
     * 我的音乐页面
     */
    public function actionMysong(){
        if(\Yii::$app -> user -> isGuest){
            throw new NotFoundHttpException();
        }
        $id = Request::getQueryValue('id');
        $params = [
          'id' => $id,
        ];
        if(\Yii::$app -> request -> isAjax){
            return $this -> renderPartial("mysong", $params);
        }else{
            return $this -> render("mysong", $params);
        }
    }

    /**
     * 编辑歌单页面
     * @return string
     */
    public function actionEditplaylist(){
        if(\Yii::$app -> user -> isGuest){
            throw new NotFoundHttpException();
        }
        $pid = Request::getQueryValue('id');
        $uid = Yii::$app -> getUser() -> getId();
        $playListLogic = new PlayListLogicImp();
        if($playListLogic -> isUserPlayList($uid, $pid)){
            $model = $playListLogic -> getPlayListById($pid);
            if(empty($model)){
                throw new NotFoundHttpException();
            }
            $params = [
              'model' => $model,
            ];
        }else{
            throw new NotFoundHttpException();
        }

        if(\Yii::$app -> request -> isAjax){
            return $this -> renderPartial("editplaylist",$params);
        }else{
            return $this -> render("editplaylist",$params);
        }
    }

    /**
     * 编辑歌单封面页面
     * @return string
     */
    public function actionEditcover(){
        if(\Yii::$app -> user -> isGuest){
            throw new NotFoundHttpException();
        }
        $id = Request::getQueryValue('id');
        $params = [
            'id' => $id,
        ];
        if(\Yii::$app -> request -> isAjax){
            return $this -> renderPartial("editcover",$params);
        }else{
            return $this -> render("editcover",$params);
        }
    }
}