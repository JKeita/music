<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/7
 * Time: 15:57
 */
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
                                        <i>收藏</i>
                                    </a>
                                    <a id="flag_share" data-res-id="<?=$id?>" data-res-type="13" data-count="24" data-res-action="share"
                                       data-res-pic="http://p4.music.126.net/Bf0LtOHI29-enSa30TytPw==/1365593486525946.jpg" class="u-btni u-btni-share"
                                       href="javascript:;">
                                        <i>分享</i>
                                    </a>
                                    <a data-res-id="<?=$id?>" data-res-type="13" data-res-action="download" class="u-btni u-btni-dl"
                                       href="javascript:;">
                                        <i>下载</i>
                                    </a>
                                    <a data-res-action="comment" href="javascript:;" class="u-btni u-btni-cmmt">
                                        <i>评论</i>
                                    </a>
                                </div>
                          <!--      <div class="tags f-cb">
                                    <b>标签：</b>
                                    <a class="u-tag" href="/discover/playlist/?cat=%E5%8D%8E%E8%AF%AD&amp;order=hot">
                                        <i>华语</i>
                                    </a>
                                    <a class="u-tag" href="/discover/playlist/?cat=%E6%B5%81%E8%A1%8C&amp;order=hot">
                                        <i>流行</i>
                                    </a>
                                    <a class="u-tag" href="/discover/playlist/?cat=%E6%84%9F%E5%8A%A8&amp;order=hot">
                                        <i>感动</i>
                                    </a>
                                    </div>-->
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
                            <span id="playlist-track-count">38</span>首歌</span>
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
                                                                  <a href="<?=\yii\helpers\Url::to(['song/info', 'id' => $song['id']])?>">
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
                                                        <a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="<?=$song['id']?>" data-res-action="addto" data-res-from="13" data-res-data="42097082"></a>
                                                        <span data-res-id="<?=$song['id']?>" data-res-type="18" data-res-action="fav" class="icn icn-fav" title="收藏"></span>
                                                        <span data-res-id="<?=$song['id']?>" data-res-type="18" data-res-action="share" data-res-pic="http://p4.music.126.net/i-e5PQtKh_xHl8BkZ-q8hg==/610228953423220.jpg" class="icn icn-share" title="分享">分享</span>
                                                        <span data-res-id="<?=$song['id']?>" data-res-type="18" data-res-action="download" class="icn icn-dl" title="下载"></span>
                                                    </div>
                                                </td>
                                                <td class="">
                                                    <div class="text" title="<?=$song['author']?>">
                                                          <span title="<?=$song['author']?>">
                                                            <a class="" href="/artist?id=95442" hidefocus="true"><?=$song['author']?></a>
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
                    <div class="n-cmt" id="comment-box" data-tid="R_SO_4_2081274" data-count="66">
                        <div id="auto-id-koiqrc72GG4sfTyn">
                            <div class="u-title u-title-1">
                                <h3>
                                    <span class="f-ff2">评论</span>
                                </h3>
                                <!--                                <span class="sub s-fc3">共<span class="j-flag">66</span>条评论</span>-->
                            </div>
                            <div class="m-cmmt">
                                <input type="hidden" name="pid" value="<?=$id?>" />
                                <div class="iptarea">
                                    <div class="head">
                                        <?php
                                        $headimg = !empty(Yii::$app -> user -> identity -> headimg)?Yii::$app -> user -> identity -> headimg:'';
                                        ?>
                                        <img src="<?=\common\help\UrlHelp::getImgUrl($headimg)?>">
                                    </div>
                                    <div class="j-flag">
                                        <div>
                                            <div class="m-cmmtipt f-cb f-pr">
                                                <div class="u-txtwrap holder-parent f-pr" style="display: block;">
                                                    <textarea class="u-txt area j-flag" placeholder="评论"></textarea>
                                                </div>
                                                <div class="btns f-cb f-pr">
                                                    <!--                     <i class="icn u-icn u-icn-36 j-flag" id="auto-id-aTcpxvew6EnyUvao"></i>
                                                                         <i class="icn u-icn u-icn-41 j-flag" id="auto-id-3dSMaW3TB4pnapTa"></i>-->
                                                    <a href="javascript:void(0)" class="btn u-btn u-btn-1 j-flag" id="docomment">评论</a>
                                                    <span class="zs s-fc4 j-flag">140</span>
                                                </div>
                                                <div class="corr u-arr">
                                                    <em class="arrline">◆</em>
                                                    <span class="arrclr">◆</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="cmmts j-flag" id="auto-id-3V0eaFlhDUFBRuMG">
                                    <h3 class="u-hd4">最新评论</h3>
                                    <?php
                                    if(!empty($commentData)){
                                        foreach($commentData as $item){
                                            $repler = \models\User::findOne($item['uid']);
                                            ?>
                                            <div class="itm" data-id="<?=$item['id']?>">
                                                <div class="head">
                                                    <a href="">
                                                        <img src="<?=\common\help\UrlHelp::getImgUrl($repler -> headimg)?>">
                                                    </a>
                                                </div>
                                                <div class="cntwrap">
                                                    <div class="">
                                                        <div class="cnt f-brk">
                                                            <a href="/user/home?id=44816691" class="s-fc7"><?=\yii\helpers\Html::encode($repler -> username)?></a>：<?=\yii\helpers\Html::encode($item['content'])?>
                                                        </div>
                                                    </div>
                                                    <?php
                                                    if(!empty($item['tid'])){
                                                        $tcomment = \models\Comment::findOne($item['tid']);
                                                        $trepler = \models\User::findOne($tcomment -> uid);
                                                        ?>
                                                        <div class="que f-brk f-pr s-fc3">
                                                                <span class="darr">
                                                                  <i class="bd">◆</i>
                                                                  <i class="bg">◆</i>
                                                                </span>
                                                            <a class="s-fc7" href=""><?=\yii\helpers\Html::encode($trepler -> username)?></a>：<?=\yii\helpers\Html::encode($tcomment -> content)?>
                                                        </div>
                                                        <?php
                                                    }
                                                    ?>
                                                    <div class="rp">
                                                        <div class="time s-fc4"><?=$item['ctime']?></div>
                                                        <span class="sep">|</span>
                                                        <a href="javascript:void(0)" class="s-fc3 a_reply" data-id="<?=$item['id']?>" data-type="reply">回复</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="reply_id_<?=$item['id']?>" class="reply_block" style="display:none">
                                                <div>
                                                    <div class="rept m-quk m-quk-1 f-pr">
                                                        <div class="iner">
                                                            <div class="corr u-arr u-arr-1">
                                                                <em class="arrline">◆</em>
                                                                <span class="arrclr">◆</span>
                                                            </div>
                                                            <div class="m-cmmtipt m-cmmtipt-1 f-cb f-pr">
                                                                <div class="u-txtwrap holder-parent f-pr j-wrap" style="display: block;">
                                                                    <textarea class="u-txt area j-flag" placeholder="" id="auto-id-1RoJZnXTCM2IJegH" style="overflow: hidden; height: 20px;"></textarea>
                                                                </div>
                                                                <div class="btns f-cb f-pr">
                                                                    <a href="javascript:void(0)" class="btn u-btn u-btn-1 j-flag replybtn" data-id="<?=$item['id']?>">回复</a>
                                                                    <span class="zs s-fc4 j-flag">140</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <?php
                                        }
                                    }
                                    ?>

                                </div>

                                <div class="j-flag auto-1453622546039-parent">
                                    <?=\common\help\LinkPager::widget(['pagination' => $page])?>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="g-sd4">
            <div class="g-wrap7">
                <h3 class="u-hd3">
                    <span class="f-fl">喜欢这个歌单的人</span>
                </h3>
                <ul class="m-piclist f-cb">
                    <li>
                        <a href="/user/home?id=118009947" class="f-tdn" title="归来的德瑞阿诺">
                            <img src="http://p4.music.126.net/K3HqyRYkyfQGjl4AnW1yKg==/2535473817646431.jpg?param=40y40" />
                        </a>
                    </li>
                    <li>
                        <a href="/user/home?id=68026471" class="f-tdn" title="2R-木头">
                            <img src="http://p4.music.126.net/FoBcKau8u7oR0ZRR2n48mg==/2538772353230241.jpg?param=40y40" />
                        </a>
                    </li>
                    <li>
                        <a href="/user/home?id=110909722" class="f-tdn" title="今天的我也很帅">
                            <img src="http://p4.music.126.net/YmHwS4Pn3SPIxJR5J6yQ0w==/1394180744822634.jpg?param=40y40" />
                        </a>
                    </li>
                    <li>
                        <a href="/user/home?id=69397411" class="f-tdn" title="走个心">
                            <img src="http://p4.music.126.net/bTIoFKFaE1-JQpgN3OynGg==/1986817511391283.jpg?param=40y40" />
                        </a>
                    </li>
                    <li>
                        <a href="/user/home?id=29672573" class="f-tdn" title="红杏爱吃屎">
                            <img src="http://p3.music.126.net/JyShrtPOIXiyDvV62tBDsQ==/2940094093828277.jpg?param=40y40" />
                        </a>
                    </li>
                    <li>
                        <a href="/user/home?id=1311570" class="f-tdn" title="francisliu">
                            <img src="http://p3.music.126.net/bTIoFKFaE1-JQpgN3OynGg==/1986817511391283.jpg?param=40y40" />
                        </a>
                    </li>
                    <li>
                        <a href="/user/home?id=108871408" class="f-tdn" title="萝裙">
                            <img src="http://p3.music.126.net/8ByzhCztGmwlDtPeuqvsFg==/528865130781740.jpg?param=40y40" />
                        </a>
                    </li>
                    <li>
                        <a href="/user/home?id=120983550" class="f-tdn" title="萧萧慕慕">
                            <img src="http://p3.music.126.net/U-4rDWSb68U-1hp0PLnExg==/528865139102869.jpg?param=40y40" />
                        </a>
                    </li>
                </ul>
                <h3 class="u-hd3">
                    <span class="f-fl">热门歌单</span>
                </h3>
                <ul class="m-rctlist f-cb">
                    <li>
                        <div class="cver u-cover u-cover-3">
                            <a href="/playlist?id=135320141" title="〖前奏不耐症〗愿予你最安心的温柔" data-res-id="135320141"
                               data-res-type="13" data-res-action="log" data-res-data="recommendclick|0||playlist-playlist-recommend|159240917">
                                <img src="http://p3.music.126.net/C1sC5DGNL8h0GULBaKDnlg==/3262251006799516.jpg?param=50y50" />
                            </a>
                        </div>
                        <div class="info">
                            <p class="f-thide">
                                <a class="sname f-fs1 s-fc0" href="/playlist?id=135320141"
                                   title="〖前奏不耐症〗愿予你最安心的温柔" data-res-id="135320141" data-res-type="13"
                                   data-res-action="log"
                                   data-res-data="recommendclick|0||playlist-playlist-recommend|159240917">〖前奏不耐症〗愿予你最安心的温柔</a>
                            </p>
                            <p>
                                <span class="by s-fc4">by</span>
                                <a class="nm nm f-thide s-fc3" href="/user/home?id=27595707" title="__BeginAgain__">__BeginAgain__</a>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="cver u-cover u-cover-3">
                            <a href="/playlist?id=156772090" title="就算在天涯，家是永远的牵挂" data-res-id="156772090"
                               data-res-type="13" data-res-action="log" data-res-data="recommendclick|1||playlist-playlist-recommend|159240917">
                                <img src="http://p3.music.126.net/z-oizb4kpbpO8AXQiuQ17w==/1364493978265781.jpg?param=50y50" />
                            </a>
                        </div>
                        <div class="info">
                            <p class="f-thide">
                                <a class="sname f-fs1 s-fc0" href="/playlist?id=156772090" title="就算在天涯，家是永远的牵挂"
                                   data-res-id="156772090" data-res-type="13" data-res-action="log"
                                   data-res-data="recommendclick|1||playlist-playlist-recommend|159240917">就算在天涯，家是永远的牵挂</a>
                            </p>
                            <p>
                                <span class="by s-fc4">by</span>
                                <a class="nm nm f-thide s-fc3" href="/user/home?id=100298640" title="九月枍薇">九月枍薇</a>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="cver u-cover u-cover-3">
                            <a href="/playlist?id=98401485" title="【迪士尼】经典长篇动画电影" data-res-id="98401485"
                               data-res-type="13" data-res-action="log" data-res-data="recommendclick|2||playlist-playlist-recommend|159240917">
                                <img src="http://p4.music.126.net/Lui1U9LoLjQFOWe_lAnBQg==/3441471395306734.jpg?param=50y50" />
                            </a>
                        </div>
                        <div class="info">
                            <p class="f-thide">
                                <a class="sname f-fs1 s-fc0" href="/playlist?id=98401485" title="【迪士尼】经典长篇动画电影"
                                   data-res-id="98401485" data-res-type="13" data-res-action="log"
                                   data-res-data="recommendclick|2||playlist-playlist-recommend|159240917">【迪士尼】经典长篇动画电影</a>
                            </p>
                            <p>
                                <span class="by s-fc4">by</span>
                                <a class="nm nm f-thide s-fc3" href="/user/home?id=44033417" title="莎士比亚书店">莎士比亚书店</a>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="cver u-cover u-cover-3">
                            <a href="/playlist?id=164857330" title="阳光明媚适合睡懒觉[持续更新]" data-res-id="164857330"
                               data-res-type="13" data-res-action="log" data-res-data="recommendclick|3||playlist-playlist-recommend|159240917">
                                <img src="http://p3.music.126.net/dtxmpNBMV9sla_f0q2x-XA==/3264450034481516.jpg?param=50y50" />
                            </a>
                        </div>
                        <div class="info">
                            <p class="f-thide">
                                <a class="sname f-fs1 s-fc0" href="/playlist?id=164857330" title="阳光明媚适合睡懒觉[持续更新]"
                                   data-res-id="164857330" data-res-type="13" data-res-action="log"
                                   data-res-data="recommendclick|3||playlist-playlist-recommend|159240917">阳光明媚适合睡懒觉[持续更新]</a>
                            </p>
                            <p>
                                <span class="by s-fc4">by</span>
                                <a class="nm nm f-thide s-fc3" href="/user/home?id=60893996" title="Dreamlock">Dreamlock</a>
                            </p>
                        </div>
                    </li>
                    <li>
                        <div class="cver u-cover u-cover-3">
                            <a href="/playlist?id=166216532" title="来年，我们谈个长长久久的恋爱可好？"
                               data-res-id="166216532" data-res-type="13" data-res-action="log"
                               data-res-data="recommendclick|4||playlist-playlist-recommend|159240917">
                                <img src="http://p3.music.126.net/14jGzKHpCOPPIuVYFTMoWg==/3405187516523258.jpg?param=50y50" />
                            </a>
                        </div>
                        <div class="info">
                            <p class="f-thide">
                                <a class="sname f-fs1 s-fc0" href="/playlist?id=166216532"
                                   title="来年，我们谈个长长久久的恋爱可好？" data-res-id="166216532" data-res-type="13"
                                   data-res-action="log"
                                   data-res-data="recommendclick|4||playlist-playlist-recommend|159240917">来年，我们谈个长长久久的恋爱可好？</a>
                            </p>
                            <p>
                                <span class="by s-fc4">by</span>
                                <a class="nm nm f-thide s-fc3" href="/user/home?id=7479357"
                                   title="吃兔头大赛第一名">吃兔头大赛第一名...</a>
                            </p>
                        </div>
                    </li>
                </ul>
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

