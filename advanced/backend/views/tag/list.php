<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/3/1
 * Time: 20:39
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
            <li class="active">标签管理</li>
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
                                    <th>标签ID</th>
                                    <th>标签名称</th>
                                    <th>操作</th>
                                </tr>
                                </thead>

                                <tbody>
                                <?php
                                if(!empty($data)){
                                    foreach($data as $item){
                                        ?>
                                        <tr>

                                            <td>
                                                <?=$item['id']?>
                                            </td>
                                            <td><?=$item['name']?></td>

                                            <td>
                                                <div class="visible-md visible-lg hidden-sm hidden-xs btn-group">
                                                    <button class="btn btn-xs btn-info edit-btn" data-id="<?=$item['id']?>" data-name="<?=$item['name']?>">
                                                        <i class="icon-edit bigger-120"></i>
                                                    </button>


                                                    <button class="btn btn-xs btn-danger del-btn" data-id="<?=$item['id']?>">
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
                                <button class="btn add-btn">
                                    <i class="icon-pencil align-top bigger-125"></i>
                                    新建
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
            addTagListEvent();
        });
    </script>
</div>