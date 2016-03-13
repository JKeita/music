<?php
$list = $data['hits']['hits'];
?>
<div class="container">

    <div class="g-bd" id="m-disc-pl-c">
        <div class="g-wrap p-pl f-pr">
            <div class="u-title f-cb">
                <h3>
                    <span class="f-ff2 d-flag">全部</span>
                </h3>
<!--                <div class="u-btn f-fr u-btn-hot d-flag">
                    <a href="/discover/playlist/?order=hot" class="a1" data-order="hot">热门</a>
                    <a href="/discover/playlist/?order=new" class="a2" data-order="new">最新</a>
                </div>-->
            </div>
            <ul class="m-cvrlst f-cb" id="m-pl-container">
                <?php
                    if(!empty($list)){
                        foreach($list as $value){
                            $item = $value['_source'];
                            $creator = \common\models\User::findOne($item['uid']);
                ?>
                            <li>
                                <div class="u-cover u-cover-1">
                                    <img class="j-flag" src="<?=\common\help\UrlHelp::getImgUrl($item['cover'])?>" />
                                    <a title="<?=\yii\helpers\Html::encode($item['name'])?>" href="<?=\yii\helpers\Url::to(['playlist/info', 'id' => $item['id']])?>" class="msk single"></a>
                                    <div class="bottom">
                                        <a class="icon-play f-fr single" title="播放" href="javascript:;" data-res-type="13" data-res-id="<?=$item['id']?>"
                                                         data-res-action="play"></a>
                                        <span class="icon-headset"></span>
                                    </div>
                                </div>
                                <p class="dec">
                                    <a title="<?=\yii\helpers\Html::encode($item['name'])?>" href="<?=\yii\helpers\Url::to(['playlist/info', 'id' => $item['id']])?>"
                                       class="tit f-thide s-fc0 single"><?=\yii\helpers\Html::encode($item['name'])?></a>
                                </p>
                                <p>
                                    <span class="s-fc4">by</span>
                                    <a title="<?=\yii\helpers\Html::encode($creator -> username)?>" href="<?=\yii\helpers\Url::to(['user/home', 'id' => $creator -> id])?>"
                                       class="nm nm-icn f-thide s-fc3 single"><?=\yii\helpers\Html::encode($creator -> username)?></a></p>
                            </li>
                <?php
                        }
                    }
                ?>

            </ul>
            <div id="m-pl-pager">
                <div class="u-page">
                    <?=\common\help\LinkPager::widget(['pagination' => $page, 'firstPageLabel' => '首页', 'lastPageLabel' => '末页'])?>
                </div>
            </div>
        </div>
    </div>
    <a title="回到顶部" class="m-back" href="#" id="g_backtop" hidefocus="true" style="display: none;">回到顶部</a>
</div>
