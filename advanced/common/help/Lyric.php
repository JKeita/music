<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/26
 * Time: 19:47
 */

namespace common\help;


class Lyric
{
    public static function parseLyric($lyric){
        if(empty($lyric)){
            return [];
        }
        $now_lrc = array();
        $lyric = trim($lyric , "\n");
        $lrc_row = explode("\n", $lyric);
//        file_put_contents("c:\log.txt", var_export($lyric, true));
//        file_put_contents("c:\log.txt", var_export($lrc_row, true),FILE_APPEND);
        foreach ($lrc_row as $key => $value) {
                $tmp = explode("]", $value);
                $val = $tmp[0];
                $tmp2 = substr($val, 1, 8);
                $tmp2 = explode(":", $tmp2);

                $lrc_sec = intval( (int)$tmp2[0]*60 + $tmp2[1]*1);
//            file_put_contents("c:\log.txt", var_export($lrc_sec."\n", true),FILE_APPEND);
                if( is_numeric($lrc_sec) && $lrc_sec > 0){
                    $count = count($tmp);
                    $lrc = trim($tmp[$count-1]);

                    if( $lrc != "" ){
                        $now_lrc[$lrc_sec] = $lrc;
                    }
                }
        }

        return $now_lrc;
    }
}