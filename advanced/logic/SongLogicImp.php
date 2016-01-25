<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/24
 * Time: 20:36
 */

namespace logic;


use common\help\Response;
use models\Song;


class SongLogicImp implements  SongLogic
{
    public function getSongById($id)
    {
        $data = Song::findOne($id);
        if(!empty($data)){
            return Response::returnInfo(1, 'ok', $data -> toArray());
        }
        return Response::returnInfo(0, 'no found');
    }

}