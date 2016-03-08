<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/3/8
 * Time: 20:16
 */
?>
<ul class="m-tabs m-tabs-srch f-cb ztag" data-xname="" id="auto-id-vSPCS8n3c6G2bzPI" style="margin-bottom: auto;">
    <li class="fst">
        <a <?=(empty($type)||$type == 1)?'':'hidefocus="true"'?> data-type="1" href="<?=\yii\helpers\Url::to(['search/index', 'key' => $key, 'type' => 1])?>" class="<?=(empty($type)||$type == 1)?'z-slt':''?> single">
            <em>歌名</em>
        </a>
    </li>
    <li>
        <a <?=(!empty($type)&&$type == 2)?'':'hidefocus="true"'?> data-type="2" href="<?=\yii\helpers\Url::to(['search/index', 'key' => $key, 'type' => 2])?>" class="<?=(!empty($type)&&$type == 2)?'z-slt':''?> single">
            <em>歌手</em>
        </a>
    </li>
    <li>
        <a <?=(!empty($type)&&$type == 3)?'':'hidefocus="true"'?> data-type="3" href="<?=\yii\helpers\Url::to(['search/index', 'key' => $key, 'type' => 3])?>" class="<?=(!empty($type)&&$type == 3)?'z-slt':''?> single">
            <em>歌词</em>
        </a>
    </li>
    <li>
        <a <?=(!empty($type)&&$type == 4)?'':'hidefocus="true"'?> data-type="4" href="<?=\yii\helpers\Url::to(['search/index', 'key' => $key, 'type' => 4])?>" class="<?=(!empty($type)&&$type == 4)?'z-slt':''?> single">
            <em>歌单</em>
        </a>
    </li>
    <li>
        <a <?=(!empty($type)&&$type == 5)?'':'hidefocus="true"'?> data-type="5" href="<?=\yii\helpers\Url::to(['search/index', 'key' => $key, 'type' => 5])?>" class="<?=(!empty($type)&&$type == 5)?'z-slt':''?> single">
            <em>用户</em>
        </a>
    </li>
</ul>
