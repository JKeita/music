<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/28
 * Time: 16:28
 */

namespace logic;


use common\help\Request;
use common\help\Response;
use dao\TagDao;
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

    /**
     * 获取标签列表页面
     * @return mixed
     */
    public function getListPage()
    {
        $tagDao = new TagDao();
        return $tagDao -> getListPage();
    }

    /**
     * 保存标签
     * @param $params
     * @return mixed
     */
    public function save($params)
    {
        if(empty($params['name'])){
            return Response::returnInfo(0, '标签名称不能为空');
        }
        $curModel = Tag::findOne(['name' => $params['name']]);
        if(!empty($params['id'])&&is_numeric($params['id'])){
            $model = Tag::findOne($params['id']);
            if(!empty($curModel) && !empty($model) && $curModel -> id != $model -> id){
                return Response::returnInfo(0, '保存失败:该标签名称已存在');
            }
        }else{
            if(!empty($curModel)){
                return Response::returnInfo(0, '保存失败:该标签名称已存在');
            }
            $model = new Tag();
        }
        $model -> name = $params['name'];
        $result = $model -> save();
        if($result){
            return Response::returnInfo(1, '保存成功');
        }
        return Response::returnInfo(0, '保存失败');
    }

    /**
     * 删除标签
     * @param $id
     * @return mixed
     */
    public function delTagById($id)
    {
        if(empty($id) || !is_numeric($id)){
            return Response::returnInfo(0, '删除失败:参数ID出错');
        }
        $model = Tag::findOne($id);
        if(empty($model)){
            return Response::returnInfo(0, '删除失败:未找到相关数据');
        }
        $result = $model -> delete();
        if($result){
            return Response::returnInfo(1, '删除成功');
        }
        return Response::returnInfo(0, '删除失败');
    }


}