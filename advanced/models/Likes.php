<?php

namespace models;

use Yii;

/**
 * This is the model class for table "likes".
 *
 * @property string $id
 * @property string $uid
 * @property string $psid
 * @property integer $type
 */
class Likes extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'likes';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['uid', 'psid'], 'required'],
            [['uid', 'psid', 'type'], 'integer']
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
        ];
    }
}
