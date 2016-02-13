<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/24
 * Time: 16:12
 */

?>
<style>
    .container{
        padding-top:70px !important;
    }
</style>
<div class="container" >
    <div class="g-bd4 f-cb">
        <div class="g-mn4">
            <div class="g-mn4c">
                <div class="g-wrap6">
                    <div class="m-lycifo">
                        <div class="f-cb">
                            <div class="cvrwrap f-cb f-pr">
                                <div class="u-cover u-cover-6 f-fl">
                                    <img src="<?=\common\help\UrlHelp::getImgUrl($songInfo['cover'])?>" class="j-img" data-src="<?=\common\help\UrlHelp::getImgUrl($songInfo['cover'])?>">
                                    <span class="msk f-alpha"></span>
                                </div>
                            </div>
                            <div class="cnt">
                                <div class="hd">
                                    <i class="lab u-icn u-icn-37"></i>
                                    <div class="tit">
                                        <em class="f-ff2"><?=$songInfo['name']?></em>
                                    </div>
                                </div>
                                <p class="des s-fc4">歌手：
                                    <span title="Whiskey Priest">
                                        <a class="s-fc7" href=""><?=$songInfo['author']?></a>
                                    </span>
                                </p>
                                <div class="m-info">
                                    <div id="content-operation" class="btns f-cb" data-rid="<?=$songInfo['id']?>" data-type="18">
                                        <a data-res-action="play" data-res-id="<?=$songInfo['id']?>" data-res-type="18" href="javascript:;" class="u-btn2 u-btn2-2 u-btni-addply f-fl" hidefocus="true" title="播放">
                                            <i><em class="ply"></em>播放</i>
                                        </a>
                                        <a data-res-action="addto" data-res-id="<?=$songInfo['id']?>" data-res-type="18" href="javascript:;" class="u-btni u-btni-add" hidefocus="true" title="添加到播放列表"></a>
                                        <a data-res-id="<?=$songInfo['id']?>" id="collectBtn" data-res-type="18" data-count="-1" data-fee="0" data-payed="0" data-pl="320000" data-dl="320000" data-cp="1" data-res-action="fav" class="u-btni u-btni-fav " href="javascript:;">
                                            <i>收藏</i>
                                        </a>
                                        <a data-res-id="<?=$songInfo['id']?>" data-res-type="1" data-count="-1" data-res-action="share" data-res-pic="" class="u-btni u-btni-share " href="javascript:;">
                                            <i>分享</i>
                                        </a>
                                        <a data-res-id="<?=$songInfo['id']?>" data-res-type="18" data-res-action="download" class="u-btni u-btni-dl " href="javascript:;">
                                            <i>下载</i>
                                        </a>
                                        <a data-res-action="comment" href="javascript:;" class="u-btni u-btni-cmmt ">
                                            <i>评论</i>
                                        </a>
                                    </div>
                                </div>

                                <div id="lyric-content" class="bd bd-open f-brk f-ib" data-song-id="<?=$songInfo['id']?>" data-third-copy="false" copy-from="">
                                    <?php
                                        $lyrArr = \common\help\Lyric::parseLyric($songInfo['lyric']);
                                        if(!empty($lyrArr)){
                                            $i = 0;
                                            foreach($lyrArr as $key => $value){
                                                $i++;
                                                if($i == 13){
                                                    echo '<div id="flag_more" class="f-hide">';
                                                }
                                                echo $value.'<br>';

                                            }
                                            if($i >= 13){
                                    ?>
                                                </div>
                                                <div class="crl">
                                                    <a id="flag_ctrl" href="javascript:void(0)" class="s-fc7">
                                                        展开
                                                    </a>
                                                    <i class="u-icn u-icn-69"></i>
                                                </div>
                                    <?php


                                            }
                                        }
                                    ?>


                                </div>
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
                                <input type="hidden" name="sid" value="<?=$songInfo['id']?>" />
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
                    <span class="f-fl">喜欢这首歌的人</span>
                </h3>
                <ul class="m-piclist f-cb">
                    <li>
                        <a href="/user/home?id=94263452" class="f-tdn" title="DenebWish" data-res-id="94263452" data-res-type="1" data-res-action="log" data-res-data="recommendclick|0||song-user-recommend|2081274">
                            <img src="http://p3.music.126.net/YvkF33dXzqAKl48Z2MVwPw==/3275445146976056.jpg?param=40y40">
                        </a>
                    </li>
                    <li>
                        <a href="/user/home?id=16557771" class="f-tdn" title="最讨厌起名了" data-res-id="16557771" data-res-type="1" data-res-action="log" data-res-data="recommendclick|1||song-user-recommend|2081274">
                            <img src="http://p4.music.126.net/gGbIpjD-X5-us3-JvmvMlg==/6013229092656519.jpg?param=40y40">
                        </a>
                    </li>
                    <li>
                        <a href="/user/home?id=110648284" class="f-tdn" title="A大白菜" data-res-id="110648284" data-res-type="1" data-res-action="log" data-res-data="recommendclick|2||song-user-recommend|2081274">
                            <img src="http://p4.music.126.net/bTIoFKFaE1-JQpgN3OynGg==/1986817511391283.jpg?param=40y40">
                        </a>
                    </li>
                    <li>
                        <a href="/user/home?id=109421968" class="f-tdn" title="舟萌摩尔" data-res-id="109421968" data-res-type="1" data-res-action="log" data-res-data="recommendclick|3||song-user-recommend|2081274">
                            <img src="http://p3.music.126.net/3_TLeEdhTlMoUr8oTzsG7A==/528865123000372.jpg?param=40y40">
                        </a>
                    </li>
                </ul>
                <h3 class="u-hd3">
                    <span class="f-fl">包含这首歌的歌单</span>
                </h3>
                <ul class="m-rctlist f-cb">
                    <li>
                        <div class="cver u-cover u-cover-3">
                            <a href="/playlist?id=42453853" title="★【欧美】超爽节奏控★" data-res-id="42453853" data-res-type="13" data-res-action="log" data-res-data="recommendclick|0||song-playlist-recommend|2081274"><img src="http://p4.music.126.net/vTXg0CYMEo3xLAnuc6TDnQ==/7849413511119505.jpg?param=50y50">
                            </a>
                        </div>
                        <div class="info">
                            <p class="f-thide">
                                <a class="sname f-fs1 s-fc0" href="/playlist?id=42453853" title="★【欧美】超爽节奏控★" data-res-id="42453853" data-res-type="13" data-res-action="log" data-res-data="recommendclick|0||song-playlist-recommend|2081274">★【欧美】超爽节奏控★</a>
                            </p>
                            <p><span class="by s-fc4">by</span><a class="nm nm f-thide s-fc3" href="/user/home?id=18365139" title="果冻糖">果冻糖</a>
                                <sup class="u-icn u-icn-84"></sup>
                            </p></div>
                    </li>
                    <li>
                        <div class="cver u-cover u-cover-3">
                            <a href="/playlist?id=32261664" title="★【欧美】至尊经典合集★" data-res-id="32261664" data-res-type="13" data-res-action="log" data-res-data="recommendclick|1||song-playlist-recommend|2081274"><img src="http://p4.music.126.net/faOzEbRWl1oopcbvzx2BBg==/3233663700048274.jpg?param=50y50">
                            </a>
                        </div>
                        <div class="info">
                            <p class="f-thide">
                                <a class="sname f-fs1 s-fc0" href="/playlist?id=32261664" title="★【欧美】至尊经典合集★" data-res-id="32261664" data-res-type="13" data-res-action="log" data-res-data="recommendclick|1||song-playlist-recommend|2081274">★【欧美】至尊经典合集★</a>
                            </p>
                            <p><span class="by s-fc4">by</span><a class="nm nm f-thide s-fc3" href="/user/home?id=18365139" title="果冻糖">果冻糖</a>
                                <sup class="u-icn u-icn-84"></sup>
                            </p></div>
                    </li>
                    <li>
                        <div class="cver u-cover u-cover-3">
                            <a href="/playlist?id=50450306" title="欧美超爽节奏控" data-res-id="50450306" data-res-type="13" data-res-action="log" data-res-data="recommendclick|2||song-playlist-recommend|2081274"><img src="http://p4.music.126.net/nWkjTxUlVk1RR65BtWClmw==/7704277976243099.jpg?param=50y50">
                            </a>
                        </div>
                        <div class="info">
                            <p class="f-thide">
                                <a class="sname f-fs1 s-fc0" href="/playlist?id=50450306" title="欧美超爽节奏控" data-res-id="50450306" data-res-type="13" data-res-action="log" data-res-data="recommendclick|2||song-playlist-recommend|2081274">欧美超爽节奏控</a>
                            </p>
                            <p><span class="by s-fc4">by</span><a class="nm nm f-thide s-fc3" href="/user/home?id=30632372" title="钱茂昌">钱茂昌</a>
                            </p></div>
                    </li>
                </ul>



            </div>
        </div>
    </div>
    <a title="回到顶部" class="m-back" href="#" id="g_backtop" hidefocus="true">回到顶部</a>
<script>
    addSongInfoEvent();
</script>
</div>
