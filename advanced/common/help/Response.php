<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/24
 * Time: 11:44
 */

namespace common\help;


class Response
{
    public static function returnInfo($code, $msg = '', $data = null){
        if(!empty($code)){
            if(empty($data)&&empty($msg)){
                return ['code' => $code];
            }
            if(!empty($msg)){
                return ['code' => $code, 'msg' => $msg];
            }
            if(!empty($data)){
                return ['code' => $code, 'data' => $data];
            }
            return ['code' => $code, 'msg' => $msg, 'data' => $data];
        }
        return ['code' => 0];
    }
}