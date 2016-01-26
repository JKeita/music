<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/26
 * Time: 21:09
 */
?>
<?php
    if(!empty($idArr)){
        $songLogic = new \logic\SongLogicImp();
        foreach($idArr as $id){
                $result = $songLogic -> getSongById($id);
                if($result['code'] == 1){
                    $data = $result['data'];
                    ?>
                    <li data-id="<?=$id?>" data-action="play">
                        <div class="col col-1">
                            <div class="playicn"></div>
                        </div>
                        <div class="col col-2"><?=$data['name']?></div>
                        <div class="col col-3">
                            <div class="icns">
                                <i class="ico icn-del" title="删除" data-id="<?=$id?>" data-action="delete">删除</i>
                                <i class="ico ico-dl" title="下载" data-id="<?=$id?>" data-action="download">下载</i>
                                <i class="ico ico-share" title="分享" data-id="<?=$id?>" data-action="share">分享</i>
                                <i class="j-t ico ico-add" title="收藏" data-id="<?=$id?>" data-action="like">收藏</i>
                            </div>
                        </div>
                        <div class="col col-4">
                                <span title="<?=$data['author']?>">
                                  <a class="" href="javascript:void(0)" hidefocus="true"><?=$data['author']?></a>
                                </span>
                        </div>
                        <?php
                            $duration = $data['duration']/1000;
                            $min = floor($duration / 60);
                            $cer = floor($duration % 60);
                            if($min < 10){
                                $min = '0'.$min;
                            }
                            if($cer < 10){
                                $cer = '0'.$cer;
                            }
                            $timeStr = $min.':'.$cer;
                        ?>
                        <div class="col col-5"><?=$timeStr?></div>
                        <div class="col col-6">
                            <a href="javascript:void(0)" class="ico ico-src" title="来自听歌排行榜"
                               data-action="link">来源</a>
                        </div>
                    </li>
                    <?php
                }
            ?>

<?php
        }
    }
?>
