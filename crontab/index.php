<?php
class SongThread extends Thread {
    public function __construct($minId, $maxId){
        //$this -> pdo =$pdo;
        $this-> minId = $minId;
        $this -> maxId = $maxId;
        //$this -> sth = $this -> pdo -> prepare('insert into song(id,name,author,src,cover,duration) values(:id,:name,:author,:src,:cover,:duration)');
    }

    public function run(){
		//echo 'ok';
        $dsn = 'mysql:host=localhost;dbname=music;';
        try{
            $pdo = new PDO($dsn, 'root', '123456');
            $pdo -> query('set names utf8');
			//echo 'ok2';
        }catch(Exception $e){
            echo $e -> getMessage();
        }
        $sth = $pdo -> prepare('insert into song(id,name,author,src,cover,duration) values(:id,:name,:author,:src,:cover,:duration)');
        for($id = $this -> minId; $id < $this -> maxId; $id ++){
            $res = netease_song($id);
            if($res){
                try{
                    $sth -> execute([
                        ':id' => $res['song_id'],
                        ':name' => $res['song_title'],
                        ':author' => $res['song_author'],
                        ':src' => $res['song_src'],
                        ':cover' => $res['song_cover'],
                        ':duration' => $res['song_duration']
                    ]);
                    //echo json_encode($res);
                    //echo $id.'<br/>';
                }catch(PDOException $e){
                    echo $e -> getMessage();
                }

            }
			unset($res);
            ob_flush();
        }
		unset($pdo);
    }
}
?>
<?php 
	header("Content-Type:text/html;charset=utf-8");
    set_time_limit(0);
/*	$dsn = 'mysql:host=localhost;dbname=music;';
    try{
        $pdo = new PDO($dsn, 'root', '123456');
        $pdo -> query('set names utf8');
    }catch(Exception $e){
        echo $e -> getMessage();
    }
    $sth = $pdo -> prepare('insert into song(id,name,author,src,cover,duration) values(:id,:name,:author,:src,:cover,:duration)');
    */
	$min = 140615;
	$max = 145008;

    $n = 10;
    $d = (int)ceil(($max-$min)/$n);
    $threadArr = [];
    $num = $min;
    for($i = 0; $i < $n; $i++){
        $threadArr[] = new SongThread($num, $num+$d);
        $num = $num + $d;
    }
    foreach($threadArr as $thread){
        $thread -> start();
		while ($thread->isRunning()) {
			usleep(10);
		}
		//让当前执行上下文等待被引用线程执行完毕
		$thread->join();
    }
/*    for($id = 78970; $id <= 5121020; $id++){
        $res = netease_song($id);
        if($res){
            try{
                $sth -> execute([
                    ':id' => $res['song_id'],
                    ':name' => $res['song_title'],
                    ':author' => $res['song_author'],
                    ':src' => $res['song_src'],
                    ':cover' => $res['song_cover'],
                    ':duration' => $res['song_duration']
                ]);
                //echo json_encode($res);
                echo $id.'<br/>';
            }catch(PDOException $e){
                echo $e -> getMessage();
            }

        }
        ob_flush();
        //break;
    }*/

//	$id = $_REQUEST['id'];
//	$rs = netease_song($id);
//	echo json_encode($rs);die();;

?>
