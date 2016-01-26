<?php
use yii\helpers\Url;
?>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta charset="utf-8" />
    <title>网易云音乐 听见好时光</title>
    <link rel="shortcut icon" href="http://s1.music.126.net/music.ico?v1" />
    <link href="<?=Yii::$app -> homeUrl?>css/core.css" type="text/css" rel="stylesheet" />
    <link href="<?=Yii::$app -> homeUrl?>css/pt_frame.css" type="text/css" rel="stylesheet" />
    <script src="<?=Yii::$app -> homeUrl?>js/jquery-1.12.0.js" ></script>
    <script src="<?=Yii::$app -> homeUrl?>js/index.js"></script>
    <script type="text/javascript" src="/plugin/fullAvatarEditor-2.3/scripts/swfobject.js"></script>
    <script type="text/javascript" src="/plugin/fullAvatarEditor-2.3/scripts/fullAvatarEditor.js"></script>
    <style type="text/css">
        object,embed {
            -webkit-animation-duration:.001s;
            -webkit-animation-name:playerInserted;
            -ms-animation-duration:.001s;
            -ms-animation-name:playerInserted;
            -o-animation-duration:.001s;
            -o-animation-name:playerInserted;
            animation-duration:.001s;
            animation-name:playerInserted;
        }
        @-webkit-keyframes
        playerInserted {
            from {
                opacity:0.99;
            }
            to {
                opacity:1;
            }
        } @-ms-keyframes playerInserted {
              from {
                  opacity:0.99;
              }
              to {
                  opacity:1;
              }
          } @-o-keyframes playerInserted {
                from {
                    opacity:0.99;
                }
                to {
                    opacity:1;
                }
            } @keyframes
              playerInserted {
                  from {
                      opacity:0.99;
                  }
                  to {
                      opacity:1;
                  }
              }
            .container{
                padding-top:120px;
            }
    </style>
    <style type="text/css">
        #yddContainer {
            display:block;
            font-family:Microsoft
            YaHei;
            position:relative;
            width:100%;
            height:100%;
            top:-4px;
            left:-4px;
            font-size:12px;
            border:1px
            solid
        }
        #yddTop {
            display:block;
            height:22px
        }
        #yddTopBorderlr {
            display:block;
            position:static;
            height:17px;
            padding:2px
            28px;
            line-height:17px;
            font-size:12px;
            color:#5079bb;
            font-weight:bold;
            border-style:none solid;
            border-width:1px
        }
        #yddTopBorderlr
        .ydd-sp {
            position:absolute;
            top:2px;
            height:0;
            overflow:hidden
        }
        .ydd-icon {
            left:5px;
            width:17px;
            padding:0px 0px 0px
            0px;
            padding-top:17px;
            background-position:-16px -44px
        }
        .ydd-close {
            right:5px;
            width:16px;
            padding-top:16px;
            background-position:left
            -44px
        }
        #yddKeyTitle {
            float:left;
            text-decoration:none
        }
        #yddMiddle {
            display:block;
            margin-bottom:10px
        }
        .ydd-tabs {
            display:block;
            margin:5px
            0;
            padding:0 5px;
            height:18px;
            border-bottom:1px solid
        }
        .ydd-tab {
            display:block;
            float:left;
            height:18px;
            margin:0 5px -1px 0;
            padding:0
            4px;
            line-height:18px;
            border:1px solid;
            border-bottom:none
        }
        .ydd-trans-container {
            display:block;
            line-height:160%
        }
        .ydd-trans-container
        a {
            text-decoration:none;
        }
        #yddBottom {
            position:absolute;
            bottom:0;
            left:0;
            width:100%;
            height:22px;
            line-height:22px;
            overflow:hidden;
            background-position:left
            -22px
        }
        .ydd-padding010 {
            padding:0
            10px
        }
        #yddWrapper {
            color:#252525;
            z-index:10001;
            background:url(chrome-extension://eopjamdnofihpioajgfdikhhbobonhbb/ab20.png);
        }
        #yddContainer {
            background:#fff;
            border-color:#4b7598
        }
        #yddTopBorderlr {
            border-color:#f0f8fc
        }
        #yddWrapper
        .ydd-sp {
            background-image:url(chrome-extension://eopjamdnofihpioajgfdikhhbobonhbb/ydd-sprite.png)
        }
        #yddWrapper a,#yddWrapper
        a:hover,#yddWrapper a:visited {
            color:#50799b
        }
        #yddWrapper
        .ydd-tabs {
            color:#959595
        }
        .ydd-tabs,.ydd-tab {
            background:#fff;
            border-color:#d5e7f3
        }
        #yddBottom {
            color:#363636
        }
        #yddWrapper {
            min-width:250px;
            max-width:400px;
        }
    </style>
    <style type="text/css">
        .m-mask {
            position:fixed;
            _position:absolute;
            z-index:100;
            top:0;
            bottom:0;
            left:0;
            right:0;
            width:100%;
            height:100%;
            background-image:url(data:image/gif;
            base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==);
        }
        .auto-1452599464323 {
            position:absolute;
            z-index:1000;
            border:1px
            solid #aaa;
            background:#fff;
        }
        .auto-1452599464323 .zbar {
            line-height:30px;
            background:#8098E7;
            border-bottom:1px solid
            #aaa;
        }
        .auto-1452599464323 .zcnt {
            padding:10px 5px;
        }
        .auto-1452599464323 .zttl {
            margin-right:20px;
            text-align:left;
        }
        .auto-1452599464323
        .zcls {
            position:absolute;
            top:5px;
            right:0;
            width:20px;
            height:20px;
            line-height:20px;
            cursor:pointer;
        }
        .auto-1452599464324 {
            position:absolute;
            background:#fff;
        }
        .auto-1452599464325 {
            font-size:12px;
            line-height:160%;
        }
        .auto-1452599464325
        a {
            margin:0 2px;
            padding:2px 8px;
            color:#333;
            border:1px solid #aaa;
            text-decoration:none;
        }
        .auto-1452599464325
        .js-disabled {
            cursor:default;
        }
        .auto-1452599464325 .js-selected {
            cursor:default;
            background:#bbb;
        }
        .j-item.j-selected
        a {
            background:#eee;
            text-decoration:none;
            color:#333;
        }
        .u-atlist {
            position: absolute;
            z-index:
                10000;
        }
        .f-thide.selected-item {
            background-color: #eee;
        }
        #shadow-box {
            position: absolute;
            display: block;
            left: 450px;
            top: 1020px;
            border:
                1px solid black;
            word-wrap: break-word;
            display:none;
            opacity: 0;
            filter: Alpha(opacity=0);
            z-index: -1000;
        }
    </style>
    <style>
        .content{
            height:200px;
        }
        .m-playbar .listlyric{
            width:400px;
            right:0px;
        }
    </style>
    <link href="<?=Yii::$app -> homeUrl?>plugin/scrollbar/scrollbar.css" type="text/css" rel="stylesheet" />
    <script src="<?=Yii::$app -> homeUrl?>plugin/scrollbar/scrollbar.js" ></script>
