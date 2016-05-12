<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/3/8
 * Time: 19:49
 */
$list = $data['hits']['hits'];
$total = $data['hits']['total'];
?>
<div class="container">
    <link href="<?=Yii::$app -> homeUrl?>css/pt_search_index.css" type="text/css" rel="stylesheet" />
    <div class="g-bd">
        <div class="g-wrap n-srch">
            <div class="pgsrch f-pr j-suggest" id="auto-id-O7u2aU4A7ePwniwJ">
                <input id="search_key" type="text" class="srch j-flag" value="<?=$key?>" />
                <input id="search_type" type="hidden" value="<?=$type?>" />
                <span class="j-flag" id="auto-id-gZQoXnPRNe5O0KEg"></span>
                <a hidefocus="true" href="<?=\yii\helpers\Url::to(['search/index', 'key' => '_k_', 'type' => $type])?>" class="btn j-flag" title="搜索" id="searchBtn">搜索</a>
                <div class="u-lstlay j-flag" style="display:none;" id="auto-id-twoQpWBXqMiZ29zG"></div></div>
            <div id="m-search">
                <div class="snote s-fc4 ztag">搜索“<?=$key?>”，找到
                    <em class="s-fc6"><?=$total?></em> 张歌单
                </div>
                <?php include_once(__DIR__."/tab.php"); ?>
                <div class="ztag j-flag" id="auto-id-m5FSsImNUxmmPFU1">
                    <div class="n-srchrst ztag"><table cellspacing="0" cellpadding="0" class="m-table m-table-2 m-table-2-cover">
                            <tbody>
                            <?php
                                if(!empty($list)) {
                                    foreach ($list as $item) {
                                        $source = $item['_source'];
                            ?>
                                        <tr class="h-flag">
                                            <td class="first w0">
                                                <div class="hd">
                                                <span class="ply " title="播放" data-res-type="2" data-res-id="<?=$source['id']?>"
                                                      data-res-action="play"></span>
                                                </div>
                                            </td>
                                            <td class="w7">
                                                <div class="u-cover u-cover-3">
                                                    <a href="<?=\yii\helpers\Url::to(['playlist/info', 'id' => $source['id']])?>" class="single">
                                                        <img
                                                            src="<?=\common\help\UrlHelp::getImgUrl($source['cover'])?>">
                                                        <span title="<?=\yii\helpers\Html::encode($source['name'])?>" class="msk"></span>
                                                    </a>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="f-cb">
                                                    <div class="opt hshow" style="display:none">
                                                        <a class="u-icn u-icn-81" href="javascript:;" title="添加到播放列表"
                                                           hidefocus="true" data-res-type="2" data-res-id="<?=$source['id']?>"
                                                           data-res-action="addto"></a>
                                                    <span data-res-id="<?=$source['id']?>" data-res-action="fav" data-res-type="2"
                                                          class="icn icn-fav " title="收藏">收藏</span>
                                                    <span data-res-id="<?=$source['id']?>" data-res-action="share"
                                                          class="icn icn-share" data-res-type="2" title="分享">分享</span>
                                                    </div>
                                                    <div class="tt">
                                                        <div class="ttc">
                                                            <span class="txt">
                                                                <a href="<?=\yii\helpers\Url::to(['playlist/info', 'id' => $source['id']])?>" title="<?=$source['name']?>" class="single">
                                                                    <?=!empty($item['highlight']['name'][0])?$item['highlight']['name'][0]:$source['name']?>
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="w11 s-fc4"><!--38首--></td>
                                            <?php
                                                $creator = \models\User::findOne($source['uid']);
                                            ?>
                                            <td class="w4">
                                                <div class="text">
                                                    <span class="s-fc3">by</span>&nbsp;&nbsp;
                                                    <a class="s-fc3 single" href="<?=\yii\helpers\Url::to(['user/home', 'id' => $source['uid']])?>"
                                                       title="<?=\yii\helpers\Html::encode($creator['username'])?>"><?=\yii\helpers\Html::encode($creator['username'])?></a>
                                                </div>
                                            </td>
                                            <td class="w6 s-fc4">收藏：<span><?=$source['collectnum']?></span>
                                            </td>
                                            <td class="last w6 s-fc4">分享：
                                                <span><?=$source['sharenum']?></span>
                                            </td>
                                        </tr>
                            <?php
                                    }
                                }
                            ?>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="ztag j-flag auto-1455434152562-parent">
                    <?=\common\help\LinkPager::widget(['pagination' => $page])?>
                </div>
                <div class="j-flag"></div>
            </div>
        </div>
    </div>
    <a title="回到顶部" class="m-back" href="#" id="g_backtop" hidefocus="true">回到顶部</a>
    <script>
        $(function(){
            //addSearchEvent();
        });
    </script>
</div>