<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/17
 * Time: 14:35
 */

?>
<?php
    if(Yii::$app -> user -> isGuest){
?>
        <div class="m-tophead f-pr j-tflag" id="">
            <a hidefocus="true" href="http://music.163.com/#" class="link login" data-action="login">登录</a>
<!--            <div class="m-tlist j-uflag" style="display: none;">-->
<!--                <div class="inner">-->
<!--                </div>-->
<!--            </div>-->
        </div>
<?php
    } else{
        $user = Yii::$app -> user -> identity;
?>
        <div class="m-tophead f-pr j-tflag" id="">
            <div class="head f-fl f-pr">
                <img src="<?=\common\help\UrlHelp::getImgUrl($user -> headimg)?>">
                <a href="<?=\yii\helpers\Url::to(['user/user-info'])?>" class="mask"></a>
                <i class="icn u-icn u-icn-68 f-alpha" style="display:none;"></i>
            </div>
            <a href="/user/home?id=37889558" class="name f-thide f-fl f-tdn"><?=$user -> username?></a>
            <div class="m-tlist m-tlist-lged j-uflag" style="display:none;">
                <div class="inner">
                    <ul class="f-cb lb mg">
                        <li>
                            <a hidefocus="true" class="itm-1 single" href="<?=\yii\helpers\Url::to(['user/user-info'])?>">
                                <i class="icn icn-hm"></i>
                                <em>我的主页</em>
                                <i class="icon u-icn u-icn-68 f-alpha j-uflag" style="display:none;"></i>
                            </a>
                        </li>
                        <li hidden>
                            <a href="/user/level" data-action="viewLevel" class="itm-2 single">
                                <i class="icn icn-lv"></i>
                                <em>我的等级</em>
                                <i class="new u-icn u-icn-78 j-uflag"></i></a>
                        </li>
                    </ul>
                    <ul class="f-cb ltb mg">
                        <li>
                            <a hidefocus="true" class="itm-2 single" href="<?=\yii\helpers\Url::to(['user/user-info'])?>">
                                <i class="icn icn-st"></i>
                                <em>个人设置</em>
                            </a>
                        </li>
                    </ul>
                    <ul class="f-cb lt">
                        <li >
                            <a hidefocus="true" class="itm-3 logoutBtn" data-action="logout">
                                <i class="icn icn-ex"></i>
                                <em>退出</em>
                            </a>
                        </li>
                    </ul>
                </div>
                <i class="arr"></i>
            </div>
        </div>
<?php

    }
?>