</head>
<body class="auto-1452599464323-parent auto-1452599464322-parent">
<div id="g-topbar" class="g-topbar" style="width: 1349px; top: 0px;">
    <div class="m-top">
        <div class="wrap">
            <h1 class="logo">
                <a hidefocus="true" href="http://music.163.com/#">网易云音乐</a>
            </h1>
            <ul class="m-nav j-tflag">
                <li class="fst">
              <span>
                <a hidefocus="true" href="<?=Url::to(['site/index'])?>" data-module="discover" class="z-slt single">
                    <em>发现音乐</em>
                    <sub class="cor">�</sub></a>
              </span>
                </li>
                <li>
              <span>
                <a data-res-action="bilog" data-log-action="page" data-log-json="{&quot;type&quot;:&quot;my&quot;}"
                   hidefocus="true" href="http://music.163.com/my/" data-module="my">
                    <em>我的音乐</em>
                    <sub class="cor">�</sub></a>
              </span>
                </li>
                <li>
              <span>
                <a hidefocus="true" href="http://music.163.com/friend" data-module="friend">
                    <em>朋友</em>
                    <sub class="cor">�</sub></a>
              </span>
                </li>
            </ul>
            <?php require_once(__DIR__."/../user/tophead.php");?>

            <a class="m-msg f-pr j-tflag" href="http://music.163.com/msg/#/at" style="display:none;"></a>
            <div class="m-srch f-pr j-suggest" id="g_search">
                <div class="srchbg">
              <span class="parent">
              <input type="text" class="txt j-flag" value="" id="auto-id-6J1k4oM2hQ1ArLOw" />
              <label class="ph j-flag" id="auto-id-RIG6JDU5DUPmdgCt">单曲/歌手/专辑/歌单/用户</label></span>
                </div>
                <span class="j-flag" style="display:none;" id="auto-id-1TCVnZVkn87mMByK">�</span>
                <div class="u-lstlay j-flag" style="display:none;" id="auto-id-v3UlfhfWN5ggqzrG"></div>
            </div>
        </div>
    </div>
    <div class="m-subnav m-subnav-up f-pr j-tflag f-hide">
        <div class="shadow">�</div>
    </div>
    <div id="g_nav2" class="m-subnav j-tflag">
        <div class="wrap f-pr">
            <ul class="nav">
                <li>
                    <a hidefocus="true" data-module="discover" href="./css/discover.html" class="z-slt">
                        <em>推荐</em>
                    </a>
                </li>
                <li>
                    <a hidefocus="true" data-module="toplist" href="http://music.163.com/discover/toplist">
                        <em>排行榜</em>
                    </a>
                </li>
                <li>
                    <a hidefocus="true" data-module="playlist" href="http://music.163.com/discover/playlist">
                        <em>歌单</em>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>

