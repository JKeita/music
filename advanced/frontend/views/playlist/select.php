<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/27
 * Time: 21:25
 */
?>
<div class="select mt-20" id="play_list_select">
    <select name="select" class="icon-select">
        <?php
            if(!empty($playList)){
                foreach($playList as $item){
        ?>
            <option value="<?=$item['id']?>"><?=$item['name'] ?></option>
        <?php
                }
            }
        ?>


    </select>
</div>