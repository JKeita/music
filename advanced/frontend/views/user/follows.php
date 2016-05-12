<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/12
 * Time: 15:22
 */
$curUser = Yii::$app -> getUser();
$followLogic = new \logic\FollowLogicImp();
?>
<div class="container">
    <link href="<?=Yii::$app -> homeUrl?>css/pt_profile_follows.css" type="text/css" rel="stylesheet" />
    <div class="g-bd">
        <div class="g-wrap p-prf">
            <?php require_once(__DIR__."/user_head_box.php")?>
            <div class="u-title u-title-1 f-cb">
                <h3>
        <span class="f-ff2 s-fc3">关注（
        <span id="fan_count_down"><?=count($followList)?></span>）</span>
                </h3>
            </div>
            <ul class="m-fans f-cb" id="main-box">
                <?php
                    if(!empty($followList)){
                        $isOdd = false;
                        foreach($followList as $item){
                ?>
                            <li class="<?=$isOdd?'odd':''?>">
                                <a href="<?=\yii\helpers\Url::to(['user/home', 'id' => $item['id']])?>" class="ava f-pr single" title="<?=$item['username']?>">
                                    <img src="<?=\common\help\UrlHelp::getImgUrl($item['headimg'])?>?param=60y60" />
                                </a>
                                <div class="info">
                                    <p>
                                        <a href="<?=\yii\helpers\Url::to(['user/home', 'id' => $item['id']])?>" class="s-fc7 f-fs1 nm f-thide single"
                                           title="<?=$item['username']?>"><?=$item['username']?></a></p>
                                    <p>
                                        <a href="">动态
                                            <em class="s-fc7">0</em></a>
                                        <span class="line">|</span>
                                        <a href="<?=\yii\helpers\Url::to(['user/follows', 'id' => $item['id']])?>" class="single">关注
                                            <em class="s-fc7"><?=$followLogic -> getFollowsNum($item['id'])?></em></a>
                                        <span class="line">|</span>
                                        <a href="<?=\yii\helpers\Url::to(['user/fans', 'id' => $item['id']])?>" class="single">粉丝
                                            <em class="s-fc7"><?=$followLogic -> getFansNum($item['id'])?></em></a>
                                    </p>
                                    <p class="s-fc3 f-thide"><?=$item['profile']?></p>
                                </div>
                                <div class="oper">
                                </div>
                            </li>
                <?php
                            $isOdd = !$isOdd;
                        }
                    }
                ?>
            </ul>
        </div>
    </div>
    <a title="回到顶部" class="m-back" href="#" id="g_backtop" hidefocus="true" style="display: none;">回到顶部</a>
    <script>
        $(function(){
//            addUserHomeEvent();
        });
    </script>
</div>
