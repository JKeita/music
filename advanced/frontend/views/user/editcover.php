<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/30
 * Time: 19:39
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
                    <div class="u-bread1">
                        <input type="hidden" id="playlist_id" name="id" value="<?=$id?>" />
                        <a href="<?=\yii\helpers\Url::to(['user/mysong', 'id' => $id])?>" class="s-fc7 single"><?=$model['name']?></a>
                        <span class="arr s-fc4">&gt;</span>
                        <a href="<?=\yii\helpers\Url::to(['user/editplaylist', 'id' => $id])?>" class="s-fc7 j-flag single">编辑歌单</a>
                        <span class="arr s-fc4">&gt;</span>
                        <span class="f-fw1 j-flag">编辑封面</span></div>

                        <div id="cropBox" style="min-height: 433px;">
                            <div class="m-edtimg f-cb">
                                <div style="width:632px;margin: 0 auto;text-align:center">
                                    <div>
                                        <p id="swfContainerCover">
                                            本组件需要安装Flash Player后才可使用，请从<a href="http://www.adobe.com/go/getflashplayer">这里</a>下载安装。
                                        </p>
                                    </div>
                                    <button type="button" id="upload" style="display:none;margin-top:8px;">swf外定义的上传按钮，点击可执行上传保存操作</button>
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
        //addMySongEvent();
        //addEditCoverEvent();
    });
</script>
</div>