<?= $content ?>

<div class="g-btmbar">
    <div class="m-playbar m-playbar-unlock" style="top: -7.21px; visibility: visible;" id="auto-id-ahczTgTARX1LQIH9">
        <div class="updn">
            <div class="left f-fl">
                <a href="javascript:;" class="btn" hidefocus="true" data-action="lock"></a>
            </div>
            <div class="right f-fl"></div>
        </div>
        <div class="bg"></div>
        <div class="hand" title="展开播放条"></div>
        <div class="wrap" id="g_player">
            <div class="btns">
                <a href="javascript:;" hidefocus="true" data-action="prev" class="prv" title="上一首(ctrl+←)" id="prev_btn">上一首</a>
                <a href="javascript:;" hidefocus="true" data-action="play" class="ply j-flag" title="播放/暂停(p)" id="play_pause">播放/暂停</a>
                <a href="javascript:;" hidefocus="true" data-action="next" class="nxt" title="下一首(ctrl+→)" id="next_btn">下一首</a></div>
            <div class="head j-flag" id="song_img">
                <img src="./css/3398590442421534.jpg"/>
                <a href="http://music.163.com/song?id=31789096" hidefocus="true" class="mask"></a>
            </div>
            <div class="play">
                <div class="j-flag words" id="songinfo">
                    <a hidefocus="true" href="http://music.163.com/song?id=31789096" class="f-thide name fc1 f-fl"
                       title="格斗宝贝">格斗宝贝</a>
                    <span class="by f-thide f-fl">
                          <span title="祈Inory/流月" id="song_author">
                            <a class="" href="http://music.163.com/artist?id=189577" hidefocus="true">祈Inory</a>
                          </span>
                    </span>
                  <a href="http://music.163.com/playlist?id=30588557&amp;_hash=songlist-31789096" class="src"
                       title="来自歌单"></a>
                </div>
                <div class="m-pbar" data-action="noop">
                    <div class="barbg j-flag" id="auto-id-wdO8Hb8Ttpcb0518">
                        <div class="rdy" style="width: 0%;"></div>
                        <div class="cur" style="width:0%;">
                            <span class="btn f-tdn f-alpha" id="auto-id-S0cBTrJ2wi1GSD6w"></span>
                        </div>
                    </div>
              <span class="j-flag time">
              <em id="curTime">00:00</em> / <em id="totalTime">00:00</em>
              </span>
                </div>
            </div>
            <div class="oper f-fl">
                <a href="javascript:;" hidefocus="true" data-action="like" class="icn icn-add j-flag" title="收藏">收藏</a>
                <a href="javascript:;" hidefocus="true" data-action="share" class="icn icn-share" title="分享">分享</a></div>
            <div class="ctrl f-fl f-pr j-flag">
                <div class="m-vol" style="display:none;" id="auto-id-AksQTK79DWewlTMH">
                    <div class="barbg"></div>
                    <div class="vbg j-t" id="auto-id-QX0rZMKtpqbhlyd3">
                        <div class="curr j-t" style="height: 93px;"></div>
                        <span class="btn f-alpha j-t" style="top: 0px;" id="change_vol"></span>
                    </div>
                </div>
                <a href="javascript:;" hidefocus="true" data-action="volume" class="icn icn-vol" id="vol_btn"></a>
                <a href="javascript:;" hidefocus="true" data-action="mode" class="icn icn-one" title="单曲循环" id="play_type_btn"></a>
                <span class="add f-pr">
                      <span class="tip" style="display:none;">已添加到播放列表</span>
                      <a href="javascript:;" title="播放列表" hidefocus="true" data-action="panel" id="play_list_btn"
                         class="icn icn-list s-fc3">176</a>
                </span>
                <div class="tip tip-1" style="display:none;">循环</div>
            </div>
        </div>

        <div class="list" id="g_playlist" style="display:none">
            <div class="listhd">
                <div class="listhdc">
                    <h4>播放列表(
                        <span class="j-flag">0</span>)</h4>
                    <a href="javascript:;" class="addall" data-action="likeall">收藏全部</a>
                    <a href="javascript:;" class="clear" data-action="clear">清除</a>
                    <p class="lytit f-ff0 f-thide j-flag">张士超你到底把我家钥匙放在哪里了</p>
                    <span class="close" data-action="close">关闭</span></div>
            </div>
            <div class="listbd">
                <img class="imgbg j-flag" id="auto-id-BUxBLBFbwMZD5ROd" src="http://music.163.com/api/img/blur/16645506533224412"
                     style="top: -360px;" />
                <div class="msk"></div>
                <div class="listbdc j-flag" id="auto-id-FwTi8Dk41WAeTLoN">
                    <ul class="f-cb" id="playlistul">
                        <li class="z-sel" data-id="100000" data-action="play">
                            <div class="col col-1">
                                <div class="playicn"></div>
                            </div>
                            <div class="col col-2">灼け落ちない翼</div>
                            <div class="col col-3">
                                <div class="icns">
                                    <i class="ico icn-del" title="删除" data-id="34077763" data-action="delete">删除</i>
                                    <i class="ico ico-dl" title="下载" data-id="34077763" data-action="download">下载</i>
                                    <i class="ico ico-share" title="分享" data-id="34077763" data-action="share">分享</i>
                                    <i class="j-t ico ico-add" title="收藏" data-id="34077763" data-action="like">收藏</i>
                                </div>
                            </div>
                            <div class="col col-4">
                                <span title="多田葵">
                                  <a class="" href="/artist?id=18009" hidefocus="true">多田葵</a>
                                </span>
                            </div>
                            <div class="col col-5">05:15</div>
                            <div class="col col-6">
                                <a href="/user/songs/rank?id=37889558&amp;cat=1" class="ico ico-src" title="来自听歌排行榜"
                                   data-action="link">来源</a>
                            </div>
                        </li>
                        <li data-id="100002" data-action="play">
                            <div class="col col-1">
                                <div class="playicn"></div>
                            </div>
                            <div class="col col-2">灼け落ちない翼</div>
                            <div class="col col-3">
                                <div class="icns">
                                    <i class="ico icn-del" title="删除" data-id="34077763" data-action="delete">删除</i>
                                    <i class="ico ico-dl" title="下载" data-id="34077763" data-action="download">下载</i>
                                    <i class="ico ico-share" title="分享" data-id="34077763" data-action="share">分享</i>
                                    <i class="j-t ico ico-add" title="收藏" data-id="34077763" data-action="like">收藏</i>
                                </div>
                            </div>
                            <div class="col col-4">
                                <span title="多田葵">
                                  <a class="" href="/artist?id=18009" hidefocus="true">多田葵</a>
                                </span>
                            </div>
                            <div class="col col-5">05:15</div>
                            <div class="col col-6">
                                <a href="/user/songs/rank?id=37889558&amp;cat=1" class="ico ico-src" title="来自听歌排行榜"
                                   data-action="link">来源</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="bline j-flag" id="auto-id-EArPJeWQBsJ1Mc57"></div>
                <div class="ask j-flag" id="auto-id-fQe5QTU2qO3dT4UI">
                    <a class="ico ico-ask"></a>
                </div>
                <div class="upload j-flag" style="display: none;">
                    <a href="/lyric/translrc?id=41602869">翻译歌词</a>
                    <a data-action="close" href="/lyric/report?id=41602869">报错</a>
                </div>
                <div class="msk2"></div>
                <div class="listlyric j-flag" id="">
                    <div class=" content mCustomScrollbar">
                        <p class="j-flag" data-time="0">灼け落ちない翼
                            <br />灼热不落之翼</p>
                        <p class="j-flag" data-time="31.65">見渡せる場所に
                            <br />【今晨终于抵达了】</p>
                        <p class="j-flag" data-time="35.28">今朝は辿り着く
                            <br />【能俯瞰世间之处】</p>
                        <p class="j-flag" data-time="39.01">遠く線路が伸びる
                            <br />【望着那向远方无限延伸的铁轨】</p>
                        <p class="j-flag" data-time="46.47">こびりついた土
                            <br />【轻轻地踢着鞋跟】</p>
                        <p class="j-flag" data-time="50.12">踵から落とし
                            <br />【抖去上面的泥土】</p>
                        <p class="j-flag" data-time="53.33">歩いた距離を
                            <br />【尝试着测量着】</p>
                        <p class="j-flag" data-time="56.41">測ってみたり
                            <br />【走过的距离】</p>
                        <p class="j-flag" data-time="61.14">前髪を揺らすように
                            <br />【忽然之间一阵风】</p>
                        <p class="j-flag" data-time="64.87">風が強く吹いたら
                            <br />【吹起了我的发梢】</p>
                        <p class="j-flag" data-time="68.56">もう何も迷わない
                            <br />【我已经不会再迷惘了】</p>
                        <p class="j-flag" data-time="74.51">世界の果てさえ
                            <br />【世界的尽头在何处】</p>
                        <p class="j-flag" data-time="78.21000000000001">僕らは知らない
                            <br />【我们也无从知晓】</p>
                    </div>
                </div>
                <!-- 		<div class="bline bline-1 j-flag" id="auto-id-4fv4dZLT46kyzC8d">
                          <span class="scrol scrol-1 j-flag" hidefocus="true" id="auto-id-PnHO9x2IgkWiopgn"
                          style="height: 29.6563px; display: block; top: 0px;"></span>
                        </div> -->
            </div>
        </div>

    </div>
