<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/22
 * Time: 15:33
 */
?>
<?php
    set_time_limit(0);
    $redis = new Redis();
    $redis -> connect('127.0.0.1',6380);
    $result = $redis -> ping();
    var_dump($result);

    $db = new PDO("mysql:host=127.0.0.1;dbname=music","root","123456");
    $db->exec('set names utf8');
    $sql = "select * from song where state = 0";
    $query = $db -> query($sql, PDO::FETCH_ASSOC);
    while($row = $query -> fetch()){
        foreach($row as $key => $value){
            $redis -> hSet("music:song:{$row['id']}", $key, $value);
        }
        echo $row['id'].'<br/>';
    }