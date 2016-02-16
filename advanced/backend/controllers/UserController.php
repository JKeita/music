<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/16
 * Time: 14:01
 */

namespace backend\controllers;

use common\help\Request;
use common\help\Response;
use common\models\LoginForm;
use common\models\SignupForm;
use models\Admin;
use yii\web\Controller;
use yii\helpers\Url;
use Yii;

class UserController extends Controller
{
    /**
     * 登录模块
     * @return string
     */
    public function actionLogin(){
        if(\Yii::$app -> request -> isAjax){
            $model = new LoginForm(Admin::className());
            if ($model->load(\Yii::$app->request->post(),'') && $model->login()) {
                return json_encode(['code' => 1, 'msg' => '登陆成功']);
            } else {
                return json_encode(['code' => 0, 'msg' => '账号或密码错误']);
            }
        }
        return $this -> renderPartial('login');
    }

    /**
     * 处理注册
     * @return string
     */
    public function actionSignup()
    {
        $model = new SignupForm(Admin::className());
        $data = [
          'username' => 'admin',
          'password' => '123456',
          'password_repeat' => '123456',
        ];
        if ($model->load($data,'')) {
            $result = $model->signup();
            if ($result['code'] == 1) {
                \Yii::$app->getUser()->login($result['data']);
                return json_encode(['code' => 1, 'msg' => '注册成功']);
            }
            return json_encode(['code' => 0, 'msg' => $result['msg']]);
        }

        return json_encode(['code' => 0, 'msg' => '注册失败!']);
    }

    public function actionLogout()
    {
        \Yii::$app->user->logout();
        return $this -> redirect(Url::to(['user/login']));
    }
}