<?php

namespace models;

use Yii;

/**
 * This is the model class for table "playlist_tag".
 *
 * @property string $id
 * @property string $pid
 * @property string $tid
 */
class PlaylistTag extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'playlist_tag';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['pid', 'tid'], 'required'],
            [['pid', 'tid'], 'integer']
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
            'tid' => 'Tid',
        ];
    }
}
