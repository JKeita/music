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
?>
<div class="g-sd3 u-scroll n-musicsd f-pr j-flag" >
    <div>
        <div class="n-minelst n-minelst-1">
            <h2 class="f-ff1">
                <a hidefocus="true" href="javascript:void(0);" class="u-btn u-btn-crt f-fr j-flag" id="auto-id-wM05WHrGGAebXix7">
                    <i>新建</i>
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
                                  <a data-action="delete" hidefocus="true" title="删除" href="javascript:void(0);" class="u-icn u-icn-11"></a>
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
              <span class="rtitle" id="auto-id-LvNiUVHccKiQCfTr">收藏的歌单(
              <span class="j-flag">37</span>)</span>
            </h2>
            <ul class="f-cb j-flag">
                <li class="j-iflag" id="auto-id-ZmgolkVOFEQWm1p2" data-matcher="playlist-83273991">
                    <div class="item f-cb">
                        <div class="left">
                            <a hidefocus="true" class="avatar">
                                <img src="http://p4.music.126.net/dPhMpbA89B9edfEr7KK9XQ==/1364493974444295.jpg?param=40y40" alt="" />
                            </a>
                        </div>
                        <p class="name f-thide">
                            <a hidefocus="true" href="javascript:void(0);" class="s-fc0"
                               title="【日系/治愈】感谢你的拥抱hލ化我受冷的心">【日系/治愈】感谢你的拥抱hލ化我受冷的心</a>
                        </p>
                        <p class="s-fc4 f-thide num">49首by 小e酱紫</p>
                    </div>
                <span class="oper hshow" style="display:none;">
                  <a data-action="delete" hidefocus="true" title="删除" href="javascript:void(0);" class="u-icn u-icn-11"></a>
                </span>
                </li>
                <li class="j-iflag" id="auto-id-NeCqg7LxStoW2OQk" data-matcher="playlist-134736767">
                    <div class="item f-cb">
                        <div class="left">
                            <a hidefocus="true" class="avatar">
                                <img src="http://p4.music.126.net/G1wvqt1NmAofbu5yT93PIg==/3276544656520001.jpg?param=40y40" alt="" />
                            </a>
                        </div>
                        <p class="name f-thide">
                            <a hidefocus="true" href="javascript:void(0);" class="s-fc0"
                               title="AcFun音乐投票新趋周榜［151212期］">AcFun音乐投票新趋周榜［151212期］</a>
                        </p>
                        <p class="s-fc4 f-thide num">79首by mrp_aka_zmyore</p>
                    </div>
                <span class="oper hshow" style="display:none;">
                  <a data-action="delete" hidefocus="true" title="删除" href="javascript:void(0);" class="u-icn u-icn-11"></a>
                </span>
                </li>
            </ul>
        </div>
        <div style="height:100px;"></div>
    </div>
</div>
