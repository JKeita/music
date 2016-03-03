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
    $sth = $pdo -> prepare('insert into song(id,name,author,src,cover,duration) values(:id,:name,:author,:src,:cover,:duration)');

    for($id = 300000; $id <= 350000; $id++){
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
		unset($res);
        ob_flush();
        //break;
    }
    $pdo = null;
	exit();
?>
