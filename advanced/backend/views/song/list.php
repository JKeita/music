<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/18
 * Time: 15:27
 */
use yii\helpers\Url;
$list = $data['hits']['hits'];
$total = $data['hits']['total'];
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
            <li class="active">音乐管理</li>
        </ul><!-- .breadcrumb -->
    </div>

    <div class="page-content">
        <div class="page-header">
        <form class="form-search">
            <div class="row">
                <div class="col-xs-12 col-sm-8">
                    <div class="input-group">
                            <input type="text" id="search_key" class="form-control search-query" placeholder="输入关键字" value="<?=!empty($key)?$key:''?>">
                            <span class="input-group-btn">
                                <a id="searchBtn" class="btn btn-purple btn-sm" href="<?=\yii\helpers\Url::to(['song/list', 'key' => '_k_', 'type' => 'mult'])?>">
                                    Search
                                    <i class="icon-search icon-on-right bigger-110"></i>
                                </a>
                            </span>
                    </div>
                </div>
            </div>
        </form>
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
                                    <th>ID</th>
                                    <th>歌曲名</th>
                                    <th>歌手名</th>
                                    <th>操作</th>
                                </tr>
                                </thead>

                                <tbody>
                                <?php
                                    if(!empty($list)){
                                        foreach($list as $item){
                                            $source = $item['_source'];
                                ?>
                                            <tr>
                                                <td class="center">
                                                    <label>
                                                        <input type="checkbox" name="ids" class="ace" value="<?=$source['id']?>">
                                                        <span class="lbl"></span>
                                                    </label>
                                                </td>

                                                <td>
                                                    <a href="<?='http://f.music.com'.Url::to(['song/info', 'id' => $item['_id']])?>" target="_blank"><?=$item['_id']?></a>
                                                </td>
                                                <td><?=$source['name']?></td>
                                                <td class="hidden-480"><?=$source['author']?></td>


                                                <td>
                                                    <div class="visible-md visible-lg hidden-sm hidden-xs btn-group">
                                                        <!--  <button class="btn btn-xs btn-success">
                                                              <i class="icon-ok bigger-120"></i>
                                                          </button>-->

                                                        <a class="btn btn-xs btn-info single" href="<?=Url::to(['song/edit', 'id' => $source['id']])?>">
                                                            <i class="icon-edit bigger-120"></i>
                                                        </a>

                                                        <a class="btn btn-xs btn-danger delete" data-id="<?=$source['id']?>">
                                                            <i class="icon-trash bigger-120"></i>
                                                        </a>

                                                        <!--    <button class="btn btn-xs btn-warning">
                                                                <i class="icon-flag bigger-120"></i>
                                                            </button>-->
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
                                <button class="btn btn-info" type="button" id="deleteBtn">
                                    批量删除
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
            addSongListEvent();
        });
    </script>
</div>
