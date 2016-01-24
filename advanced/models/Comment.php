<?php

namespace models;

use Yii;

/**
 * This is the model class for table "comment".
 *
 * @property string $id
 * @property string $psid
 * @property integer $type
 * @property string $uid
 * @property string $tid
 * @property string $content
 * @property string $ctime
 * @property integer $state
 */
class Comment extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'comment';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'psid', 'uid'], 'required'],
            [['id', 'psid', 'type', 'uid', 'tid', 'state'], 'integer'],
            [['ctime'], 'safe'],
            [['content'], 'string', 'max' => 500]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'psid' => 'Psid',
            'type' => 'Type',
            'uid' => 'Uid',
            'tid' => 'Tid',
            'content' => 'Content',
            'ctime' => 'Ctime',
            'state' => 'State',
        ];
    }
}
