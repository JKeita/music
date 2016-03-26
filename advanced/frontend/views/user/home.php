<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/10
 * Time: 15:33
 */
$curUser = Yii::$app -> getUser();
$followLogic = new \logic\FollowLogicImp();
$playListLogic = new \logic\PlayListLogicImp();
?>
<div class="container">

    <div class="g-bd">
        <div class="g-wrap p-prf">
            <?php require_once(__DIR__."/user_head_box.php")?>
            <?php
                $dependency = [
                    'class' => 'yii\caching\DbDependency',
                    'sql' => "SELECT MAX(id) FROM playlist where uid={$id}",
                ];
                if($this -> beginCache('CreatePlayList_'.$id, ['dependency' => $dependency, 'duration' => 36000])) {
                    $playList = $playListLogic -> getUserPlayListByUid($id);
            ?>
                    <!-- <?=date('Y-m-d H:i:s')?>-->
                    <div class="u-title u-title-1 f-cb" id="cHeader" style="">
                        <h3>
                            <span class="f-ff2"><?= $user->username ?>创建的歌单</span>
                        </h3>
                    </div>
                    <ul class="m-cvrlst f-cb" id="cBox">
                        <?php
                        if (!empty($playList)) {
                            foreach ($playList as $item) {
                                ?>
                                <li>
                                    <div class="u-cover u-cover-1">
                                        <img src="<?= \common\help\UrlHelp::getImgUrl($item['cover']) ?>?param=140y140"/>
                                        <a href="<?= \yii\helpers\Url::to(['playlist/info', 'id' => $item['id']]) ?>"
                                           class="msk single" title="<?= $item['name'] ?>"></a>
                                        <div class="bottom">
                                            <a class="icon-play f-fr" href="javascript:;" title="播放"
                                               data-res-action="play" data-res-type=""
                                               data-res-id="<?= $item['id'] ?>"></a>
                                            <span class="nb"></span>
                                        </div>
                                    </div>
                                    <p class="dec">
                                        <a class="tit f-thide s-fc0 single"
                                           href="<?= \yii\helpers\Url::to(['playlist/info', 'id' => $item['id']]) ?>"
                                           title="<?= $item['name'] ?>"><?= $item['name'] ?></a>
                                    </p>
                                </li>
                                <?php
                            }
                        }
                        ?>
                    </ul>
            <?php
                    $this->endCache();
                }
            ?>
            <?php
                $dependency = [
                    'class' => 'yii\caching\DbDependency',
                    'sql' => "SELECT MAX(id) FROM play_list_collect where uid={$id}",
                ];
                if($this -> beginCache('CollectPlayList_'.$id, ['dependency' => $dependency, 'duration' => 36000])) {
                    $collectList = $playListLogic -> getUserCollectListByUid($id);
            ?>
                    <!-- <?=date('Y-m-d H:i:s')?>-->
                    <div class="u-title u-title-1 f-cb" id="sHeader" style="">
                        <h3>
                            <span class="f-ff2"><?=$user -> username?>收藏的歌单</span>
                        </h3>
                    </div>
                    <ul class="m-cvrlst f-cb" id="sBox">
                        <?php
                            if(!empty($collectList)){
                                foreach($collectList as $item){
                        ?>
                                    <li>
                                        <div class="u-cover u-cover-1">
                                            <img src="<?=\common\help\UrlHelp::getImgUrl($item['cover'])?>?param=140y140" />
                                            <a href="<?=\yii\helpers\Url::to(['playlist/info', 'id' => $item['id']])?>" class="msk single" title="<?=$item['name']?>"></a>
                                            <div class="bottom">
                                                <a class="icon-play f-fr" href="javascript:;" title="播放" data-res-action="play" data-res-type=""
                                                   data-res-id="<?=$item['id']?>"></a>
                                                <span class="nb"></span>
                                            </div>
                                        </div>
                                        <p class="dec">
                                            <a class="tit f-thide s-fc0 single" href="<?=\yii\helpers\Url::to(['playlist/info', 'id' => $item['id']])?>" title="<?=$item['name']?>"><?=$item['name']?></a>
                                        </p>
                                    </li>
                        <?php
                                }
                            }
                        ?>

                    </ul>
            <?php
                    $this->endCache();
                }
            ?>
        </div>
    </div>
    <a title="回到顶部" class="m-back" href="#" id="g_backtop" hidefocus="true" style="display: none;">回到顶部</a>
<script>
    $(function(){
        addUserHomeEvent();
    });
</script>
</div>
