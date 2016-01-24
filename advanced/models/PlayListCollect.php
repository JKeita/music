<?php

namespace models;

use Yii;

/**
 * This is the model class for table "play_list_collect".
 *
 * @property string $id
 * @property string $uid
 * @property string $pid
 */
class PlayListCollect extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'play_list_collect';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['uid', 'pid'], 'required'],
            [['uid', 'pid'], 'integer']
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
            'pid' => 'Pid',
        ];
    }
}
