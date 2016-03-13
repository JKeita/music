<?php
namespace frontend\controllers;

use common\help\Request;
use logic\PlayListLogicImp;
use logic\SearchLogicImp;
use Yii;
use common\models\LoginForm;
use frontend\models\PasswordResetRequestForm;
use frontend\models\ResetPasswordForm;
use frontend\models\SignupForm;
use frontend\models\ContactForm;
use yii\base\InvalidParamException;
use yii\web\BadRequestHttpException;
use yii\web\Controller;
use yii\filters\VerbFilter;
use yii\filters\AccessControl;

/**
 * Site controller
 */
class SiteController extends Controller
{

    /**
     * @inheritdoc
     */
    public function actions()
    {
        return [
            'error' => [
                'class' => 'yii\web\ErrorAction',
            ],
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => YII_ENV_TEST ? 'testme' : null,
            ],
        ];
    }

    /**
     * Displays homepage.
     *
     * @return mixed
     */
    public function actionIndex()
    {
        $playListLogic = new PlayListLogicImp();
        $playListData = $playListLogic -> getPlayListPage();
        $viewData = [
          'page' => $playListData['page'],
          'data' => $playListData['data'],
        ];
        if(Yii::$app -> request -> isAjax){
            return $this -> renderPartial("index", $viewData);
        }else{
            return $this->render('index', $viewData);
        }

    }


    public function actionEsIndex(){
        $condition = [
            'page' => Request::getQueryValue('page'),
            'pageSize' => 20
        ];
        $searchLogic = new SearchLogicImp();
        $playListData = $searchLogic -> searchPlayList($condition);
        $viewData = [
            'page' => $playListData['page'],
            'data' => $playListData['data'],
        ];
        if(Yii::$app -> request -> isAjax){
            return $this -> renderPartial("esindex", $viewData);
        }else{
            return $this->render('esindex', $viewData);
        }
    }
}
