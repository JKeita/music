<?php

namespace models;

use Yii;

/**
 * This is the model class for table "share".
 *
 * @property string $id
 * @property string $uid
 * @property string $psid
 * @property integer $type
 * @property string $ctime
 * @property integer $state
 */
class Share extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'share';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['uid', 'psid'], 'required'],
            [['uid', 'psid', 'type', 'state'], 'integer'],
            [['ctime'], 'safe']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'uid' => 'Uid',
            'psid' => 'Psid',
            'type' => 'Type',
            'ctime' => 'Ctime',
            'state' => 'State',
        ];
    }
}
