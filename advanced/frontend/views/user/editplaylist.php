<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/30
 * Time: 19:35
 */
?>
<link href="<?=Yii::$app -> homeUrl?>css/pt_my_index.css" type="text/css" rel="stylesheet" />
<div class="container">
    <!-- <div id="g_nav" class="m-subnav m-subnav-up f-pr">
         <div class="shadow"></div>
     </div>-->
    <div id="g_mymusic" class="g-mymusic" >
        <div class="g-bd3 p-mymusic f-cb" style="min-height: 80px;">
            <?php require_once(__DIR__."/left_playlist.php");?>
            <div class="g-mn3 f-pr j-flag">
                <div class="g-wrap">
                    <div>
                        <div class="u-bread1">
                            <a href="<?=\yii\helpers\Url::to(['user/mysong', 'id' => $id])?>" class="s-fc7 single"><?=$model['name']?></a>
                            <span class="arr s-fc4">&gt;</span>
                            <span class="f-fw1">编辑歌单</span>
                        </div>
                        <div class="n-base f-cb">
                            <div class="frm frm-1 m-frm m-frm-1">
                                <div class="itm">
                                    <span class="must s-fc6">*</span>
                                    <label class="lab">歌单名：</label>
                                    <input type="text" class="u-txt txt j-flag" value="<?=$model['name']?>" id="auto-id-oWKnUD9ewzCzSfC1" />
                                    <div class="u-err f-vhide j-flag"></div>
                                </div>
                         <!--       <div class="itm">
                                    <label class="lab">标签：</label>
                                    <div class="f-cb tags">
                                        <a data-action="select" href="javascript:void(0)" class="cho s-fc7">选择标签</a>
                                    </div>
                                    <div class="s-fc4 tagnote">选择适合的标签，最多选3个</div>
                                </div>-->
                                <div class="itm f-cb">
                                    <label class="lab">介绍：</label>
                                    <div class="u-txtwrap f-pr">
                                        <textarea class="u-txt area j-flag" id="auto-id-HAzKmVoMWdbBevwS"></textarea>
                                        <span class="zs s-fc2 j-flag"><?=empty($model['profile'])?'':$model['profile']?></span>
                                    </div>
                                </div>
                                <div class="itm ft">
                                    <a data-action="save" href="javascript:void(0)" hidefocus="true"
                                       class="u-btn2 u-btn2-2 u-btn2-w2 j-flag">
                                        <i>保 存</i>
                                    </a>
                                    <a data-action="cc" href="javascript:void(0)" hidefocus="true" class="u-btn2 u-btn2-1 u-btn2-w2">
                                        <i>取 消</i>
                                    </a>
                                </div>
                            </div>
                            <div class="avatar f-pr">
                                <img id="edit_cover" src="<?=\common\help\UrlHelp::getImgUrl($model['cover'])?>" />
                                <span class="btm"></span>
                                <a href="<?=\yii\helpers\Url::to(['user/editcover', 'id' => $model['id']])?>" class="upload single">编辑封面</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a title="回到顶部" class="m-back" href="#" id="g_backtop" hidefocus="true" style="display: none;">回到顶部</a>

    <div id="shadow-box"
         style="word-wrap: break-word; width: 600px; border-width: 1px; border-style: solid; outline: rgb(51, 51, 51) none 0px; margin: 0px -20px 0px 0px; height: 50px; padding-left: 6px; padding-top: 5px; font-size: 12px; font-family: Arial, Helvetica, sans-serif; line-height: 19px; overflow: auto;"
         class="auto-1454070084178">
        <span>@</span>
    </div>
    <script>
        $(function(){
            addMySongEvent();
        });
    </script>
</div>


