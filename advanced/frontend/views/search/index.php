<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/14
 * Time: 14:46
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
                    <em class="s-fc6"><?=$total?></em> 首单曲
                </div>
                <ul class="m-tabs m-tabs-srch f-cb ztag" data-xname="" id="auto-id-vSPCS8n3c6G2bzPI" style="margin-bottom: auto;">
                    <li class="fst">
                        <a <?=(empty($type)||$type == 1)?'':'hidefocus="true"'?> data-type="1" href="<?=\yii\helpers\Url::to(['search/index', 'key' => $key, 'type' => 1])?>" class="<?=(empty($type)||$type == 1)?'z-slt':''?> single">
                            <em>歌名</em>
                        </a>
                    </li>
                    <li>
                        <a <?=(!empty($type)&&$type == 2)?'':'hidefocus="true"'?> data-type="2" href="<?=\yii\helpers\Url::to(['search/index', 'key' => $key, 'type' => 2])?>" class="<?=(!empty($type)&&$type == 2)?'z-slt':''?> single">
                            <em>歌手</em>
                        </a>
                    </li>
                    <li>
                        <a <?=(!empty($type)&&$type == 3)?'':'hidefocus="true"'?> data-type="3" href="<?=\yii\helpers\Url::to(['search/index', 'key' => $key, 'type' => 3])?>" class="<?=(!empty($type)&&$type == 3)?'z-slt':''?> single">
                            <em>歌词</em>
                        </a>
                    </li>
                </ul>
                <div class="ztag j-flag" id="auto-id-nCMtfCDTdqG0DLly">
                    <div class="n-srchrst">
                        <div class="srchsongst">
                            <?php
                                if(!empty($list)){
                                    foreach($list as $item){
                                        $source = $item['_source'];
                            ?>
                                        <div class="item f-cb h-flag">
                                            <div class="td">
                                                <div class="hd">
                                                    <a class="ply" title="播放" data-res-copyright="1" data-res-type="18"
                                                       data-res-id="<?=$item['_id']?>" data-res-action="play" data-res-from="32" data-res-data="<?=$key?>"></a>
                                                </div>
                                            </div>
                                            <div class="td w0">
                                                <div class="sn">
                                                    <div class="text">
                                                        <a href="<?=\yii\helpers\Url::to(['song/info', 'id' => $item['_id']])?>" class="single">
                                                            <b title=""><?=$source['name']?></b>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="td">
                                                <div class="opt hshow">
                                                    <a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表" hidefocus="true" data-res-copyright="1" data-res-type="1" data-res-id="<?=$item['_id']?>" data-res-action="addto" data-res-from="32" data-res-data="0"></a>
                                                    <span data-res-id="<?=$item['_id']?>" data-res-action="fav" data-res-type="1" class="icn icn-fav" title="收藏"></span>
                                                    <span data-res-id="<?=$item['_id']?>" data-res-action="share" data-res-type="1" class="icn icn-share" title="分享"></span>
                                                    <span data-res-id="<?=$item['_id']?>" data-res-action="download" data-res-type="1" class="icn icn-dl" title="下载"></span>
                                                </div>
                                            </div>
                                            <div class="td w1">
                                                <div class="text">
                                                    <a href="javascript:void(0);"><?=$source['author']?></a>
                                                </div>
                                            </div>
                                            <?php
                                            if($source['duration']>1000){
                                                $duration = $source['duration'] / 1000;
                                            }else{
                                                $duration = $source['duration'];
                                            }
                                            ?>
                                            <div class="td"><?=date('i:s', $duration)?></div>
                                        </div>
                            <?php
                                    }
                                }
                            ?>

                        </div>
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
        addSearchEvent();
    });
</script>
</div>
