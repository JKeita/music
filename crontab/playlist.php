<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/3/3
 * Time: 20:10
 */
require_once("function.php");
$dsn = 'mysql:host=localhost;dbname=music;';
try{
    $pdo = new PDO($dsn, 'root', '123456');
    $pdo -> query('set names utf8');
}catch(Exception $e){
    echo $e -> getMessage();
    exit();
}
$addUserSth = $pdo -> prepare('insert into user(id,username,auth_key,password_hash,headimg,profile) values(:id,:username,:auth_key,:password_hash,:headimg,:profile)');
$addPlayListSth = $pdo -> prepare('insert into playlist(id,name,cover,uid,profile) values(:id,:name,:cover,:uid,:profile)');
$addSongSth = $pdo -> prepare('insert into song(id,name,author,src,cover,duration) values(:id,:name,:author,:src,:cover,:duration)');
$addSongCollectSth = $pdo -> prepare('insert into song_collect(pid,sid) values(:pid,:sid)');
$addTagSth = $pdo -> prepare('insert into tag(name) values(:name)');
$addPlayListTagSth = $pdo -> prepare('insert into playlist_tag(pid,tid) value(:pid,:tid)');
$getTagIdSth = $pdo -> prepare('select id from tag where name = :name limit 1');

$startId = 108000;
$endId = $startId + 100000;
for($id = $startId; $id < $endId; $id++){
    $url = "http://music.163.com/api/playlist/detail?id=" . $id;
    $res = netease_http($url);
    if( $res["code"]==200 && $res["result"] ){
        $data = $res['result'];
        $creator = $data['creator'];
        $songList = $data['tracks'];
        if(empty($songList)||empty($creator)||empty($data)){
            continue;
        }
        $tags = $data['tags'];
        //插入用户
        $addUserResult = $addUserSth -> execute([
            ':id' => $creator['userId'],
            ':username' => $creator['nickname'],
            ':auth_key' => 'wTCdAqYBOJ87Rwtm2xTngAJTxgeHGVG7',
            ':password_hash' => '$2y$13$Hc4L1kKtiC8yXBaF1pDTieRBXTy47kXriElI4w//I2cP6H1nKgLtm',
            ':headimg' => $creator['avatarUrl'],
            ':profile' => $creator['signature'],
        ]);
//        var_dump($addUserResult);
		if($addUserResult){
			echo ' uid:'.$pdo -> lastInsertId();
		}
        //插入歌单
        $addPlayListResult = $addPlayListSth -> execute([
            ':id' => $data['id'],
            ':name' => $data['name'],
            ':cover' => $data['coverImgUrl'],
            ':uid' => $data['userId'],
            ':profile' => !empty($data['description'])?$data['description']:'',
        ]);
//        var_dump($addPlayListResult);
		if($addPlayListResult){
			echo ' pid:'.$pdo -> lastInsertId();
		}
        if(!empty($songList)){
            foreach($songList as $song){
                $addSongResult = $addSongSth -> execute([
                    ':id' => $song['id'],
                    ':name' => $song['name'],
                    ':author' => !empty($song['artists'][0]['name'])?$song['artists'][0]['name']:'',
                    ':src' => $song['mp3Url'],
                    ':cover' => !empty($song['album']['picUrl'])?$song['album']['picUrl']:'',
                    ':duration' => $song['duration'],
                ]);
//                var_dump($addSongResult);
				if($addSongResult){
					echo ' sid:'.$pdo -> lastInsertId();
				}
                if($addSongResult || true){
                    $addSongCollectResult = $addSongCollectSth -> execute([
                        ':pid' => $data['id'],
                        ':sid' => $song['id'],
                    ]);
//                    var_dump($addSongCollectResult);
					if($addSongCollectResult){
						echo ' scid:'.$pdo -> lastInsertId();
					}
                }
            }
        }

        if(!empty($tags)){
            foreach($tags as $tag){
				$getTagIdResult = $getTagIdSth -> execute([
					':name' => $tag
				]);
				if($getTagIdResult){
					$tid = $getTagIdSth -> fetchColumn ();
				}
				if(empty($tid)){
				   $addTagResult = $addTagSth -> execute([
						':name' => $tag
					]);
					if($addTagResult){
						$tid = $pdo -> lastInsertId();
					}
				}
				
//                var_dump($addTagResult);
                if(!empty($tid)){
                    $addPlayListTagResult = $addPlayListTagSth -> execute([
                        ':pid' => $data['id'],
                        ':tid' => $tid,
                    ]);
//                    var_dump($addPlayListTagResult);
                }
				unset($tid);
            }
        }
		echo "\r\n";
    }else{
		echo "error:{$id}\r\n";
	}
}

