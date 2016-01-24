<?php

namespace models;

use Yii;

/**
 * This is the model class for table "follow".
 *
 * @property string $id
 * @property string $uid
 * @property string $fid
 */
class Follow extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'follow';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['uid', 'fid'], 'required'],
            [['uid', 'fid'], 'integer']
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
            'fid' => 'Fid',
        ];
    }
}
