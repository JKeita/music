<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/16
 * Time: 16:52
 */

namespace frontend\controllers;

use common\help\Request;
use common\help\Response;
use common\models\LoginForm;
use logic\CommentLogicImp;
use logic\FollowLogicImp;
use logic\PlayListLogicImp;
use logic\ReportLogicImp;
use logic\ShareLogicImp;
use logic\UserLogicImp;
use models\User;
use Yii;
use frontend\models\SignupForm;
use yii\base\Exception;
use yii\helpers\Url;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\web\UploadedFile;

class UserController extends Controller{

    public function beforeAction($action)
    {
        /**
         * 不需要csrf验证的action
         */
        $actionArr = [
            'tophead',
            'logout',
            'uploadhead',
            'comment',
            'do-follow',
            'del-follow',
            'share',
            'del-share',
            'del-comment',
            'report',
        ];
        if(in_array($action -> id,$actionArr)){
            return true;
        }
        return parent::beforeAction($action);
    }

    /**
     * 处理注册
     * @return string
     */
    public function actionSignup()
    {
        $model = new SignupForm();
        if ($model->load(Yii::$app->request->post(),'')) {
            $result = $model->signup();
            if ($result['code'] == 1) {
                Yii::$app->getUser()->login($result['data']);
                return json_encode(['code' => 1, 'msg' => '注册成功']);
            }
            return json_encode(['code' => 0, 'msg' => $result['msg']]);
        }

        return json_encode(['code' => 0, 'msg' => '注册失败!']);
    }

    /**
     * 登录处理
     * @return string
     */
    public function actionLogin(){
/*        if (!Yii::$app->user->isGuest) {
            return json_encode(['code' => 1, 'msg' => '已经登录']);
        }*/

        $model = new LoginForm(User::className());
        if ($model->load(Yii::$app->request->post(),'') && $model->login()) {
            return json_encode(['code' => 1, 'msg' => '登陆成功']);
        } else {
            return json_encode(['code' => 0, 'msg' => '账号或密码错误']);
        }
    }
    /**
     * 用户信息页面
     * @return string
     */
    public function actionUserInfo(){
        if(\Yii::$app -> request -> isAjax){
            return $this -> renderPartial("userinfo");
        }else{
            return $this -> render("userinfo");
        }
    }

    /**
     * 拉去顶部用护栏信息
     * @return string
     */
    public function actionTophead(){
        return json_encode(['code' => 1, 'data' => $this -> renderPartial('tophead')]);
    }

    /**
     * 退出登录
     * @return string
     */
    public function actionLogout()
    {
        if(Yii::$app->user->logout()){
            return json_encode(['code' => 1]);
        }
        return json_encode(['code' => 0]);

    }

    /**
     * 更新用户资料
     * @return string
     */
    public function actionUpdate(){
        if (Yii::$app->user->isGuest) {
            return json_encode(['code' => 0, 'msg' => '你尚未登录']);
        }
        $params = [
            'username' => Request::getPostValue('username'),
            'sex' => Request::getPostValue('sex'),
            'profile' => Request::getPostValue('profile'),
        ];
        $userLogic = new UserLogicImp();
        $result = $userLogic -> update($params);
        return json_encode($result);
    }

    /**
     * 上传头像
     */
    public function actionUploadhead(){
        $file = UploadedFile::getInstanceByName('headimg');
//        error_reporting("E_ALL");
//        ini_set("display_errors", 1);
        $path = 'head/'.time().mt_rand(1,1000). ".jpg";

        $result = $file -> saveAs(__DIR__.'/../../upload/img/'.$path, true);
//        file_put_contents("c:\log.txt", var_export($result, true));
        if($result){
            $userLogic = new UserLogicImp();
            $result = $userLogic -> updateHeadImg($path);
            if($result['code'] == 1){
                $result = true;
            }else{
                $result = false;
            }
        }

        return json_encode(['success' => $result]);
    }

    public function actionResetpwd(){
        $oldpwd = Request::getPostValue('oldpwd');
        $pwd = Request::getPostValue('pwd');
        $repwd = Request::getPostValue('repwd');
        $userLogic = new UserLogicImp();
        $result = $userLogic -> resetPwd($oldpwd, $pwd, $repwd);
        return json_encode($result);
    }

