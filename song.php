<?php 
        function netease_http($url)
        {
            $refer = "http://music.163.com/";
            $header[] = "Cookie: " . "appver=1.5.0.75771;";
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_URL, $url);
            curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_BINARYTRANSFER, true);
            curl_setopt($ch, CURLOPT_REFERER, $refer);
            $cexecute = curl_exec($ch);
            curl_close($ch);

            if ($cexecute) {
                $result = json_decode($cexecute, true);
                return $result;
            }else{
                return false;
            }
        }
		
	    function netease_song($music_id)
        {

            $url = "http://music.163.com/api/song/detail/?id=" . $music_id . "&ids=%5B" . $music_id . "%5D";
            $response = netease_http($url);

            if( $response["code"]==200 && $response["songs"] ){
                //print_r($response["songs"]);
                //����������Ϣ
                $mp3_url = $response["songs"][0]["mp3Url"];
                $mp3_url = str_replace("http://m", "http://p", $mp3_url);
                $music_name = $response["songs"][0]["name"];
                $mp3_cover = $response["songs"][0]["album"]["picUrl"];
				$song_duration = $response["songs"][0]["duration"];
                $artists = array();

                foreach ($response["songs"][0]["artists"] as $artist) {
                    $artists[] = $artist["name"];
                }

                $artists = implode(",", $artists);
				
                $result = array(
                    "song_id" => $music_id,
                    "song_title" => $music_name,
                    "song_author" => $artists,
                    "song_src" => $mp3_url,
                    "song_cover" => $mp3_cover,
					"song_duration" => $song_duration
                );
				//return $response;
                return $result;
            }

            return false;
        }
		
	function get_song_lrc($songid){
            $url = "http://music.163.com/api/song/media?id=" . $songid;
            $response = netease_http($url);

            if( $response["code"]==200 && $response["lyric"] ){

                $content = $response["lyric"];
				$result = $this->parse_lrc($content);
				return $result;
                
            }

            return false;
	}
	function parse_lrc($lrc_content){
		$now_lrc = array();
		$lrc_row = explode("\n", $lrc_content);

		foreach ($lrc_row as $key => $value) {
			$tmp = explode("]", $value);

			foreach ($tmp as $key => $val) {
				$tmp2 = substr($val, 1, 8);
				$tmp2 = explode(":", $tmp2);

				$lrc_sec = intval( $tmp2[0]*60 + $tmp2[1]*1 );

				if( is_numeric($lrc_sec) && $lrc_sec > 0){
					$count = count($tmp);
					$lrc = trim($tmp[$count-1]);

					if( $lrc != "" ){
						$now_lrc[$lrc_sec] = $lrc;  
					}
				}
			}
		}

		return $now_lrc;	
	}
?>
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
