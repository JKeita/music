<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/3/9
 * Time: 19:43
 */
$list = $data['hits']['hits'];
$total = $data['hits']['total'];
$curUser = Yii::$app -> getUser();
$followLogic = new \logic\FollowLogicImp();
$playListLogic = new \logic\PlayListLogicImp();
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
                    <em class="s-fc6"><?=$total?></em> 位用户
                </div>
                <?php include_once(__DIR__."/tab.php"); ?>
                <div class="ztag j-flag" id="auto-id-kPkVtK6Gh9yi1OeB">
                    <div class="n-srchrst ztag">
                        <table cellspacing="0" cellpadding="0" class="m-table m-table-2 m-table-2-cover">
                            <tbody>
                            <?php
                            if(!empty($list)) {
                                foreach ($list as $item) {
                                    $source = $item['_source'];
                            ?>
                                    <tr class="h-flag">
                                        <td class="first w7">
                                            <div class="u-cover u-cover-3">
                                                <a href="<?=\yii\helpers\Url::to(['user/home', 'id' => $source['id']])?>" class="single">
                                                    <img
                                                        src="<?=\common\help\UrlHelp::getImgUrl($source['headimg'])?>"/>
                                                </a>
                                            </div>
                                        </td>
                                        <td class="">
                                            <div class="ttc">
                                                <a href="<?=\yii\helpers\Url::to(['user/home', 'id' => $source['id']])?>" title="<?=\yii\helpers\Html::encode($source['username'])?>" class="txt f-fs1 single">   <?=!empty($item['highlight']['username'][0])?$item['highlight']['username'][0]:$source['username']?></a>
                                            </div>
                                            <div class="dec s-fc4 f-thide"
                                                 title="<?=\yii\helpers\Html::encode($source['profile'])?>">
                                                <?=\yii\helpers\Html::encode($source['profile'])?>
                                            </div>
                                        </td>
                                        <td class="w9">
                                            <?php
                                            if(!empty($curUser -> id)&&$curUser -> id != $source['id']){
                                                if($followLogic -> isFollow($curUser -> id, $source['id'])){
                                                    ?>
                                                    <a class="u-btn u-btn-4 f-tdn" href="javascript:void(0)"><i>已关注</i></a>
                                                    <?php
                                                }else{
                                                    ?>
                                                    <a data-res-id="<?=$source['id']?>" data-res-action="follow"
                                                       class="u-btn u-btn-3 f-tdn"
                                                       href="javascript:void(0)">
                                                        <i>关注</i>
                                                    </a>
                                                    <?php
                                                }
                                            }else{
                                                ?>
                                                <a data-res-id="<?=$source['id']?>" data-res-action="follow"
                                                   class="u-btn u-btn-3 f-tdn"
                                                   href="javascript:void(0)">
                                                    <i>关注</i>
                                                </a>
                                                <?php
                                            }
                                            ?>
                                        </td>
                                        <td class="w9 s-fc4">歌单：<?=$playListLogic -> getUserPlayListNum($source['id'])?></td>
                                        <td class="last w9 s-fc4">粉丝：
                                            <span id="follow_num_6790397"><?=$followLogic -> getFansNum($source['id'])?></span>
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