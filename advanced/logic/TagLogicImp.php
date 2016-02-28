<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/28
 * Time: 16:28
 */

namespace logic;


use common\help\Response;
use models\PlaylistTag;
use models\Tag;

class TagLogicImp implements TagLogic
{
    /**
     * 获取所有标签
     * @return mixed
     */
    public function getAllTag()
    {
       return Tag::find() -> asArray() -> all();
    }

    /**
     * 保存歌单标签
     * @param $pid
     * @param $tidArr
     * @return mixed
     */
    public function savePlayListTag($pid, $tidArr)
    {
        if(empty($pid)||!is_numeric($pid)){
            return Response::returnInfo(0, '歌单ID参数出错');
        }
        PlaylistTag::deleteAll(['pid' => $pid]);
        if(empty($tidArr)){
            return Response::returnInfo(1, '保存成功');
        }
        $i = 0;
        foreach($tidArr as $tid){
            $i++;
            if($i > 3){
                break;
            }
            $model = new PlaylistTag();
            $model -> pid = $pid;
            $model -> tid = $tid;
            $model -> save();
        }
        return Response::returnInfo(1, '绑定标签成功');
    }

    /**
     * 获取歌单的标签
     * @param $pid
     * @return mixed
     */
    public function getTagByPid($pid)
    {
        if(empty($pid)||!is_numeric($pid)){
            return [];
        }
        $tidArr = PlaylistTag::find() -> where(['pid' => $pid]) -> select('tid') -> column();
        $tagArr = Tag::find() -> where(['id' => $tidArr]) -> asArray() -> all();
        return $tagArr;
    }


}