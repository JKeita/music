<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/16
 * Time: 17:09
 */

namespace backend\controllers;

use common\help\Mp3File;
use logic\SearchLogicImp;
use logic\SongLogicImp;
use models\Song;
use yii\web\Controller;
use yii\helpers\Url;
use Yii;
use common\help\Request;
use common\help\Response;
use yii\web\UploadedFile;

class SongController extends Controller
{
    public function beforeAction($action)
    {
        /**
         * 不需要csrf验证的action
         */
        $actionArr = [
            'upload-mp3',
            'upload-cover',
            'del',
        ];
        if(in_array($action -> id,$actionArr)){
            return true;
        }
        return parent::beforeAction($action);
    }


    public function actionEdit(){
        if(\Yii::$app -> user -> isGuest){
            return $this -> redirect(Url::to(['site/login']));
        }
        $id = Request::getQueryValue('id');
        $model = Song::findOne(['id'=> $id, 'state'=>0]);
        $viewData = [
            'id' => $id,
            'model' => $model,
        ];
        if(\Yii::$app -> request -> isAjax){
            return $this -> renderPartial("edit", $viewData);
        }else{
            return $this -> render("edit", $viewData);
        }
    }

    /**
     * 保存歌曲
     */
    public function actionSave(){
        if(\Yii::$app -> user -> isGuest){
            return json_encode(['code' => 0, 'msg' => '请先登录']);
        }
        $params = [
            'id' => Request::getPostValue('id'),
            'name' => Request::getPostValue('name'),
            'author' => Request::getPostValue('author'),
            'src' => Request::getPostValue('src'),
            'cover' => Request::getPostValue('cover'),
            'duration' => Request::getPostValue('duration'),
            'lyric' => Request::getPostValue('lyric'),
        ];
        $songLogic = new SongLogicImp();
        $result = $songLogic -> save($params);
        return json_encode($result);
    }
    /**
     * 上传mp3
     */
    public function actionUploadMp3(){
        if(\Yii::$app -> user -> isGuest){
            return json_encode(['code' => 0, 'msg' => '请先登录']);
        }
        $file = UploadedFile::getInstanceByName('upload');
        $filename = Request::getPostValue('Filename');
        $path = time().mt_rand(1,1000). ".mp3";
        if(empty($file)){
            return json_encode(['code' => 0]);
        }
        $absolutePath = __DIR__.'/../../upload/song/'.$path;
        $result = $file -> saveAs($absolutePath, true);
        $mp3File = new Mp3File($absolutePath);
        $info = $mp3File -> get_metadata();
        $duration = $info['Length']*1000;
        return json_encode(['code' => 1, 'url' => 'http://song.music.com/'.$path, 'duration' => $duration]);
    }

    /**
     * 保存封面
     */
    public function actionUploadCover(){
        if(\Yii::$app -> user -> isGuest){
            return json_encode(['code' => 0, 'msg' => '请先登录']);
        }
        $file = UploadedFile::getInstanceByName('coverimg');
        $path = 'cover/'.time().mt_rand(1,1000). ".jpg";
        $result = $file -> saveAs(__DIR__.'/../../upload/img/'.$path, true);
        return json_encode(['success' => $result, 'sourceUrl' => 'http://img.music.com/'.$path]);
    }

    public function actionList(){
        if(\Yii::$app -> user -> isGuest){
            return $this -> redirect(Url::to(['site/login']));
        }
        $searchLogic = new SearchLogicImp();
        $params = [
            'key' => Request::getQueryValue('key'),
            'type' => Request::getQueryValue('type'),
            'page' => Request::getQueryValue('page'),
        ];
        $songListData = $searchLogic ->search($params);
        $viewData = [
            'page' => $songListData['page'],
            'data' => $songListData['data'],
            'key'=> $params['key'],
        ];
        if(\Yii::$app -> request -> isAjax){
            return $this -> renderPartial("list", $viewData);
        }else{
            return $this -> render("list", $viewData);
        }
    }

    public function actionDel(){
        if(\Yii::$app -> user -> isGuest){
            return json_encode(['code' => 0, 'msg' => '请先登录']);
        }
        $ids = Request::getPostValue('id');
        if(empty($ids)){
            $ids = Request::getPostValue('ids');
            if(!empty($ids)){
                $ids = explode(",", $ids);
            }
        }
        $songLogic = new SongLogicImp();
        $result = $songLogic -> del($ids);
        return json_encode($result);
    }
}