    /**
     * 我的音乐页面
     */
    public function actionMysong(){
        if(\Yii::$app -> user -> isGuest){
            throw new NotFoundHttpException();
        }
        $pid = Request::getQueryValue('id');
        $uid = Yii::$app -> getUser() -> getId();
        $playListLogic = new PlayListLogicImp();

        if(empty($pid)){
            $playList = $playListLogic -> getUserPlayListByUid($uid, 1);
            if(!empty($playList)){
                $pid = $playList[0]['id'];
//                return $this -> redirect(Url::to(['user/mysong', 'id' => $pid]));
            }else{
                throw new NotFoundHttpException();
            }

        }
        if($playListLogic -> isUserPlayList($uid, $pid) || $playListLogic -> isUserCollect($uid, $pid)){
            $model = $playListLogic -> getPlayListById($pid);
            if(empty($model)){
                throw new NotFoundHttpException();
            }
            $songList = $playListLogic -> getPlayListSongById($pid);
            $commentLogic = new CommentLogicImp();
            $commentData = $commentLogic -> getPage(['psid' => $pid, 'type' => '2']);
            $params = [
                'model' => $model,
                'id' => $pid,
                'songList' => $songList,
                'page' => $commentData['page'],
                'commentData' => $commentData['data'],
            ];
        }else{
            throw new NotFoundHttpException();
        }
        if(\Yii::$app -> request -> isAjax){
            return $this -> renderPartial("mysong", $params);
        }else{
            return $this -> render("mysong", $params);
        }
    }

    /**
     * 编辑歌单页面
     * @return string
     */
    public function actionEditplaylist(){
        if(\Yii::$app -> user -> isGuest){
            throw new NotFoundHttpException();
        }
        $pid = Request::getQueryValue('id');
        $uid = Yii::$app -> getUser() -> getId();
        $playListLogic = new PlayListLogicImp();
        if($playListLogic -> isUserPlayList($uid, $pid)){
            $model = $playListLogic -> getPlayListById($pid);
            if(empty($model)){
                throw new NotFoundHttpException();
            }
            $params = [
              'model' => $model,
              'id' => $pid,
            ];
        }else{
            throw new NotFoundHttpException();
        }

        if(\Yii::$app -> request -> isAjax){
            return $this -> renderPartial("editplaylist",$params);
        }else{
            return $this -> render("editplaylist",$params);
        }
    }

    /**
     * 编辑歌单封面页面
     * @return string
     */
    public function actionEditcover(){
        if(\Yii::$app -> user -> isGuest){
            throw new NotFoundHttpException();
        }
        $pid = Request::getQueryValue('id');
        $uid = Yii::$app -> getUser() -> getId();
        $playListLogic = new PlayListLogicImp();
        if($playListLogic -> isUserPlayList($uid, $pid)){
            $model = $playListLogic -> getPlayListById($pid);
            if(empty($model)){
                throw new NotFoundHttpException();
            }
            $params = [
                'model' => $model,
                'id' => $pid,
            ];
        }else{
            throw new NotFoundHttpException();
        }

        if(\Yii::$app -> request -> isAjax){
            return $this -> renderPartial("editcover",$params);
        }else{
            return $this -> render("editcover",$params);
        }
    }

    /**
     * 评论处理
     */
    public function actionComment(){
        if(\Yii::$app -> user -> isGuest){
           return json_encode(['code' => 0, 'msg' => '请先登录后评论']);
        }
        $params = [
            'pid' => Request::getPostValue('pid'),
            'sid' => Request::getPostValue('sid'),
            'tid' => Request::getPostValue('tid'),
            'uid' => Yii::$app -> getUser() -> getId(),
            'content' => Request::getPostValue('content'),
        ];
        $commentLogic = new CommentLogicImp();
        $result = $commentLogic -> save($params);
        return json_encode($result);
    }

    /**
     * 删除评论
     * @return string
     */
    public function actionDelComment(){
        if(\Yii::$app -> user -> isGuest){
            return json_encode(['code' => 0, 'msg' => '请先登录']);
        }
        $cid = Request::getPostValue('cid');
        $uid = Yii::$app -> getUser() -> getId();
        $commentLogic = new CommentLogicImp();
        $result = $commentLogic -> del($cid, $uid);
        return json_encode($result);
    }

    /**
     * 评论举报
     */
    public function actionReport(){
        if(\Yii::$app -> user -> isGuest){
            return json_encode(['code' => 0, 'msg' => '请先登录']);
        }
        $cid = Request::getPostValue('cid');
        $uid = Yii::$app -> getUser() -> getId();
        $reason = Request::getPostValue('reason');
        $reportLogic = new ReportLogicImp();
        $result = $reportLogic -> report($cid, $uid, $reason);
        return json_encode($result);
    }
    /**
     * 分享
     */
    public function actionShare(){
        if(\Yii::$app -> user -> isGuest){
            return json_encode(['code' => 0, 'msg' => '请先登录后再分享']);
        }
        $params = [
            'id' => Request::getPostValue('id'),
            'type' => Request::getPostValue('type'),
            'uid' => Yii::$app -> getUser() -> getId(),
        ];
        $shareLogic = new ShareLogicImp();
        $result = $shareLogic -> share($params);
        return json_encode($result);
    }

