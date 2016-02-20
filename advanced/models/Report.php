<?php

namespace models;

use Yii;

/**
 * This is the model class for table "report".
 *
 * @property string $id
 * @property string $cid
 * @property string $uid
 * @property integer $state
 * @property string $reason
 * @property string $ctime
 */
class Report extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'report';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['cid', 'uid'], 'required'],
            [['cid', 'uid', 'state'], 'integer'],
            [['ctime'], 'safe'],
            [['reason'], 'string', 'max' => 500]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'cid' => 'Cid',
            'uid' => 'Uid',
            'state' => 'State',
            'reason' => 'Reason',
            'ctime' => 'Ctime',
        ];
    }
}
