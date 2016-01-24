<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/16
 * Time: 16:26
 */
namespace logic;

interface UserLogic {

    /**
     * 用户注册
     * @param $name
     * @param $pwd
     * @param $repwd
     * @return mixed
     */
    public function register($name, $pwd, $repwd);

    /**
     * 更新用户资料
     * @param $params
     */
    public function update($params);

    /**
     * 修改密码
     * @param $oldpwd
     * @param $pwd
     * @param $repwd
     * @return mixed
     */
    public function resetPwd($oldpwd, $pwd, $repwd);
}