    /**
     * 删除分享
     */
    public function actionDelShare(){
        if(\Yii::$app -> user -> isGuest){
            return json_encode(['code' => 0, 'msg' => '请先登录后再删除分享']);
        }
        $id = Request::getPostValue('id');
        $uid = Yii::$app -> getUser() -> getId();
        $shareLogic = new ShareLogicImp();
        $result = $shareLogic -> delShare($uid, $id);
        return json_encode($result);
    }

    public function actionFriend(){
        if(\Yii::$app -> user -> isGuest){
            throw new NotFoundHttpException();
        }
        $uid = Yii::$app -> getUser() -> getId();
        $shareLogic = new ShareLogicImp();
        $eventData = $shareLogic -> getFollowEventPage($uid);
        $params = [
            'page' => $eventData['page'],
            'eventData' => $eventData['data'],
        ];
        if(\Yii::$app -> request -> isAjax){
            return $this -> renderPartial("friend",$params);
        }else{
            return $this -> render("friend",$params);
        }
    }

    public function actionHome(){
        $playListLogic = new \logic\PlayListLogicImp();
        $uid = Request::getQueryValue('id');
        $user = User::findOne($uid);
        if(empty($user)){
            throw new NotFoundHttpException();
        }
        $playList = $playListLogic -> getUserPlayListByUid($uid);
        $collectList = $playListLogic -> getUserCollectListByUid($uid);
        $params = [
            'user' => $user,
            'playList' => $playList,
            'collectList' => $collectList,
        ];
        if(\Yii::$app -> request -> isAjax){
            return $this -> renderPartial("home",$params);
        }else{
            return $this -> render("home",$params);
        }
    }

    public function actionFollows(){
        $uid = Request::getQueryValue('id');
        $user = User::findOne($uid);
        if(empty($user)){
            throw new NotFoundHttpException();
        }
        $followLogic = new FollowLogicImp();
        $followList = $followLogic -> getFollows($uid);
        $params = [
            'user' => $user,
            'followList' => $followList,
        ];
        if(\Yii::$app -> request -> isAjax){
            return $this -> renderPartial("follows",$params);
        }else{
            return $this -> render("follows",$params);
        }
    }

    public function actionFans(){
        $uid = Request::getQueryValue('id');
        $user = User::findOne($uid);
        if(empty($user)){
            throw new NotFoundHttpException();
        }
        $followLogic = new FollowLogicImp();
        $fansList = $followLogic -> getFans($uid);
        $params = [
            'user' => $user,
            'fansList' => $fansList,
        ];
        if(\Yii::$app -> request -> isAjax){
            return $this -> renderPartial("fans",$params);
        }else{
            return $this -> render("fans",$params);
        }
    }

    public function actionEvent(){
        $uid = Request::getQueryValue('id');
        $user = User::findOne($uid);
        if(empty($user)){
            throw new NotFoundHttpException();
        }
        $shareLogic = new ShareLogicImp();
        $eventData = $shareLogic -> getUserEventPage($uid);
        $params = [
            'user' => $user,
            'page' => $eventData['page'],
            'eventData' => $eventData['data'],
        ];
        if(\Yii::$app -> request -> isAjax){
            return $this -> renderPartial("event",$params);
        }else{
            return $this -> render("event",$params);
        }
    }
    /**
     * 关注好友
     * @return string
     */
    public function actionDoFollow(){
        if(\Yii::$app -> user -> isGuest){
            return json_encode(['code' => 0, 'msg' => '请先登录后再关注']);
        }
        $user = \Yii::$app -> user -> identity;
        $fid = Request::getPostValue('fid');
        $followLogic = new FollowLogicImp();
        $result = $followLogic -> follow($user -> getId(), $fid);
        return json_encode($result);
    }

    /**
     * 取消关注好友
     * @return string
     */
    public function actionDelFollow(){
        if(\Yii::$app -> user -> isGuest){
            return json_encode(['code' => 0, 'msg' => '请先登录后再取消关注']);
        }
        $user = \Yii::$app -> user -> identity;
        $fid = Request::getPostValue('fid');
        $followLogic = new FollowLogicImp();
        $result = $followLogic -> delFollow($user -> getId(), $fid);
        return json_encode($result);
    }
}