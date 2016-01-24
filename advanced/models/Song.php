<?php

namespace models;

use Yii;

/**
 * This is the model class for table "song".
 *
 * @property string $id
 * @property string $name
 * @property string $author
 * @property string $src
 * @property string $cover
 * @property string $duration
 * @property string $lyric
 * @property string $collectnum
 * @property string $sharenum
 * @property integer $state
 */
class Song extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 'song';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name'], 'required'],
            [['duration', 'collectnum', 'sharenum', 'state'], 'integer'],
            [['lyric'], 'string'],
            [['name', 'author'], 'string', 'max' => 50],
            [['src', 'cover'], 'string', 'max' => 100]
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
            'author' => 'Author',
            'src' => 'Src',
            'cover' => 'Cover',
            'duration' => 'Duration',
            'lyric' => 'Lyric',
            'collectnum' => 'Collectnum',
            'sharenum' => 'Sharenum',
            'state' => 'State',
        ];
    }
}
