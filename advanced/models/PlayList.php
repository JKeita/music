<?php

namespace models;

use Yii;

/**
 * This is the model class for table "playlist".
 *
 * @property string $id
 * @property string $name
 * @property string $cover
 * @property string $uid
 * @property string $collectnum
 * @property string $sharenum
 * @property integer $state
 */
class PlayList extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'playlist';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['id', 'name', 'uid'], 'required'],
            [['id', 'uid', 'collectnum', 'sharenum', 'state'], 'integer'],
            [['name'], 'string', 'max' => 50],
            [['cover'], 'string', 'max' => 100]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'name' => 'Name',
            'cover' => 'Cover',
            'uid' => 'Uid',
            'collectnum' => 'Collectnum',
            'sharenum' => 'Sharenum',
            'state' => 'State',
        ];
    }
}
