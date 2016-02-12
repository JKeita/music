<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/30
 * Time: 20:29
 */
$playListLogic = new \logic\PlayListLogicImp();
$uid = Yii::$app -> getUser() -> getId();
$playList = $playListLogic -> getUserPlayListByUid($uid);
$collectList = $playListLogic -> getUserCollectListByUid($uid);
?>
<div class="g-sd3 u-scroll n-musicsd f-pr j-flag" >
    <div>
        <div class="n-minelst n-minelst-1">
            <h2 class="f-ff1">
                <a hidefocus="true" href="javascript:void(0);" class="u-btn u-btn-crt f-fr j-flag" id="auto-id-wM05WHrGGAebXix7">
                    <i class="createPlayList">新建</i>
                </a>
            <span class="rtitle" id="auto-id-ggT4hzXUd3UIN6s4">创建的歌单(
            <span class="j-flag">4</span>)</span></h2>
            <ul class="j-flag f-cb">
                <?php
                if(!empty($playList)){
                    foreach($playList as $item){
                        ?>
                        <li class="j-iflag <?=$id==$item['id']?'z-selected':''?> single" href="<?=\yii\helpers\Url::to(['user/mysong', 'id' => $item['id']])?>">
                                <div class="item f-cb">
                                    <div class="left">
                                        <a hidefocus="true" class="avatar">
                                            <img src="<?=\common\help\UrlHelp::getImgUrl($item['cover'])?>" alt="" />
                                        </a>
                                    </div>
                                    <p class="name f-thide">
                                        <a hidefocus="true" href="javascript:void(0);" class="s-fc0" title="<?=$item['name']?>"><?=$item['name']?></a>
                                    </p>
                                    <!--<p class="s-fc4 f-thide num">1首</p>-->
                                </div>
                                <span class="oper hshow" style="display: none;">
                                  <a hidefocus="true" title="编辑" href="<?=\yii\helpers\Url::to(['user/editplaylist', 'id' => $item['id']])?>" class="u-icn u-icn-10 single"></a>
                                  <a data-action="delete" hidefocus="true" title="删除" href="javascript:void(0);" class="u-icn u-icn-11 delPlayList" data-id="<?=$item['id']?>"></a>
                                </span>
                        </li>

                        <?php
                    }
                }
                ?>
            </ul>
        </div>
        <div class="n-minelst n-minelst-1">
            <h2 class="f-ff1">
              <span class="rtitle" id="auto-id-LvNiUVHccKiQCfTr">收藏的歌单
              <span class="j-flag"></span></span>
            </h2>
            <ul class="f-cb j-flag">
                <?php
                    if(!empty($collectList)){
                        foreach($collectList as $item){
                ?>
                            <li class="j-iflag <?=$id==$item['id']?'z-selected':''?> single"  href="<?=\yii\helpers\Url::to(['user/mysong', 'id' => $item['id']])?>">
                                <div class="item f-cb">
                                    <div class="left">
                                        <a hidefocus="true" class="avatar">
                                            <img src="<?=\common\help\UrlHelp::getImgUrl($item['cover'])?>" alt="" />
                                        </a>
                                    </div>
                                    <p class="name f-thide">
                                        <a hidefocus="true" href="javascript:void(0);" class="s-fc0" title="<?=$item['name']?>"><?=$item['name']?></a>
                                    </p>
                                    <p class="s-fc4 f-thide num"></p>
                                </div>
                <span class="oper hshow" style="display:none;">
                  <a data-action="delete" hidefocus="true" title="删除" href="javascript:void(0);" class="u-icn u-icn-11 delCollect" data-id="<?=$item['id']?>"></a>
                </span>
                            </li>
                <?php
                        }
                    }
                ?>
            </ul>
        </div>
        <div style="height:200px;"></div>
        <script>
            $(function(){
                leftPlayListEvent();
            });
        </script>
    </div>
</div>
