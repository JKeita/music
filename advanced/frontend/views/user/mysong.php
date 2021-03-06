<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/29
 * Time: 20:22
 */
$user = Yii::$app -> user -> identity;
if(!empty($model)){
    $creator = \models\User::findOne($model['uid']);
    $flag = $user -> id == $creator -> id;
}
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
                            <div class="j-flag">
                                <?php
                                    if(!empty($model)){
                                ?>
                                        <div class="g-wrap">
                                            <div class="m-info f-cb">
                                                <div class="cover u-cover u-cover-dj">
                                                    <img id="flag_cover" src="<?=\common\help\UrlHelp::getImgUrl($model['cover'])?>?param=200y200" />
                                                </div>
                                                <div class="cnt">
                                                    <div class="cntc m-info">
                                                        <div class="hd f-cb">
                                                            <?php
                                                            if($flag){
                                                                ?>
                                                                <a href="<?=\yii\helpers\Url::to(['user/editplaylist', 'id'=>$id])?>" class="edit s-fc7 single">编辑</a>
                                                                <?php
                                                            }
                                                            ?>

                                                            <h2 class="f-ff2 f-thide"><?=$model['name']?></h2>
                                                        </div>
                                                        <div class="user f-cb">
                                                            <a class="face single" href="<?=\yii\helpers\Url::to(['user/home', 'id' => $creator -> id])?>">
                                                                <img src="<?=\common\help\UrlHelp::getImgUrl( $creator -> headimg)?>" />
                                                            </a>
                      <span class="name f-thide">
                        <a href="<?=\yii\helpers\Url::to(['user/home', 'id' => $creator -> id])?>" class="s-fc7 single" title="<?=$creator -> username?>"><?=$creator -> username?></a>
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
                                                            <a id="flag_share" data-res-id="<?=$id?>" data-res-type="2" data-res-action="share"
                                                               data-res-pic="http://p3.music.126.net/SOnKukiZEBzme9KolQs3FQ==/859818092966144.jpg"
                                                               class="u-btni u-btni-share" href="javascript:void(0)">
                                                                <i>分享</i>
                                                            </a>
                                                            <!--                 <a id="flag_dl" data-res-id="<?/*=$id*/?>" data-res-type="13" data-res-action="download"
                                               class="u-btni u-btni-dl" href="javascript:void(0)">
                                                <i>下载</i>
                                            </a>-->
                                                            <a id="flag_comment" data-res-action="comment" href="javascript:;" class="u-btni u-btni-cmmt">
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

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                <?php
                                    } else {
                                ?>
                                        <div class="n-nmusic">
                                            <h3 class="f-ff2">暂无音乐！</h3>
                                            <p class="txt s-fc4">即可将你喜欢的音乐收藏到“我的音乐”&nbsp;&nbsp;&nbsp;&nbsp;马上去
                                                <a href="/" class="s-fc7 single">发现音乐</a>
                                            </p>
                                        </div>
                                <?php
                                    }
                                ?>


                            </div>
                            <?php
                                if(!empty($model)){
                            ?>
                                    <?php
                                    $dependency = [
                                        'class' => 'yii\caching\DbDependency',
                                        'sql' => "SELECT COUNT(sid) FROM song_collect where pid={$id}",
                                    ];
                                    if($this -> beginCache('MySongList_'.$id, ['dependency' => $dependency, 'duration' => 36000])) {
                                        $playListLogic = new \logic\PlayListLogicImp();
                                        $songList = $playListLogic->getPlayListSongById($id);
                                        ?>
                                        <!-- <?=date('Y-m-d H:i:s')?>-->
                                        <div class="u-title u-title-1 f-cb">
                                            <h3>
                                                <span class="f-ff2">歌曲列表</span>
                                            </h3>
                                            <span class="sub s-fc3"><span id="flag_trackCount"><?= count($songList) ?></span>首歌</span>
                                        </div>
                                        <?php
                                        if (!empty($songList)) {
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
                                                            foreach ($songList as $song) {
                                                                $i++;
                                                                ?>
                                                                <tr id="" class="even">
                                                                    <td class="left">
                                                                        <div class="hd">
                                                                        <span data-res-id="<?= $song['id'] ?>"
                                                                              data-res-type="18" data-res-action="play"
                                                                              data-res-from="13" data-res-data=""
                                                                              class="ply"></span>
                                                                            <span class="num"><?= $i ?></span>
                                                                        </div>
                                                                    </td>
                                                                    <td class="">
                                                                        <div class="f-cb">
                                                                            <div class="tt">
                                                                                <div class="ttc">
                                                                      <span class="txt">
                                                                        <a href="<?= \yii\helpers\Url::to(['song/info', 'id' => $song['id']]) ?>" class="single">
                                                                            <b title="<?= $song['name'] ?>"><?= $song['name'] ?></b>
                                                                        </a>
                                                                      </span>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td class=" s-fc3">
                                                                        <?php
                                                                        if ($song['duration'] > 1000) {
                                                                            $duration = $song['duration'] / 1000;
                                                                        } else {
                                                                            $duration = $song['duration'];
                                                                        }
                                                                        ?>
                                                                        <span
                                                                            class="u-dur candel"><?= date('i:s', $duration) ?></span>
                                                                        <div class="opt hshow">
                                                                            <a class="u-icn u-icn-81 icn-add"
                                                                               href="javascript:;" title="添加到播放列表"
                                                                               hidefocus="true" data-res-type="18"
                                                                               data-res-id="<?= $song['id'] ?>"
                                                                               data-res-action="addto" data-res-from="13"
                                                                               data-res-data="42097082"></a>
                                                                        <span data-res-id="<?= $song['id'] ?>"
                                                                              data-res-type="1" data-res-action="fav"
                                                                              class="icn icn-fav" title="收藏"></span>
                                                                        <span data-res-id="<?= $song['id'] ?>"
                                                                              data-res-type="1" data-res-action="share"
                                                                              data-res-pic="http://p4.music.126.net/i-e5PQtKh_xHl8BkZ-q8hg==/610228953423220.jpg"
                                                                              class="icn icn-share" title="分享">分享</span>
                                                                            <a data-res-id="<?= $song['id'] ?>"
                                                                               data-res-type="1" data-res-action="download"
                                                                               class="icn icn-dl" title="下载" target="_blank"
                                                                               href="<?= \yii\helpers\Url::to(['song/down', 'id' => $song['id']]) ?>"></a>
                                                                            <?php
                                                                            if ($flag) {
                                                                                ?>
                                                                                <span data-res-id="<?= $song['id'] ?>"
                                                                                      data-res-type="18"
                                                                                      data-res-action="delete"
                                                                                      class="icn icn-del" title="删除">删除</span>
                                                                                <?php
                                                                            }
                                                                            ?>
                                                                        </div>
                                                                    </td>
                                                                    <td class="">
                                                                        <div class="text" title="<?= $song['author'] ?>">
                                                              <span title="<?= $song['author'] ?>">
                                                                <a class="" href="/artist?id=95442"
                                                                   hidefocus="true"><?= $song['author'] ?></a>
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
                                                <div>
                                                    <div class="j-flag">
                                                        <div class="n-nmusic">
                                                            <h3 class="f-ff2">暂无音乐！</h3>
                                                            <p class="txt s-fc4">即可将你喜欢的音乐收藏到“我的音乐”&nbsp;&nbsp;&nbsp;&nbsp;马上去
                                                                <a href="/" class="s-fc7 single">发现音乐</a></p>
                                                        </div>
                                                    </div>
                                                    <div class="j-flag"></div>
                                                </div>
                                            </div>

                                            <?php
                                        }
                                        ?>
                                        <?php
                                        $this->endCache();
                                    }
                                    ?>
                                    <input type="hidden" name="pid" value="<?=$id?>" />
                                    <?php require_once(__DIR__.'/../common/comment.php')?>
                            <?php
                                }
                            ?>
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
//            addMySongEvent();
        });
    </script>
</div>

