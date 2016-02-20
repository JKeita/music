<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/20
 * Time: 15:28
 */
use yii\helpers\Url;
?>
<div class="main-content">
    <div class="breadcrumbs" id="breadcrumbs">
        <script type="text/javascript">
            try{ace.settings.check('breadcrumbs' , 'fixed')}catch(e){}
        </script>

        <ul class="breadcrumb">
            <li>
                <i class="icon-home home-icon"></i>
                <a href="<?=Url::to(['site/index'])?>" class="single">首页</a>
            </li>
            <li class="active">评论审核</li>
        </ul><!-- .breadcrumb -->
    </div>

    <div class="page-content">
        <div class="page-header">

        </div>

        <div class="row">
            <div class="col-xs-12">
                <!-- PAGE CONTENT BEGINS -->

                <div class="row">
                    <div class="col-xs-12">
                        <div class="table-responsive">
                            <table id="sample-table-1" class="table table-striped table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th class="center">
                                        <label>
                                            <input type="checkbox" class="ace">
                                            <span class="lbl"></span>
                                        </label>
                                    </th>
                                    <th>评论ID</th>
                                    <th>评论内容</th>
                                    <th>状态</th>
                                    <th>举报理由</th>
                                    <th>操作</th>
                                </tr>
                                </thead>

                                <tbody>
                                <?php
                                if(!empty($data)){
                                    foreach($data as $item){
                                        ?>
                                        <tr>
                                            <td class="center">
                                                <label>
                                                    <?php
                                                        if($item['state'] == 0){
                                                    ?>
                                                            <input type="checkbox" name="ids" class="ace" value="<?=$item['rid']?>">
                                                            <span class="lbl"></span>
                                                    <?php
                                                        }
                                                    ?>

                                                </label>
                                            </td>

                                            <td>
                                                <?=$item['cid']?>
                                            </td>
                                            <td><?=$item['content']?></td>
                                            <?php
                                                if($item['state'] == 0){
                                                    $state='未审核';
                                                }else if($item['state'] == 1){
                                                    $state = '违规';
                                                }else if($item['state'] == 2){
                                                    $state = '通过';
                                                }
                                            ?>
                                            <td class="hidden-480"><?=$state?></td>
                                            <td><?=$item['reason']?></td>

                                            <td>
                                                <div class="visible-md visible-lg hidden-sm hidden-xs btn-group">
                                                  <button class="btn btn-xs btn-success okBtn" data-id="<?=$item['rid']?>">
                                                      <i class="icon-ok bigger-120"></i>
                                                  </button>


                                                    <button class="btn btn-xs btn-danger errorBtn" data-id="<?=$item['rid']?>">
                                                        <i class="icon-trash bigger-120"></i>
                                                    </button>

                                                </div>
                                            </td>
                                        </tr>
                                        <?php
                                    }
                                }
                                ?>

                                </tbody>
                            </table>
                            <div class="piece">
                                <button class="btn btn-info" type="button" id="okBtn">
                                    批量通过
                                </button>
                                <button class="btn btn-info" type="button" id="errorBtn">
                                    批量违规
                                </button>
                            </div>
                            <?= \yii\widgets\LinkPager::widget(['pagination' => $page]) ?>
                        </div><!-- /.table-responsive -->
                    </div><!-- /span -->
                </div><!-- /row -->

            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.page-content -->
    <script>
        $(function(){
            addReportListEvent();
        });
    </script>
</div>
