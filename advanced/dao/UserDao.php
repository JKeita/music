<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/16
 * Time: 15:25
 */
use models\User;


class UserDao {

    /**
     * 通过ID删除对象
     * @param $id
     * @return bool|false|int
     */
    public function deleteById($id){
        $user = User::findOne($id);
        if(!empty($user)){
            return $user -> delete();
        }
        return false;
    }


}