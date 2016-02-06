<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/29
 * Time: 20:22
 */
$user = Yii::$app -> user -> identity;
?>

<div class="container">
<link href="<?=Yii::$app -> homeUrl?>css/pt_my_index.css" type="text/css" rel="stylesheet" />
   <!-- <div id="g_nav" class="m-subnav m-subnav-up f-pr">
        <div class="shadow"></div>
    </div>-->
    <div id="g_mymusic" class="g-mymusic" >
        <div class="g-bd3 p-mymusic f-cb" style="min-height: 80px;">
            <?php require_once(__DIR__."/left_playlist.php");?>
            <div class="g-mn3 f-pr j-flag">
                <div class="f-pr">
                    <div class="j-flag" id="">
                        <div class="g-wrap">
                            <div class="m-info f-cb">
                                <div class="cover u-cover u-cover-dj">
                                    <img id="flag_cover" src="<?=\common\help\UrlHelp::getImgUrl($model['cover'])?>" />
                                </div>
                                <div class="cnt">
                                    <div class="cntc m-info">
                                        <div class="hd f-cb">
                                            <a href="<?=\yii\helpers\Url::to(['user/editplaylist', 'id'=>$id])?>" class="edit s-fc7 single">编辑</a>
                                            <h2 class="f-ff2 f-thide"><?=$model['name']?></h2>
                                        </div>
                                        <div class="user f-cb">
                                            <a class="face" href="">
                                                <img src="<?=\common\help\UrlHelp::getImgUrl( $user -> headimg)?>" />
                                            </a>
                      <span class="name f-thide">
                        <a href="/user/home?id=37889558" class="s-fc7" title="<?=$user -> username?>"><?=$user -> username?></a>
                      </span>
                                            <span class="time s-fc4"><?=substr($model['created'],0,10)?>创建</span>
                                        </div>
                                        <div class="btns f-cb">
                                            <a id="flag_play" href="javascript:;" class="u-btn2 u-btn2-2 u-btni-addply f-fl" hidefocus="true"
                                               title="播放" data-res-type="13" data-res-id="<?=$id?>" data-res-action="play">
                                                <i>播放</i>
                                            </a>
                                            <a id="flag_add" href="javascript:;" class="u-btni u-btni-add" hidefocus="true" title="添加到播放列表"
                                               data-res-type="13" data-res-id="<?=$id?>" data-res-action="addto"></a>
                                            <a href="javascript:void(0)" hidefocus="true" class="u-btni u-btni-fav u-btni-fav-dis2">
                                                <i>已收藏</i>
                                            </a>
                                            <a id="flag_share" data-res-id="<?=$id?>" data-res-type="13" data-res-action="share"
                                               data-res-pic="http://p3.music.126.net/SOnKukiZEBzme9KolQs3FQ==/859818092966144.jpg"
                                               class="u-btni u-btni-share" href="javascript:void(0)">
                                                <i>分享</i>
                                            </a>
                                            <a id="flag_dl" data-res-id="<?=$id?>" data-res-type="13" data-res-action="download"
                                               class="u-btni u-btni-dl" href="javascript:void(0)">
                                                <i>下载</i>
                                            </a>
                                            <a id="flag_comment" data-res-action="comment" href="javascript:;" class="u-btni u-btni-cmmt">
                                                <i>评论</i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="u-title u-title-1 f-cb">
                            <h3>
                                <span class="f-ff2">歌曲列表</span>
                            </h3>
              <span class="sub s-fc3">
              <span id="flag_trackCount">1</span>首歌</span>
                            <div class="more s-fc3">播放：
                                <strong id="flag_playCount" class="s-fc6">0</strong>次</div>
                        </div>
                    </div>
                    <?php
                        if(!empty($songList)){
                    ?>
                    <div class="j-flag">
                        <div id="auto-id-c9GlFibmgNc0Ft2J">
                            <div class="j-flag" id="auto-id-xJrQGnHZq62qEUCb">
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
                                    <!--    <th class="w4">
                                            <div class="wp">专辑</div>
                                        </th>-->
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <?php
                                            $i = 0;
                                            foreach($songList as $song){
                                                $i++;
                                    ?>
                                                <tr id="" class="even">
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
                                                        <span class="u-dur candel"><?=date('i:s', $duration)?></span>
                                                        <div class="opt hshow">
                                                            <a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表" hidefocus="true" data-res-type="18" data-res-id="<?=$song['id']?>" data-res-action="addto" data-res-from="13" data-res-data="42097082"></a>
                                                            <span data-res-id="<?=$song['id']?>" data-res-type="18" data-res-action="fav" class="icn icn-fav" title="收藏"></span>
                                                            <span data-res-id="<?=$song['id']?>" data-res-type="18" data-res-action="share" data-res-pic="http://p4.music.126.net/i-e5PQtKh_xHl8BkZ-q8hg==/610228953423220.jpg" class="icn icn-share" title="分享">分享</span>
                                                            <span data-res-id="<?=$song['id']?>" data-res-type="18" data-res-action="download" class="icn icn-dl" title="下载"></span>
                                                            <span data-res-id="<?=$song['id']?>" data-res-type="18" data-res-action="delete" class="icn icn-del" title="删除">删除</span>
                                                        </div>
                                                    </td>
                                                    <td class="">
                                                        <div class="text" title="Lovebugs">
                                                          <span title="Lovebugs">
                                                            <a class="" href="/artist?id=95442" hidefocus="true"><?=$song['author']?></a>
                                                          </span>
                                                        </div>
                                                    </td>
                                    <!--                <td class="">
                                                        <div class="text">
                                                            <a href="/album?id=419836" title="Naked">Naked</a>
                                                        </div>
                                                    </td>-->
                                                </tr>
                                    <?php
                                            }

                                    ?>


                                    </tbody>
                                </table>
                            </div>
                            <div class="j-flag"></div>
                        </div>
                    </div>
                    <?php
                        } else {
                    ?>
                    <!--无音乐-->
                    <div class="j-flag">
                        <div id="auto-id-85JGwsu7611MamZy">
                            <div class="j-flag" id="auto-id-XtMkqDl1txTUbK8l">
                                <div class="n-nmusic">
                                    <h3 class="f-ff2">暂无音乐！</h3>
                                    <p class="txt s-fc4">即可将你喜欢的音乐收藏到“我的音乐”&nbsp;&nbsp;&nbsp;&nbsp;马上去
                                        <a href="#" class="s-fc7">发现音乐</a></p>
                                </div>
                            </div>
                            <div class="j-flag"></div>
                        </div>
                    </div>

                    <?php
                        }
                    ?>

                    <div class="j-flag f-mgt40">
                        <div id="auto-id-5aEJBOu9etRDPolU">
                            <div class="u-title u-title-1">
                                <h3>
                                    <span class="f-ff2">评论</span>
                                </h3>
                <span class="sub s-fc3">共
                <span class="j-flag">0</span>条评论</span>
                            </div>
                            <div class="m-cmmt">
                                <div class="iptarea">
                                    <div class="head">
                                        <img src="http://p3.music.126.net/0pZwSIb90hSALWk6BGDF0g==/6637751697611512.jpg?param=50y50" />
                                    </div>
                                    <div class="j-flag">
                                        <div>
                                            <div class="m-cmmtipt f-cb f-pr">
                                                <div class="u-txtwrap holder-parent f-pr" style="display: block;">
                                                    <textarea class="u-txt area j-flag" placeholder="评论" id="auto-id-1rc2xp4qC2yedwzm"></textarea>
                                                </div>
                                                <div class="btns f-cb f-pr">
                                                    <i class="icn u-icn u-icn-36 j-flag" id="auto-id-fmeEs6ipvE1KtRgi"></i>
                                                    <i class="icn u-icn u-icn-41 j-flag" id="auto-id-GMUJ4sV2dFenRfHC"></i>
                                                    <a href="javascript:void(0)" class="btn u-btn u-btn-1 j-flag" id="auto-id-eUVE9SM4PHokH8oG">评论</a>
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
                                <div class="cmmts j-flag" id="auto-id-2CnSgaxMqANFfoWp"></div>
                                <div class="j-flag"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <a title="回到顶部" class="m-back" href="#" id="g_backtop" hidefocus="true" style="display: none;">回到顶部</a>

    <div id="shadow-box"
         style="word-wrap: break-word; width: 600px; border-width: 1px; border-style: solid; outline: rgb(51, 51, 51) none 0px; margin: 0px -20px 0px 0px; height: 50px; padding-left: 6px; padding-top: 5px; font-size: 12px; font-family: Arial, Helvetica, sans-serif; line-height: 19px; overflow: auto;"
         class="auto-1454070084178">
        <span>@</span>
    </div>
    <script>
        $(function(){
            addMySongEvent();
        });
    </script>
</div>

