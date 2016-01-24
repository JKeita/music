<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/16
 * Time: 16:29
 */
namespace logic;

use common\help\Response;

class UserLogicImp implements UserLogic{

    /**
     * 用户注册
     * @param $name
     * @param $pwd
     * @param $repwd
     * @return mixed
     */
    public function register($name, $pwd, $repwd)
    {
        // TODO: Implement register() method.
    }

    /**
     * 更新用户资料
     * @param $params
     */
    public function update($params){
        $user = \Yii::$app -> user -> identity;
        if(empty($user)){
            return ['code' => 0, 'msg' => '用户尚未登录'];
        }
        if(empty($params['username'])){
            return ['code' => 0, 'msg' => '用户名不能为空'];
        }
        $model = \models\User::findByUsername($params['username']);
        if(!empty($model)&& $model -> id != $user -> id){
            return ['code' => -1, 'msg' => '用户名已存在'];
        }
        $user -> username = $params['username'];
        $user -> sex = $params['sex'];
        $user -> profile = $params['profile'];
        $result = $user -> save();
        if($result){
            return ['code' => 1, 'msg' => '保存成功'];
        }
        return ['code' => 0, 'msg' => '保存失败'];
    }

    public function updateHeadImg($path){
        if(empty($path)){
           return Response::returnInfo(0, '头像修改失败');
        }
        $user = \Yii::$app -> user -> identity;
        if(empty($user)){
            return ['code' => 0, 'msg' => '用户尚未登录'];
        }
        $user -> headimg = $path;
        $result = $user -> save();
        if($result){
            return ['code' => 1, 'msg' => '保存成功'];
        }
        return ['code' => 0, 'msg' => '保存失败'];
    }

    /**
     * 修改密码
     * @param $oldpwd
     * @param $pwd
     * @param $repwd
     * @return mixed
     */
    public function resetPwd($oldpwd, $pwd, $repwd) {
        $user = \Yii::$app -> user -> identity;
        if(empty($user)){
            return ['code' => 0, 'msg' => '用户尚未登录'];
        }
        if(!$user -> validatePassword($oldpwd)){
            return Response::returnInfo(-1, '原密码错误');
        }
        if($pwd != $repwd){
            return Response::returnInfo(-2, '两次密码不一致');
        }
        $user -> setPassword($pwd);
        $result = $user -> save();
        if($result){
            return Response::returnInfo(1, '修改密码成功');
        }
        return Response::returnInfo(0, '修改密码失败');
    }
}