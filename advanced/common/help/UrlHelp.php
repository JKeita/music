<?php

/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/24
 * Time: 10:54
 */
namespace common\help;
class UrlHelp
{
    public static function getImgUrl($path, $default = 'head.jpg'){
        $host = 'http://img.music.com/';
        $path = trim($path, '/');
        if(empty($path)){
            if(stripos($default, 'http://') === 0){
                return $default;
            }
            return $host.$default;
        }
        if(stripos($path, 'http://') === 0){
            return $path;
        }
        return $host.$path;
    }
}