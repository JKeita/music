<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/12
 * Time: 15:32
 */
?>
<dl class="m-proifo f-cb" id="head-box">
    <dt class="f-pr" id="ava">
        <img src="<?=\common\help\UrlHelp::getImgUrl($user -> headimg)?>" />
    </dt>
    <dd>
        <div class="name f-cb">
            <div class="f-cb">
                <h2 class="f-fl f-cb">
                    <span class="tit f-ff2 s-fc0"><?=\yii\helpers\Html::encode($user -> username)?></span>
                </h2>
                <div id="head-oper">
                    <?php
                    if(!empty($curUser -> id)&&$curUser -> id != $user -> id){
                        $followLogic = new \logic\FollowLogicImp();
                        if($followLogic -> isFollow($curUser -> id, $user -> id)){
                            ?>
                            <a class="btn u-btn u-btn-6 f-tdn" data-id="<?=$user -> id?>" data-action="delfollow">
                                <i>已关注</i>
                            </a>
                            <?php
                        }else{
                            ?>
                            <a class="btn u-btn u-btn-8 f-tdn" data-id="<?=$user -> id?>" data-action="follow">关 注</a>
                            <?php
                        }
                    }
                    ?>
                </div>
            </div>
        </div>
        <ul class="data s-fc3 f-cb" id="tab-box">
            <li class="fst">
                <a href="">
                    <?php
                        $shareLogic = new \logic\ShareLogicImp();
                    ?>
                    <strong id="event_count"><?=$shareLogic -> getUserEventCount($user -> id)?></strong>
                    <span>动态</span>
                </a>
            </li>
            <li>
                <a href="<?=\yii\helpers\Url::to(['user/follows', 'id' => $user -> id])?>" class="single">
                    <strong id="follow_count"><?=$followLogic -> getFollowsNum($user -> id)?></strong>
                    <span>关注</span>
                </a>
            </li>
            <li>
                <a href="<?=\yii\helpers\Url::to(['user/fans', 'id' => $user -> id])?>" class="single">
                    <strong id="fan_count"><?=$followLogic -> getFansNum($user -> id)?></strong>
                    <span>粉丝</span>
                    <i class="u-icn u-icn-68 f-alpha" id="newCount" style="display:none;"></i></a>
            </li>
        </ul>
        <div class="inf s-fc3 f-brk">个人介绍：<?=\yii\helpers\Html::encode($user -> profile)?></div>
    </dd>
</dl>
