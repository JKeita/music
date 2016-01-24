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
    public static function getImgUrl($path){
        $host = 'http://img.music.com/';
        $path = trim($path, '/');
        if(empty($path)){
            return $host.'head.jpg';
        }
        return $host.$path;
    }
}