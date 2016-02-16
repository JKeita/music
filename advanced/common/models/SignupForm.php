<?php
namespace common\models;

use models\User;
use yii\base\Model;
use Yii;

/**
 * Signup form
 */
class SignupForm extends Model
{
    public $username;
    public $password;
    public $password_repeat;

    private $_class;

    public function __construct($modelClass = '\models\User' )
    {
        $this -> _class = $modelClass;
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            ['username', 'filter', 'filter' => 'trim'],
            ['username', 'required'],
            ['username', 'unique', 'targetClass' => $this -> _class, 'message' => '该账户已存在'],
            ['username', 'string', 'min' => 2, 'max' => 50],

            ['password', 'required'],
            ['password', 'string', 'min' => 6],
            ['password', 'compare','message' => '两次密码不一致'],
            ['password_repeat', 'required'],
        ];
    }

    /**
     * Signs user up.
     *
     * @return User|null the saved model or null if saving fails
     */
    public function signup()
    {
        if ($this->validate()) {
            $user = new $this -> _class();
            $user->username = $this->username;
            $user->setPassword($this->password);
            $user->generateAuthKey();
            if ($user->save()) {
                return ['code' => 1, 'data' => $user];
            }
        }
        if($this -> hasErrors()){
            $msg = "";
            foreach($this -> getFirstErrors() as $key => $str){
                $msg += $str;
            }
        }
        return ['code' => 0, 'msg' => $str];
    }
}
