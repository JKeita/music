<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/16
 * Time: 18:40
 */
?>
<script src="<?=Yii::$app -> homeUrl?>plugin/imghead/jquery.min(1).js"></script><style type="text/css" adt="123"></style>
<link href="<?=Yii::$app -> homeUrl?>plugin/imghead/bootstrap.min.css" rel="stylesheet">
<link href="<?=Yii::$app -> homeUrl?>plugin/imghead/cropper.min.css" rel="stylesheet">
<link href="<?=Yii::$app -> homeUrl?>plugin/imghead/sitelogo.css" rel="stylesheet">
<script src="<?=Yii::$app -> homeUrl?>plugin/imghead/cropper.min.js"></script>
<script src="<?=Yii::$app -> homeUrl?>plugin/imghead/sitelogo.js"></script>
<script src="<?=Yii::$app -> homeUrl?>plugin/imghead/bootstrap.min.js"></script>
<div class="container">
    <div class="g-bd">
        <div class="g-wrap" id="baseBox">
                <div class="ibox-content">
                    <div class="row">
                        <div id="crop-avatar" class="col-md-6">
                            <div class="avatar-view" title="" data-original-title="Change Logo Picture">
                                <img src="/plugin/imghead/logo.jpg" alt="Logo">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="modal fade" id="avatar-modal" aria-hidden="true" aria-labelledby="avatar-modal-label" role="dialog" tabindex="-1" style="display: none;">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <form class="avatar-form" action="http://www.jq22.com/demo/jquery-html5-upload20160106/%7B%7Burl('admin/upload-logo')%7D%7D" enctype="multipart/form-data" method="post">
                                <div class="modal-header">
                                    <button class="close" data-dismiss="modal" type="button">×</button>
                                    <h4 class="modal-title" id="avatar-modal-label">Change Logo Picture</h4>
                                </div>
                                <div class="modal-body">
                                    <div class="avatar-body">
                                        <div class="avatar-upload">
                                            <input class="avatar-src" name="avatar_src" type="hidden">
                                            <input class="avatar-data" name="avatar_data" type="hidden">
                                            <label for="avatarInput">图片上传</label>
                                            <input class="avatar-input" id="avatarInput" name="avatar_file" type="file"></div>
                                        <div class="row">
                                            <div class="col-md-9">
                                                <div class="avatar-wrapper"></div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="avatar-preview preview-lg"><img src="./plugin/imghead/logo.jpg"></div>
                                                <div class="avatar-preview preview-md"><img src="./plugin/imghead/logo.jpg"></div>
                                                <div class="avatar-preview preview-sm"><img src="./plugin/imghead/logo.jpg"></div>
                                            </div>
                                        </div>
                                        <div class="row avatar-btns">
                                            <div class="col-md-9">
                                                <div class="btn-group">
                                                    <button class="btn" data-method="rotate" data-option="-90" type="button" title="Rotate -90 degrees"><i class="fa fa-undo"></i> 向左旋转</button>
                                                </div>
                                                <div class="btn-group">
                                                    <button class="btn" data-method="rotate" data-option="90" type="button" title="Rotate 90 degrees"><i class="fa fa-repeat"></i> 向右旋转</button>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <button class="btn btn-success btn-block avatar-save" type="submit"><i class="fa fa-save"></i> 保存修改</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="loading" aria-label="Loading" role="img" tabindex="-1"></div>

        </div>
    </div>

</div>