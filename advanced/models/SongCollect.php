<?php

namespace models;

use Yii;

/**
 * This is the model class for table "song_collect".
 *
 * @property string $id
 * @property string $pid
 * @property string $sid
 */
class SongCollect extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'song_collect';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['pid', 'sid'], 'required'],
            [['pid', 'sid'], 'integer']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'pid' => 'Pid',
            'sid' => 'Sid',
        ];
    }
}
