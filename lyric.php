<?php
require_once("function.php");
header("Content-Type:text/html;charset=utf-8");
header("Cache-Control: no-cache, must-revalidate");
header("Pragma: no-cache");
set_time_limit(0);

$dsn = 'mysql:host=localhost;dbname=music;';
try{
    $pdo = new PDO($dsn, 'root', '123456');
    $pdo -> query('set names utf8');
}catch(Exception $e){
    echo $e -> getMessage();
}
    try{
        $offset = 0;
        $limit = 5000;
        $count=0;
        $sth = $pdo -> prepare("select id from song where lyric is null limit :offset, :limit");
        $sth -> bindParam(':offset', $offset, PDO::PARAM_INT);
        $sth -> bindParam(':limit', $limit, PDO::PARAM_INT);
        $usth = $pdo -> prepare("update song set lyric=:lyric where id = :id");
        $usth -> bindParam(':lyric', $lyric, PDO::PARAM_STR);
        $usth -> bindParam(':id', $id, PDO::PARAM_INT);
        do{
            $sth -> execute();
            $idArr = $sth -> fetchAll(PDO::FETCH_COLUMN,0 );
            if(!empty($idArr)){

                foreach($idArr as $id){
                    $lyric = get_song_lrc($id);
                    $usth -> execute();
                    echo $id.'<br/>';
                }
            }
            ob_flush();
            $count++;
            if($count>10 && true){
                break;
            }
        }while(!empty($idArr));
        unset($sth);
        unset($usth);
    }catch(PDOException $e){
        echo $e -> getMessage();
    }

    $pdo = null;