</div>
<audio id=""
       src="http://p2.music.126.net/dl4o55BujeXger3kwXN1EA==/7730666255475657.mp3"
       style="display: none;"></audio>
<div class="m-layer z-show" style="top: 56px; left: 418px;display:none">
    <div class="zbar" id="auto-id-hsFcqWD8UErCyz9N">
        <div class="zttl">登录</div>
    </div>
    <div class="zcnt">

        <div class="lyct lyct-1" id="lrBar">
            <div class="n-log2 n-log2-1 f-cb">
                <div class="u-main">
                    <div class="u-plt"></div>
                    <div class="f-mgt10">
                        <a class="u-btn2 u-btn2-2 loginBtn" data-action="login" data-type="mobile">
                            <i>登录</i>
                        </a>
                    </div>
                    <div class="f-mgt10">
                        <a class="u-btn2 u-btn2-1 regBtn" data-action="reg">
                            <i>注　册</i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="lyct lyct-1 f-cb" id="regBar" style="display:none">
            <div class="n-log2 n-log2-2">
                <form action="<?=\yii\helpers\Url::to(['user/signup'])?>" method="post" id="signupForm">
                    <div class="s-fc3">
                        <label>用户名：</label>
                    </div>
                    <div class="f-mgt10">
                            <input name="username" type="text" class="u-txt f-mgt10" placeholder="请输入用户名" id="" />
                    </div>
                    <div class="f-mgt10 s-fc3">
                        <label>密码：</label>
                    </div>
                    <div class="f-mgt10">
                        <input name="password" type="password" class="u-txt f-mgt10" placeholder="设置登录密码，不少于6位"
                               id="auto-id-9Tyi1kcAnlZw7Tpc" />
                    </div>
                    <div class="f-mgt10 s-fc3">
                        <label>确认密码：</label>
                    </div>
                    <div class="f-mgt10">
                        <input name="password_repeat" type="password" class="u-txt f-mgt10" id="" />
                    </div>
                    <div class="u-err" style="display: none;">
                        <i class="u-icn u-icn-25"></i>
                        <span>请输入11位数字的手机号</span>
                    </div>
                    <input name="_csrf" type="hidden" value="<?=Yii::$app -> request -> csrfToken?>" />
                    <div class="f-mgt20">
                        <a class="u-btn2 u-btn2-2" hidefocus="true" href="" data-action="ok" id="signup">
                            <i>注册</i>
                        </a>
                    </div>
                </form>
            </div>
            <div class="n-loglink2">
                <a href="javascript:;" data-action="back" class="s-primary back">&lt; 返回</a>
            </div>
        </div>

        <div class="lyct lyct-1" id="loginBar" style="display:none">
            <div class="n-log2 n-log2-2">
                <form action="<?=\yii\helpers\Url::to(['user/login'])?>" method="post" id="loginForm">
                    <input name="_csrf" type="hidden" value="<?=Yii::$app -> request -> csrfToken?>" />
                    <div>
                        <input name="username" type="text" class="js-input u-txt" placeholder="请输入用户名" id="auto-id-RPJrMBUp3EABdqQv" />
                    </div>
                    <div class="f-mgt10">
                        <input name="password" type="password" class="js-input u-txt" placeholder="请输入密码" id="auto-id-9bSSbcsyNzNt8lFk" />
                    </div>
                    <div class="u-err" style="display: none;"></div>
                    <div class="f-mgt10">
                        <label class="s-fc3">
                            <input name="rememberMe" type="checkbox" checked="checked" class="u-auto" value="1"/>自动登录</label>
                        <a href="#" class="f-fr s-fc3" data-action="forget">忘记密码？</a></div>
                    <div class="f-mgt20">
                        <a class="js-primary u-btn2 u-btn2-2" hidefocus="true" href="#" data-action="login" id="login">
                            <i>登　录</i>
                        </a>
                    </div>
                </form>
            </div>
            <div class="js-btmbar n-loglink2 f-cb">
                <a href="javascript:;" data-action="select" class="f-fl s-primary back">&lt; 返回</a>
                <a href="javascript:;" data-action="reg" class="f-fr regLink">没有帐号？免费注册 &gt;</a>
            </div>
        </div>

        <span class="zcls" title="关闭窗体" id="closeBar">×</span>
    </div>
</div>
<div class="m-mask" style="display:none"></div>
</body>
<script>
    window.LoadTopHeadUrl = "<?=Url::to(['user/tophead'])?>";
    window.LogoutUrl = "<?=Url::to(['user/logout'])?>";
    function addNewObjEvent(){
        $(".container a.single").on('click', function(){
            history.pushState({ path: this.path }, '', this.href);
            $.get(this.href, function(data) {
                $('.container').get(0).outerHTML=data;
                addNewObjEvent();
            });
            return false;
        });
        addUserInfoEvent();
    }
    $(' a.single').on('click',function() {
        history.pushState({ path: this.path }, '', this.href);
        $.get(this.href, function(data) {
            $('.container').get(0).outerHTML=data;
            addNewObjEvent();
        });

        return false;
    });
    $(window).on('popstate', function() {
        $.get(location.pathname, function(data) {
            $('.container').get(0).outerHTML=data;
            addNewObjEvent();
        });

    });

</script>
</html>
