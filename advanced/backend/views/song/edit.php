<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/16
 * Time: 17:12
 */
use yii\helpers\Url;
?>
<div class="main-content">
    <div class="breadcrumbs" id="breadcrumbs">
        <ul class="breadcrumb">
            <li>
                <i class="icon-home home-icon"></i>
                <a href="<?=Url::to(['site/index'])?>" class="single">首页</a>
            </li>

            <li>
                <a href="#">音乐管理</a>
            </li>
            <li class="active">编辑</li>
        </ul><!-- .breadcrumb -->
    </div>
    <div class="page-content">
<!--        <div class="page-header">
            <h1>
                Form Elements
                <small>
                    <i class="icon-double-angle-right"></i>
                    Common form elements and layouts
                </small>
            </h1>
        </div>-->
        <div class="row">
            <div class="col-xs-12">
                <!-- PAGE CONTENT BEGINS -->
                <form class="form-horizontal" role="form">
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">歌曲名</label>

                        <div class="col-sm-9">
                            <input type="text" name="name" placeholder="歌曲名" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">歌手名</label>

                        <div class="col-sm-9">
                            <input type="text" name="author" placeholder="歌手名" class="col-xs-10 col-sm-5">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3 control-label no-padding-right" for="form-field-1">上传歌曲</label>

                        <div class="col-sm-9">
                            <div class="col-sm-5">
                                <input id="file_upload_mp3" name="file_upload" type="file">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <div>
                            <label class="col-sm-3 control-label no-padding-right" for="form-field-1">上传封面</label>
                        </div>
                        <div id="cropBox" class="col-md-offset-0 col-md-12">
                            <div class="m-edtimg f-cb">
                                <div style="text-align:center">
                                    <p id="swfContainerCover">
                                        本组件需要安装Flash Player后才可使用，请从<a href="http://www.adobe.com/go/getflashplayer">这里</a>下载安装。
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="space-4"></div>
<!--                    <div class="clearfix form-actions">-->
                        <div class="col-md-offset-3 col-md-9">
                            <button class="btn btn-info" type="button">
                                <i class="icon-ok bigger-110"></i>
                                保存
                            </button>

                            &nbsp; &nbsp; &nbsp;
                            <button class="btn" type="reset">
                                <i class="icon-undo bigger-110"></i>
                                重置
                            </button>
                        </div>
<!--                    </div>-->
                </form>
                <!-- PAGE CONTENT ENDS -->
            </div><!-- /.col -->
        </div>
    </div>
    <script>
        $(function(){
            addSongEditEvent();
        });
    </script>
</div>
