<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/16
 * Time: 18:40
 */
$user = Yii::$app -> user -> identity;
?>
<div class="container">
    <style>
        .tabs .tab{
            display:none;
        }
        .tabs .current{
            display:block;
        }
        .itm .lab{
            width:60px;
        }
        .u-txt {
            margin-left:20px;
        }
        .m-frm .check{
            margin-left:20px;
        }
    </style>
    <div class="g-bd">
        <div class="g-wrap" id="baseBox">
            <div class="u-title u-title-2 f-cb">
                <h3>
                    <span class="f-ff2">个人设置</span>
                </h3>
            </div>
            <ul class="m-tabs f-cb">
                <li class="fst">
                    <a href="/user/update" class="z-slt">
                        <em>基本设置</em>
                    </a>
                </li>
<!--                <li>
                    <a href="/user/binding/#/list">
                        <em>绑定设置</em>
                    </a>
                </li>-->
                <li>
                    <a href="">
                        <em>修改密码</em>
                    </a>
                </li>
            </ul>
            <div class="tabs">
                <div class="tab current">
                    <form action="<?=\yii\helpers\Url::to(['user/update'])?>" id="update_form">
                        <input name="_csrf" type="hidden" value="<?=Yii::$app -> request -> csrfToken?>" />
                        <div class="n-base f-cb">
                            <div class="frm m-frm">
                                <div class="itm">
                                    <label class="lab">昵称：</label>
                                    <input type="text" class="u-txt txt" value="<?=!empty($user -> username)?$user -> username : ''?>" id="nickname" name="username" maxlength="30" />
                                    <div class="u-err" style="display:none;" id="err">
                                        <span>昵称已存在！</span>
                                    </div>
                                </div>
                                <div class="itm f-cb">
                                    <label class="lab">介绍：</label>
                                    <div class="u-txtwrap f-pr">
                                        <textarea class="u-txt area" id="signature" name="profile" ><?=!empty($user -> profile)?$user -> profile : ''?></textarea>
                                        <span class="zs s-fc2" id="remain">100</span></div>
                                </div>
                                <div class="itm f-cb">
                                    <label class="lab">性别：</label>
                                    <div class="f-cb">
                                        <label class="check">
                                            <input name="sex" type="radio" class="u-rdi" <?=!empty($user -> sex)?($user -> sex == '男'?'checked':''):''?> value="男" /> 男</label>
                                        <label class="check">
                                            <input name="sex" type="radio" class="u-rdi" <?=!empty($user -> sex)?($user -> sex == '女'?'checked':''):''?> value="女" /> 女</label>
                                        <label class="check">
                                            <input name="sex" type="radio" class="u-rdi" <?=empty($user -> sex)?'checked':''?> value="0" /> 保密</label></div>
                                </div>
                                <div class="itm ft">
                                    <a class="u-btn2 u-btn2-2 u-btn2-w2" hidefocus="true" href="" data-action="save" id="saveUserBtn">
                                        <i>保 存</i>
                                    </a>
                                    <a class="u-btn2 u-btn2-1 u-btn2-w2" hidefocus="true" href="" data-action="cancel" style="display:none;">
                                        <i>取 消</i>
                                    </a></div>
                            </div>
                            <div class="avatar f-pr">
                                <img src="<?=\common\help\UrlHelp::getImgUrl($user -> headimg)?>" id="avatar" />
                                <span class="btm"></span>
                                <a href="#" class="upload" id="uploadImg">更换头像</a></div>
                        </div>

                    </form>
                </div>
<!--                <div class="tab">

                </div>-->

                <div class="tab">
                        <form action="<?=\yii\helpers\Url::to(['user/resetpwd'])?>" id="resetpwd_form">
                            <input name="_csrf" type="hidden" value="<?=Yii::$app -> request -> csrfToken?>" />
                            <div class="n-base f-cb">
                                <div class="frm m-frm">
                                    <div class="itm">
                                        <label class="lab">原密码：</label>
                                        <input type="password" class="u-txt txt" value="" name="oldpwd" maxlength="30" />
                                        <div class="u-err err" style="display:none;">
                                            <span></span>
                                        </div>
                                    </div>
                                    <div class="itm f-cb">
                                        <label class="lab">新密码：</label>
                                        <div class="u-txtwrap f-pr">
                                            <input type="password" class="u-txt txt" value="" name="pwd" maxlength="30" />
                                            <div class="u-err err" style="display:none;">
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="itm f-cb">
                                        <label class="lab">确认密码：</label>
                                        <div class="u-txtwrap f-pr">
                                            <input type="password" class="u-txt txt" value="" name="repwd" maxlength="30" />
                                            <div class="u-err err" style="display:none;">
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="itm ft">
                                        <a class="u-btn2 u-btn2-2 u-btn2-w2" hidefocus="true" href="" data-action="save" id="savePwdBtn">
                                            <i>保 存</i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </form>
                </div>
            </div>

        </div>

        <div id="uploadHead" class="g-wrap m-edtimg f-cb"  style="display: none;">
            <div class="u-bread1 f-fw1 f-fs1">
                <a href="#" class="s-fc7" id="back">个人设置</a><span class="arr s-fc4">&gt;</span><span class="f-fw1">更换头像</span>
            </div>
            <div id="cropBox">
                <div class="m-edtimg f-cb">
                    <div style="width:632px;margin: 0 auto;text-align:center">
                        <div>
                            <p id="swfContainer">
                                本组件需要安装Flash Player后才可使用，请从<a href="http://www.adobe.com/go/getflashplayer">这里</a>下载安装。
                            </p>
                        </div>
                        <button type="button" id="upload" style="display:none;margin-top:8px;">swf外定义的上传按钮，点击可执行上传保存操作</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <a title="回到顶部" class="m-back" href="#" id="g_backtop" hidefocus="true" style="">回到顶部</a>
    <script>
        addUserInfoEvent();
    </script>
</div>
