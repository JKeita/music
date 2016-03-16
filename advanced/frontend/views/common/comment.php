<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/19
 * Time: 15:25
 */

use logic\CommentLogicImp;
?>

<?php
//设置片段缓冲依赖
$dependency = [
    'class' => 'yii\caching\DbDependency',
    'sql' => "SELECT MAX(id) FROM comment where psid={$id} and type={$type}",
];
if($this -> beginCache('comment_'.$id.'_'.$type, ['dependency' => $dependency, 'duration' => 36000])) {


    $commentLogic = new CommentLogicImp();
    $commentResult = $commentLogic->getPage(['psid' => $id, 'type' => $type]);
    $page = $commentResult['page'];
    $commentData = $commentResult['data'];
?>
    <!-- <?=date('Y-m-d H:i:s')?>-->
    <div class="n-cmt" id="comment-box" data-tid="R_SO_4_2081274" data-count="66">
        <div id="auto-id-koiqrc72GG4sfTyn">
            <div class="u-title u-title-1">
                <h3>
                    <span class="f-ff2">评论</span>
                </h3>
                <span class="sub s-fc3">共<span class="j-flag"><?= $page->totalCount ?></span>条评论</span>
            </div>
            <div class="m-cmmt">

                <div class="iptarea">
                    <div class="head">
                        <?php
                            $headimg = !empty(Yii::$app->user->identity->headimg) ? Yii::$app->user->identity->headimg : '';
                        ?>
                        <img src="<?= \common\help\UrlHelp::getImgUrl($headimg) ?>" />
                    </div>
                    <div class="j-flag">
                        <div>
                            <div class="m-cmmtipt f-cb f-pr">
                                <div class="u-txtwrap holder-parent f-pr" style="display: block;">
                                    <textarea class="u-txt area j-flag" placeholder="评论"></textarea>
                                </div>
                                <div class="btns f-cb f-pr">
                                    <!--                     <i class="icn u-icn u-icn-36 j-flag" id="auto-id-aTcpxvew6EnyUvao"></i>
                                                         <i class="icn u-icn u-icn-41 j-flag" id="auto-id-3dSMaW3TB4pnapTa"></i>-->
                                    <a href="javascript:void(0)" class="btn u-btn u-btn-1 j-flag" id="docomment">评论</a>
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
                <div class="cmmts j-flag" id="auto-id-3V0eaFlhDUFBRuMG">
                    <h3 class="u-hd4">最新评论</h3>
                    <?php
                    if (!empty($commentData)) {
                        foreach ($commentData as $item) {
                            $repler = \models\User::findOne($item['uid']);
                            ?>
                            <div class="itm" data-id="<?= $item['id'] ?>">
                                <div class="head">
                                    <a href="">
                                        <img src="<?= \common\help\UrlHelp::getImgUrl($repler->headimg) ?>">
                                    </a>
                                </div>
                                <div class="cntwrap">
                                    <div class="">
                                        <div class="cnt f-brk">
                                            <a href="/user/home?id=44816691"
                                               class="s-fc7"><?= \yii\helpers\Html::encode($repler->username) ?></a>：<?= \yii\helpers\Html::encode($item['content']) ?>
                                        </div>
                                    </div>
                                    <?php
                                    if (!empty($item['tid'])) {
                                        $tcomment = \models\Comment::findOne(['id' => $item['tid'], 'state' => 0]);
                                        if (!empty($tcomment)) {
                                            $trepler = \models\User::findOne($tcomment->uid);
                                            ?>
                                            <div class="que f-brk f-pr s-fc3">
                                                                <span class="darr">
                                                                  <i class="bd">◆</i>
                                                                  <i class="bg">◆</i>
                                                                </span>
                                                <a class="s-fc7"
                                                   href=""><?= \yii\helpers\Html::encode($trepler->username) ?></a>：<?= \yii\helpers\Html::encode($tcomment->content) ?>
                                            </div>
                                            <?php
                                        } else {
                                            ?>
                                            <div class="que f-brk f-pr s-fc3">
                                                                <span class="darr">
                                                                  <i class="bd">◆</i>
                                                                  <i class="bg">◆</i>
                                                                </span>
                                                该评论违规或已删除
                                            </div>
                                            <?php
                                        }
                                        ?>

                                        <?php
                                    }
                                    ?>
                                    <div class="rp">
                                        <div class="time s-fc4"><?= $item['ctime'] ?></div>
                                        <?php
                                        if (!empty($user) && $user->id == $item['uid']) {
                                            ?>
                                            <span class="dlt">
                                                <a href="javascript:void(0)" class="s-fc3" data-id="<?= $item['id'] ?>"
                                                   data-type="delete">删除</a>
                                                 <span class="sep">|</span>
                                            </span>
                                            <?php
                                        }
                                        ?>
                                        <a href="javascript:void(0)" class="s-fc3 a_report" data-id="<?= $item['id'] ?>"
                                           data-type="report">举报</a>
                                        <span class="sep">|</span>
                                        <a href="javascript:void(0)" class="s-fc3 a_reply" data-id="<?= $item['id'] ?>"
                                           data-type="reply">回复</a>
                                    </div>
                                </div>
                            </div>
                            <div id="reply_id_<?= $item['id'] ?>" class="reply_block" style="display:none">
                                <div>
                                    <div class="rept m-quk m-quk-1 f-pr">
                                        <div class="iner">
                                            <div class="corr u-arr u-arr-1">
                                                <em class="arrline">◆</em>
                                                <span class="arrclr">◆</span>
                                            </div>
                                            <div class="m-cmmtipt m-cmmtipt-1 f-cb f-pr">
                                                <div class="u-txtwrap holder-parent f-pr j-wrap"
                                                     style="display: block;">
                                                    <textarea class="u-txt area j-flag" placeholder=""
                                                              id="auto-id-1RoJZnXTCM2IJegH"
                                                              style="overflow: hidden; height: 20px;"></textarea>
                                                </div>
                                                <div class="btns f-cb f-pr">
                                                    <a href="javascript:void(0)"
                                                       class="btn u-btn u-btn-1 j-flag replybtn"
                                                       data-id="<?= $item['id'] ?>">回复</a>
                                                    <span class="zs s-fc4 j-flag">140</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <?php
                        }
                    }
                    ?>

                </div>

                <div class="j-flag auto-1453622546039-parent">
                    <?= \common\help\LinkPager::widget(['pagination' => $page]) ?>
                </div>
            </div>
        </div>
    </div>
<?php
    $this->endCache();
}
?>