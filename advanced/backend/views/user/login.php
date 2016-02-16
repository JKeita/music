<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/16
 * Time: 14:17
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>登录页面 - ACER音乐网后台管理系统</title>
    <!-- basic styles -->

    <link href="<?=Yii::$app -> homeUrl?>plugin/ace/css/bootstrap.min.css" rel="stylesheet" />
    <link rel="stylesheet" href="<?=Yii::$app -> homeUrl?>plugin/ace/css/font-awesome.min.css" />


    <!-- ace styles -->

    <link rel="stylesheet" href="<?=Yii::$app -> homeUrl?>plugin/ace/css/ace.min.css" />
    <link rel="stylesheet" href="<?=Yii::$app -> homeUrl?>plugin/ace/css/ace-rtl.min.css" />
    <script type="text/javascript" src="<?=Yii::$app -> homeUrl?>plugin/ace/js/jquery-2.0.3.min.js"></script>
    <script type="text/javascript" src="<?=Yii::$app -> homeUrl?>plugin/layer/layer.js"></script>
    <script type="text/javascript" src="<?=Yii::$app -> homeUrl?>plugin/layer/extend/layer.ext.js"></script>
</head>

<body class="login-layout">
<div class="main-container">
    <div class="main-content">
        <div class="row">
            <div class="col-sm-10 col-sm-offset-1">
                <div class="login-container">
                    <div class="center">
                        <h1>
                            <i class="icon-leaf green"></i>
                            <span class="red">ACer音乐网</span>
                            <span class="white">后台管理</span>
                        </h1>
                    </div>

                    <div class="space-6"></div>

                    <div class="position-relative">
                        <div id="login-box" class="login-box visible widget-box no-border">
                            <div class="widget-body">
                                <div class="widget-main">
                                    <h4 class="header blue lighter bigger">
                                        <i class="icon-coffee green"></i>
                                        Please Enter Your Information
                                    </h4>

                                    <div class="space-6"></div>

                                    <form id="loginForm" action="<?=\yii\helpers\Url::to(['user/login'])?>">
                                        <input name="_csrf" type="hidden" value="<?=Yii::$app -> request -> csrfToken?>" />
                                        <fieldset>
                                            <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="text" name="username" class="form-control" placeholder="Username" />
															<i class="icon-user"></i>
														</span>
                                            </label>

                                            <label class="block clearfix">
														<span class="block input-icon input-icon-right">
															<input type="password" name="password" class="form-control" placeholder="Password" />
															<i class="icon-lock"></i>
														</span>
                                            </label>

                                            <div class="space"></div>

                                            <div class="clearfix">
                                                <label class="inline">
                                                    <input type="checkbox" checked="checked" class="ace" name="rememberMe" value="1"/>
                                                    <span class="lbl"> Remember Me</span>
                                                </label>

                                                <button id="login" type="button" class="width-35 pull-right btn btn-sm btn-primary">
                                                    <i class="icon-key"></i>
                                                    登录
                                                </button>
                                            </div>

                                            <div class="space-4"></div>
                                        </fieldset>
                                    </form>



                                </div><!-- /widget-main -->


                            </div><!-- /widget-body -->
                        </div><!-- /login-box -->

                    </div><!-- /position-relative -->
                </div>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div>
</div><!-- /.main-container -->




<script type="text/javascript">
    if("ontouchend" in document) document.write("<script src='<?=Yii::$app -> homeUrl?>plugin/ace/js/jquery.mobile.custom.min.js'>"+"<"+"/script>");
</script>

<!-- inline scripts related to this page -->

<script type="text/javascript">
    function show_box(id) {
        jQuery('.widget-box.visible').removeClass('visible');
        jQuery('#'+id).addClass('visible');
    }
</script>
<script>
    $(function(){
        $("#login").click(function(){
            $.ajax({
                type:'post',
                async:false,
                dataType:'json',
                url:$("#loginForm").attr('action'),
                data:$("#loginForm").serialize(),
                success:function(data){
                    layer.alert(data.msg, function(index){
                        if(data.code == 1){
                            location.href='<?=\yii\helpers\Url::to(['site/index'])?>';
                        }
                        layer.close(index);
                    });
                }
            });
            return false;
        });
    })
</script>
</body>
</html>
