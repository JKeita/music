<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/3/10
 * Time: 21:06
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
                    <em class="s-fc6"><?=$total?></em> 首歌曲
                </div>
                <?php include_once(__DIR__."/tab.php"); ?>
                <div class="ztag j-flag" id="auto-id-I9ZVHdPfBqKmui4z">
                    <div class="n-srchrst">
                        <div class="srchsongst">
                            <?php
                            if(!empty($list)) {
                                foreach ($list as $item) {
                                    $source = $item['_source'];
                                    ?>
                                    <div class="item f-cb h-flag">
                                        <div class="td">
                                            <div class="hd">
                                                <a class="ply" title="播放" data-res-copyright="1"
                                                   data-res-type="1" data-res-id="<?=$source['id']?>"
                                                   data-res-action="play"></a>
                                            </div>
                                        </div>
                                        <div class="td w0">
                                            <div class="sn">
                                                <div class="text">
                                                    <a href="<?=\yii\helpers\Url::to(['song/info', 'id' => $source['id']])?>" class="single">
                                                        <b title="<?=$source['name']?>"><?=$source['name']?></b>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="td">
                                            <div class="opt hshow">
                                                <a class="u-icn u-icn-81 icn-add" href="javascript:;" title="添加到播放列表"
                                                   hidefocus="true"
                                                   data-res-copyright="1" data-res-type="1" data-res-id="<?=$source['id']?>"
                                                   data-res-action="addto"></a>
                                            </div>
                                        </div>
                                        <div class="td w1">
                                            <div class="text">
                                                <a href="javascript:void(0);"><?=$source['author']?></a>
                                            </div>
                                        </div>
                                        <div class="td w2">
                                            <div class="text"></div>
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
                                    <div class="lyric">
                                        <div id="lrc_abstract<?=$source['id']?>" class="">
                                            <p>
                                                <?php
                                                $lyric = !empty($item['highlight']['lyric'][0])?$item['highlight']['lyric'][0]:$source['lyric'];
                                                $lyrArr = \common\help\Lyric::parseLyric($lyric);
                                                if(!empty($lyrArr)){
                                                    $i = 0;
                                                    foreach($lyrArr as $key => $value){
                                                        $i++;
                                                        if($i == 5){
                                                            break;
                                                        }
                                                        echo $value.'<br>';

                                                    }
                                                }
                                                ?>
                                            </p>
                                        </div>
                                        <div id="lrc_all<?=$source['id']?>" class="f-hide">
                                            <p>
                                            <?php
                                                if(!empty($lyrArr)){
                                                    foreach($lyrArr as $key => $value){
                                                        echo $value.'<br>';
                                                    }
                                                }
                                                ?>
                                            </p>
                                        </div>
                                        <div class="crl">
                                            <a data-res-id="<?=$source['id']?>" data-res-action="open"
                                               href="javascript:void(0)"
                                               class="s-fc3">展开
                                            </a>
                                            <i class="u-icn u-icn-69"></i>
                                        </div>
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
            //addSearchEvent();
        });
    </script>
</div>