<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/24
 * Time: 11:18
 */

namespace common\help;


class Request
{
    public static function getValue($name){
        $req =  \Yii::$app -> request;
        $value =$req -> get($name);
        return isset($value)?$value:$req -> post($name);
    }

    public static function getPostValue($name){
        $req =  \Yii::$app -> request;
        return $req -> post($name);
    }

    public static function getQueryValue($name){
        $req =  \Yii::$app -> request;
        return $req -> get($name);
    }
}