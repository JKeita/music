<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/7
 * Time: 15:57
 */
$user = Yii::$app -> user -> identity;
?>
<style>
    .container{
        padding-top:70px !important;
    }
</style>
<div class="container" >
    <div id="m-playlist" class="g-bd4 f-cb">
        <div class="g-mn4">
            <div class="g-mn4c">
                <div class="g-wrap6">
                    <div class="m-info f-cb">
                        <div class="cover u-cover u-cover-dj">
                            <img src="<?=\common\help\UrlHelp::getImgUrl($data['cover'])?>" class="j-img"
                                 data-src="" />
                        </div>
                        <div class="cnt">
                            <div class="cntc">
                                <div class="hd f-cb">
                                    <div class="tit">
                                        <h2 class="f-ff2 f-brk"><?=$data['name']?></h2>
                                    </div>
                                </div>
                                <div class="user f-cb">
                                    <a class="face single" href="<?=\yii\helpers\Url::to(['user/home', 'id' => $data['creator']['id']])?>">
                                        <img src="<?=\common\help\UrlHelp::getImgUrl($data['creator']['headimg'])?>" />
                                    </a>
                  <span class="name">
                    <a href="<?=\yii\helpers\Url::to(['user/home', 'id' => $data['creator']['id']])?>" class="s-fc7 single"><?=$data['creator']['username']?></a>
                  </span>
                                    <span class="time s-fc4"><?=substr($data['created'],0,10)?>创建</span></div>
                                <div id="content-operation" class="btns f-cb" data-rid="159240917" data-type="13" data-special="0">
                                    <a id="flag_play" data-res-action="play" data-res-id="<?=$id?>" data-res-type="13" href="javascript:;"
                                       class="u-btn2 u-btn2-2 u-btni-addply f-fl" hidefocus="true" title="播放">
                                        <i>播放</i>
                                    </a>
                                    <a id="flag_add" data-res-action="addto" data-res-id="<?=$id?>" data-res-type="13" href="javascript:;"
                                       class="u-btni u-btni-add" hidefocus="true" title="添加到播放列表"></a>
                                    <a id="flag_collect" data-res-id="<?=$id?>" data-res-type="13" data-count="2648" data-res-action="fav_p" class="u-btni u-btni-fav"
                                       href="javascript:;">
                                        <i>收藏(<?=$data['collectnum']?>)</i>
                                    </a>
                                    <a id="flag_share" data-res-id="<?=$id?>" data-res-type="2" data-count="24" data-res-action="share"
                                       data-res-pic="http://p4.music.126.net/Bf0LtOHI29-enSa30TytPw==/1365593486525946.jpg" class="u-btni u-btni-share"
                                       href="javascript:;">
                                        <i>分享(<?=$data['sharenum']?>)</i>
                                    </a>
                                    <a data-res-id="<?=$id?>" data-res-type="13" data-res-action="download" class="u-btni u-btni-dl"
                                       href="javascript:;">
                                        <i>下载</i>
                                    </a>
                                    <a data-res-action="comment" href="javascript:;" class="u-btni u-btni-cmmt">
                                        <i>评论</i>
                                    </a>
                                </div>
                                <?php
                                if(!empty($pTagArr)){
                                    ?>
                                    <div class="tags f-cb">
                                        <b>标签：</b>
                                        <?php
                                        foreach($pTagArr as $tag){
                                            ?>
                                            <a class="u-tag" href="javascript:void(0);"><i><?=$tag['name']?></i></a>
                                            <?php
                                        }
                                        ?>


                                    </div>
                                    <?php
                                }
                                ?>
                                <p id="album-desc-more" class="intr f-brk">
                                    <b>介绍：</b><br />
                                   <?=\yii\helpers\Html::encode($data['profile'])?>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="n-songtb">
                        <div class="u-title u-title-1 f-cb">
                            <h3>
                                <span class="f-ff2">歌曲列表</span>
                            </h3>
                            <span class="sub s-fc3">
                            <span id="playlist-track-count"><?=!empty($songList)?count($songList):0?></span>首歌</span>
                        </div>
                        <div id="song-list-pre-cache" data-key="track_playlist-159240917">
                            <div id="auto-id-ZqGxAG7tU37HFsc3">
                                <div class="j-flag" id="auto-id-gKgLHwLq12CLK1Si">
                                    <table class="m-table">
                                        <thead>
                                        <tr>
                                            <th class="first w1">
                                                <div class="wp"></div>
                                            </th>
                                            <th>
                                                <div class="wp">歌曲标题</div>
                                            </th>
                                            <th class="w2">
                                                <div class="wp">时长</div>
                                            </th>
                                            <th class="w3">
                                                <div class="wp">歌手</div>
                                            </th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <?php
                                        if(!empty($songList)){
                                        ?>
                                            <?php
                                            $i = 0;
                                            foreach($songList as $song) {
                                                $i++;
                                            ?>
                                            <tr>
                                                <td class="left">
                                                    <div class="hd">
                                                        <span data-res-id="<?=$song['id']?>" data-res-type="18" data-res-action="play" data-res-from="13" data-res-data="" class="ply"></span>
                                                        <span class="num"><?=$i?></span>
                                                    </div>
                                                </td>
                                                <td class="">
                                                    <div class="f-cb">
                                                        <div class="tt">
                                                            <div class="ttc">
                                                              <span class="txt">
                                                                  <a href="<?=\yii\helpers\Url::to(['song/info', 'id' => $song['id']])?>" class="single">
                                                                      <b title="<?=$song['name']?>"><?=$song['name']?></b>
                                                                  </a>
                                                              </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class=" s-fc3">
                                                    <?php
                                                    if($song['duration']>1000){
                                                        $duration = $song['duration'] / 1000;
                                                    }else{
                                                        $duration = $song['duration'];
                                                    }
                                                    ?>
                                                    <span class="u-dur"><?=date('i:s', $duration)?></span>
                                                    <div class="opt hshow">
                                                        <a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="<?=$song['id']?>" data-res-action="addto" data-res-from="1" data-res-data="42097082"></a>
                                                        <span data-res-id="<?=$song['id']?>" data-res-type="1" data-res-action="fav" class="icn icn-fav" title="收藏"></span>
                                                        <span data-res-id="<?=$song['id']?>" data-res-type="1" data-res-action="share" data-res-pic="http://p4.music.126.net/i-e5PQtKh_xHl8BkZ-q8hg==/610228953423220.jpg" class="icn icn-share" title="分享">分享</span>
                                                        <span data-res-id="<?=$song['id']?>" data-res-type="1" data-res-action="download" class="icn icn-dl" title="下载"></span>
                                                    </div>
                                                </td>
                                                <td class="">
                                                    <div class="text" title="<?=$song['author']?>">
                                                          <span title="<?=$song['author']?>">
                                                            <a class="" href="javascript:void(0);" hidefocus="true"><?=$song['author']?></a>
                                                          </span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <?php
                                            }
                                            ?>
                                        <?php
                                        }
                                        ?>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="j-flag"></div>
                            </div>
                        </div>
                    </div>
                    <input type="hidden" name="pid" value="<?=$id?>" />
                    <?php require_once(__DIR__.'/../common/comment.php')?>
                </div>
            </div>
        </div>
        <div class="g-sd4">
            <div class="g-wrap7">
                <?php
                    $playListLogic = new \logic\PlayListLogicImp();
                    $collectUser = $playListLogic -> getCollectUserByPid($data['id']);

                ?>
                <?php
                    if(!empty($collectUser)){
                ?>
                        <h3 class="u-hd3">
                            <span class="f-fl">喜欢这个歌单的人</span>
                        </h3>
                        <ul class="m-piclist f-cb">
                            <?php
                                foreach($collectUser as $item){
                            ?>
                                    <li>
                                        <a href="<?=\yii\helpers\Url::to(['user/home', 'id' => $item['id']])?>" class="f-tdn single" title="<?=\yii\helpers\Html::encode($item['username'])?>">
                                            <img src="<?=\common\help\UrlHelp::getImgUrl($item['headimg'])?>" />
                                        </a>
                                    </li>
                            <?php
                                }
                            ?>

                        </ul>
                <?php
                    }
                ?>
                <?php
                    $hotList =  $playListLogic -> getHotPlayList();
                ?>
                <?php
                    if(!empty($hotList)){
                ?>
                        <h3 class="u-hd3">
                            <span class="f-fl">热门歌单</span>
                        </h3>
                        <ul class="m-rctlist f-cb">
                            <?php
                                foreach($hotList as $item){
                            ?>
                                    <li>
                                        <div class="cver u-cover u-cover-3">
                                            <a href="<?=\yii\helpers\Url::to(['playlist/info', 'id' => $item['id']])?>" class="single" title="<?=\yii\helpers\Html::encode($item['name'])?>">
                                                <img src="<?=\common\help\UrlHelp::getImgUrl($item['cover'])?>" />
                                            </a>
                                        </div>
                                        <div class="info">
                                            <p class="f-thide">
                                                <a class="sname f-fs1 s-fc0 single" href="<?=\yii\helpers\Url::to(['playlist/info', 'id' => $item['id']])?>"
                                                   title="<?=\yii\helpers\Html::encode($item['name'])?>"><?=\yii\helpers\Html::encode($item['name'])?></a>
                                            </p>
                                            <p>
                                                <span class="by s-fc4">by</span>
                                                <a class="nm nm f-thide s-fc3 single" href="<?=\yii\helpers\Url::to(['user/home', 'id' => $item['uid']])?>" title="<?=\yii\helpers\Html::encode($item['username'])?>"><?=\yii\helpers\Html::encode($item['username'])?></a>
                                            </p>
                                        </div>
                                    </li>
                            <?php
                                }
                            ?>

                        </ul>
                <?php
                    }
                ?>

            </div>
        </div>
    </div>


</div>
<a title="回到顶部" class="m-back" href="#" id="g_backtop" hidefocus="true">回到顶部</a>
<script>
    $(function(){
        addPlayListEvent();
    });
</script>
</div>

