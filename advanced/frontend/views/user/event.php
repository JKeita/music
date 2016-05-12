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
                <h3><span class="f-ff2 s-fc3">我的动态（<span id="event_count2"><?=count($eventData)?></span>）</span></h3>
            </div>

            <div class="g-bd1 g-bd1-1 f-cb">
                <div class="g-mn1">
                    <div class="g-mn1c">
                        <div class="g-wrap10" id="eventListBox">
                            <div id="auto-id-LtwLR9JA3xeGZ0Li">
                                <a data-action="pull" class="m-dynamicbar f-ff1 j-flag" style="display:none;" href="javascript:;"></a>
                                <div class="m-timeline">
                                    <ul class="m-dlist j-flag">
                                        <?php
                                            if(!empty($eventData)){
                                                foreach($eventData as $item){
                                                    if($item['type'] == 1){
                                                        $model = \models\Song::findOne($item['psid']);
                                        ?>
                                                        <li class="itm">
                                                            <div class="gface">
                                                                <a href="<?=\yii\helpers\Url::to(['user/home', 'id' => $user -> id])?>" class="ficon single">
                                                                    <img class="j-flag"
                                                                         src="<?=\common\help\UrlHelp::getImgUrl($user -> headimg)?>" />
                                                                </a>
                                                            </div>
                                                            <div class="gcnt j-flag">
                                                                <div class="dcntc" id="auto-id-i2HlRue69Mt0cTAO">
                                                                    <div class="type f-pr f-fs1">
                                                                        <a href="<?=\yii\helpers\Url::to(['user/home', 'id' => $user -> id])?>" class="s-fc7 single"><?=$user -> username?></a>
                                                                        <span class="sep s-fc3">分享单曲</span>
                                                                    </div>
                                                                    <div class="time">
                                                                        <a class="s-fc4" data-action="logdetail" href="javascript:void(0);"><?=$item['ctime']?></a>
                                                                    </div>
                                                                    <div class="text f-fs1 f-brk j-text"></div>
                                                                    <div class="j-flag">
                                                                        <div id="auto-id-UOPuLh2BduBgD3bh">
                                                                            <div class="src f-cb">
                                                                                <div class="cover cover-ply">
                                                                                    <span class="lnk">
                                                                                      <img src="<?=\common\help\UrlHelp::getImgUrl($model -> cover)?>" />
                                                                                    </span>
                                                                                </div>
                                                                                <div class="scnt">
                                                                                    <h3 class="tit f-thide f-fs1">
                                                                                        <a href="<?=\yii\helpers\Url::to(['song/info', 'id' => $model -> id])?>" class="s-fc1 single"><?=$model -> name?></a>
                                                                                    </h3>
                                                                                    <h4 class="from f-thide s-fc3">
                                                                                        <a href="javascript:void(0);" title="<?=$model -> author?>" class="s-fc3"><?=$model -> author?></a>
                                                                                    </h4>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="doper j-flag">
                                                                        <?php
                                                                            if(!empty($curUser -> id) && $curUser -> id == $item['uid']){
                                                                                ?>
                                                                                <a href="javascript:" data-res-id="<?=$item['id']?>" class="s-fc7" data-res-action="delshare">删除</a>
                                                                                <?php
                                                                            }
                                                                        ?>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                        <?php
                                                    }else{
                                                        $model = \models\Playlist::findOne($item['psid']);
                                                        $creator = \models\User::findOne($model -> uid);
                                        ?>
                                                        <li class="itm">
                                                            <div class="gface">
                                                                <a href="<?=\yii\helpers\Url::to(['user/home', 'id' => $user -> id])?>" class="ficon single">
                                                                    <img class="j-flag"
                                                                         src="<?=\common\help\UrlHelp::getImgUrl($user -> headimg)?>?param=45y45" />
                                                                </a>
                                                            </div>
                                                            <div class="gcnt j-flag">
                                                                <div class="dcntc" id="auto-id-i2HlRue69Mt0cTAO">
                                                                    <div class="type f-pr f-fs1">
                                                                        <a href="<?=\yii\helpers\Url::to(['user/home', 'id' => $user -> id])?>" class="s-fc7 single"><?=$user -> username?></a>
                                                                        <span class="sep s-fc3">分享歌单</span>
                                                                    </div>
                                                                    <div class="time">
                                                                        <a class="s-fc4" data-action="logdetail" href="javascript:void(0);"><?=$item['ctime']?></a>
                                                                    </div>
                                                                    <div class="text f-fs1 f-brk j-text"></div>
                                                                    <div class="j-flag">
                                                                        <div id="auto-id-UOPuLh2BduBgD3bh">
                                                                            <div class="src f-cb">
                                                                                <div class="cover cover-ply">
                                                                                    <span class="lnk">
                                                                                      <img src="<?=\common\help\UrlHelp::getImgUrl($model -> cover)?>?param=40y40" />
                                                                                    </span>
                                                                                </div>
                                                                                <div class="scnt">
                                                                                    <h3 class="tit f-thide s-fc1 f-fs1">
                                                                                        <span class="tag u-dtag">歌单<i class="rt"></i></span>
                                                                                        <a href="<?=\yii\helpers\Url::to(['playlist/info', 'id' => $model -> id])?>" class="s-fc1 single"><?=$model -> name?></a>
                                                                                    </h3>
                                                                                    <h4 class="from f-thide s-fc3">by <a href="<?=\yii\helpers\Url::to(['user/home', 'id' => $creator -> id])?>" class="s-fc3 single"><?=$creator -> username?></a></h4>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="doper j-flag">
                                                                        <?php
                                                                        if(!empty($curUser -> id) && $curUser -> id == $item['uid']){
                                                                            ?>
                                                                            <a href="javascript:" data-res-id="<?=$item['id']?>" class="s-fc7" data-res-action="delshare">删除</a>
                                                                            <?php
                                                                        }
                                                                        ?>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                        <?php
                                                    }
                                                }
                                            }
                                        ?>


                                    </ul>
                                    <div class="u-page j-flag">
                                        <?=\common\help\LinkPager::widget(['pagination' => $page])?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <a title="回到顶部" class="m-back" href="#" id="g_backtop" hidefocus="true" style="display: none;">回到顶部</a>
    <script>
        $(function(){
//            addUserEventEvent();
        });
    </script>
</div>
