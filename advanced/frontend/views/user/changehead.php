<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/1/21
 * Time: 21:39
 */
?>
<div class="container">
<div class="g-bd">
    <div class="g-wrap" id="baseBox" style="display: none;">
        <div class="u-title u-title-2 f-cb">
            <h3><span class="f-ff2">个人设置</span></h3>
        </div>
        <ul class="m-tabs f-cb">
            <li class="fst"><a href="/user/update" class="z-slt"><em>基本设置</em></a></li>
            <li><a href="/user/binding/#/list"><em>绑定设置</em></a></li>
            <li><a href="/user/setting"><em>隐私设置</em></a></li>
        </ul>
        <form onsubmit="return false;" id="update_form">
            <div class="n-base f-cb">
                <div class="frm m-frm">
                    <div class="itm">
                        <label class="lab">昵称：</label>
                        <input type="text" class="u-txt txt" value="Keita霖" id="nickname" maxlength="30">
                        <div class="u-err" style="display:none;" id="err"><i class="u-icn u-icn-25"></i><span>昵称已存在！</span></div>
                    </div>
                    <div class="itm f-cb">
                        <label class="lab">介绍：</label>
                        <div class="u-txtwrap f-pr">
                            <textarea class="u-txt area" id="signature">NULL</textarea>
                            <span class="zs s-fc2" id="remain">136</span>
                        </div>
                    </div>
                    <div class="itm f-cb">
                        <label class="lab">性别：</label>
                        <div class="f-cb">
                            <label class="check"><input name="gender" type="radio" class="u-rdi" checked="true" value="1"> 男</label>
                            <label class="check"><input name="gender" type="radio" class="u-rdi" value="2"> 女</label>
                            <label class="check"><input name="gender" type="radio" class="u-rdi" value="0"> 保密</label>
                        </div>
                    </div>
                    <div class="itm f-cb" style="z-index:11;">
                        <label class="lab">生日：</label>
                        <div class="u-slt u-slt-1 f-pr" id="yselect">
                            <span class="curr">--</span>
                            <i class="btn" id="auto-id-aaWCXcIFL4VCuzLd"></i>
                            <ul style="display: none;"><!-- ie6下，高超过150px就设_height:150px; -->
                                <li class="f-thide" id="auto-id-uXpXx4Jcq8Jt0heC"><a href="#">2016</a></li><li class="f-thide" id="auto-id-6JqJUpObp8ByoeDa"><a href="#">2015</a></li><li class="f-thide" id="auto-id-1b4cZA7HQeJb7DTI"><a href="#">2014</a></li><li class="f-thide" id="auto-id-uKvZRUlC2JsIWSqU"><a href="#">2013</a></li><li class="f-thide" id="auto-id-cpoOTreb35OE1e12"><a href="#">2012</a></li><li class="f-thide" id="auto-id-olU7k7DWbwbGxDxp"><a href="#">2011</a></li><li class="f-thide" id="auto-id-xTMLZDAPGyKTG9qO"><a href="#">2010</a></li><li class="f-thide" id="auto-id-8uHU2Ulh2tDBTltH"><a href="#">2009</a></li><li class="f-thide" id="auto-id-73CaSrkrhlAdInIG"><a href="#">2008</a></li><li class="f-thide" id="auto-id-d8MCrRSLQhohFSqu"><a href="#">2007</a></li><li class="f-thide" id="auto-id-psINgZbT5itnLTPl"><a href="#">2006</a></li><li class="f-thide" id="auto-id-qrKlCWcgU46Kv8xl"><a href="#">2005</a></li><li class="f-thide" id="auto-id-gcuJ6KkZIaiR6OpM"><a href="#">2004</a></li><li class="f-thide" id="auto-id-IhOXs015lS9X6l24"><a href="#">2003</a></li><li class="f-thide" id="auto-id-JmkPcTXlLH3LUszd"><a href="#">2002</a></li><li class="f-thide" id="auto-id-K3sT8nb95aFKETna"><a href="#">2001</a></li><li class="f-thide" id="auto-id-05MGnCdvWDhoTTvk"><a href="#">2000</a></li><li class="f-thide" id="auto-id-MqKWhNf693kK2MBp"><a href="#">1999</a></li><li class="f-thide" id="auto-id-dMFqiIllAXaTB9H1"><a href="#">1998</a></li><li class="f-thide" id="auto-id-7zCVCg3wfTcGvz3u"><a href="#">1997</a></li><li class="f-thide" id="auto-id-1X4vlcitlTbvZZKw"><a href="#">1996</a></li><li class="f-thide" id="auto-id-6icTkMVc3Pk7C2n3"><a href="#">1995</a></li><li class="f-thide" id="auto-id-7a0I2uhqzHPVCcm2"><a href="#">1994</a></li><li class="f-thide" id="auto-id-cZ3ZDZSB1WblDAZK"><a href="#">1993</a></li><li class="f-thide" id="auto-id-wVf84aVEC1HBc5ne"><a href="#">1992</a></li><li class="f-thide" id="auto-id-8nTp3hFtHE1kyirH"><a href="#">1991</a></li><li class="f-thide" id="auto-id-qZltrG5pcMxyhaeu"><a href="#">1990</a></li><li class="f-thide" id="auto-id-O5Ku8uSRFGROvKwb"><a href="#">1989</a></li><li class="f-thide" id="auto-id-kDTP4pIFsJfweMJT"><a href="#">1988</a></li><li class="f-thide" id="auto-id-SslI3o1daBc85gkk"><a href="#">1987</a></li><li class="f-thide" id="auto-id-H9RoJ1596Tv7KcQT"><a href="#">1986</a></li><li class="f-thide" id="auto-id-eqFeIT75xNkfgaHF"><a href="#">1985</a></li><li class="f-thide" id="auto-id-SaKrnJDe6K0JG5By"><a href="#">1984</a></li><li class="f-thide" id="auto-id-MMuZ6IpCr93PWJar"><a href="#">1983</a></li><li class="f-thide" id="auto-id-uJusz4x5hT8QluUb"><a href="#">1982</a></li><li class="f-thide" id="auto-id-0NunN0OdoAwPTzyq"><a href="#">1981</a></li><li class="f-thide" id="auto-id-Eoolcax9vJLamWK9"><a href="#">1980</a></li><li class="f-thide" id="auto-id-8MObkhw9VNWWzsfA"><a href="#">1979</a></li><li class="f-thide" id="auto-id-5q5EP5Z2yrMzQoIr"><a href="#">1978</a></li><li class="f-thide" id="auto-id-4QGg5voKWmAp7RD4"><a href="#">1977</a></li><li class="f-thide" id="auto-id-cdnEFxH7Oe1SpVJd"><a href="#">1976</a></li><li class="f-thide" id="auto-id-nrCZNms25tmH2fct"><a href="#">1975</a></li><li class="f-thide" id="auto-id-XJdxsJiDzFAwlkba"><a href="#">1974</a></li><li class="f-thide" id="auto-id-uVtMbldMu4eJxxuv"><a href="#">1973</a></li><li class="f-thide" id="auto-id-hfd6gce5gGbRdN0T"><a href="#">1972</a></li><li class="f-thide" id="auto-id-1PvEQtsI0rQ6Z06w"><a href="#">1971</a></li><li class="f-thide" id="auto-id-mFu0eJFVbwD1OUrX"><a href="#">1970</a></li><li class="f-thide" id="auto-id-SBkuGx6orrTTNTyz"><a href="#">1969</a></li><li class="f-thide" id="auto-id-1MMIqzOnlxbT04sI"><a href="#">1968</a></li><li class="f-thide" id="auto-id-37dL5oKwuzEWz53u"><a href="#">1967</a></li><li class="f-thide" id="auto-id-G5IQX0miuqQhpuiL"><a href="#">1966</a></li><li class="f-thide" id="auto-id-6ThhRI7GSdn8yJMT"><a href="#">1965</a></li><li class="f-thide" id="auto-id-vRksd9VytEMheFly"><a href="#">1964</a></li><li class="f-thide" id="auto-id-VphyAH7SayGNLXn9"><a href="#">1963</a></li><li class="f-thide" id="auto-id-UceBUSaaJ5Zf3ilw"><a href="#">1962</a></li><li class="f-thide" id="auto-id-XeciSFeq5k8PhqvD"><a href="#">1961</a></li><li class="f-thide" id="auto-id-Tfo1SLDbL3x6Mnk8"><a href="#">1960</a></li><li class="f-thide" id="auto-id-Sfcs1STtNz9X5mWA"><a href="#">1959</a></li><li class="f-thide" id="auto-id-Ey8BD3R2g3yHZ0uT"><a href="#">1958</a></li><li class="f-thide" id="auto-id-6w54U34pcr1WGe4H"><a href="#">1957</a></li><li class="f-thide" id="auto-id-ohgOqCkKL99fJST9"><a href="#">1956</a></li><li class="f-thide" id="auto-id-h2q5mBlaVSTQqp8t"><a href="#">1955</a></li><li class="f-thide" id="auto-id-2PSK0TRyevnl0baF"><a href="#">1954</a></li><li class="f-thide" id="auto-id-cSDaTxdTZSrApcn8"><a href="#">1953</a></li><li class="f-thide" id="auto-id-sLywxbfZaxm6X8SZ"><a href="#">1952</a></li><li class="f-thide" id="auto-id-dwVP1hHJwmFNFE1d"><a href="#">1951</a></li><li class="f-thide" id="auto-id-7lcShGUwMmtrvRuT"><a href="#">1950</a></li><li class="f-thide" id="auto-id-PoKHycSlbNByUXJJ"><a href="#">1949</a></li><li class="f-thide" id="auto-id-CXIDhtyh9C4cLeFD"><a href="#">1948</a></li><li class="f-thide" id="auto-id-zbf2UsCPpyOH7m80"><a href="#">1947</a></li><li class="f-thide" id="auto-id-I9rAXgHaLAoOzT92"><a href="#">1946</a></li><li class="f-thide" id="auto-id-qQIaV4sad0lE4VMm"><a href="#">1945</a></li><li class="f-thide" id="auto-id-Da1q8ZwXn5kDIhDr"><a href="#">1944</a></li><li class="f-thide" id="auto-id-wqAfOdvwAXGeiG0d"><a href="#">1943</a></li><li class="f-thide" id="auto-id-mJWSr2MVLOxDSxSa"><a href="#">1942</a></li><li class="f-thide" id="auto-id-SpHxclvi4KF6mXZk"><a href="#">1941</a></li><li class="f-thide" id="auto-id-NuZLz8FmR0Rr4a6e"><a href="#">1940</a></li><li class="f-thide" id="auto-id-147TJVpWiNMdgSVO"><a href="#">1939</a></li><li class="f-thide" id="auto-id-FenKMc8uDyX00zh3"><a href="#">1938</a></li><li class="f-thide" id="auto-id-8UTgnCBpOvfFfz8P"><a href="#">1937</a></li><li class="f-thide" id="auto-id-c8cUBybuoRfWDH1q"><a href="#">1936</a></li><li class="f-thide" id="auto-id-TfN9gTST1D3JS06B"><a href="#">1935</a></li><li class="f-thide" id="auto-id-fMo5dR3rQ2NAkfi1"><a href="#">1934</a></li><li class="f-thide" id="auto-id-o1JorF0zOVVBp5gn"><a href="#">1933</a></li><li class="f-thide" id="auto-id-dhFEoV10FgpNXOfT"><a href="#">1932</a></li><li class="f-thide" id="auto-id-QpLLh0PASitSwyBo"><a href="#">1931</a></li><li class="f-thide" id="auto-id-T0ZIsUTKqXKrZXyH"><a href="#">1930</a></li><li class="f-thide" id="auto-id-B2wcA8dlE0QBJcO1"><a href="#">1929</a></li><li class="f-thide" id="auto-id-rTdq8LbitqbcFKgn"><a href="#">1928</a></li><li class="f-thide" id="auto-id-kpnJAQ5CdoiGt9Uc"><a href="#">1927</a></li><li class="f-thide" id="auto-id-ok03bmblhfJW0txZ"><a href="#">1926</a></li><li class="f-thide" id="auto-id-mgIfHxcz2itHJsRu"><a href="#">1925</a></li><li class="f-thide" id="auto-id-7TTZR0IdPe7ehOgN"><a href="#">1924</a></li><li class="f-thide" id="auto-id-LWh1vPTKa7nTh9UZ"><a href="#">1923</a></li><li class="f-thide" id="auto-id-8fu6FwfcrkOKWWuP"><a href="#">1922</a></li><li class="f-thide" id="auto-id-CGlIdpZeDiQhd5M8"><a href="#">1921</a></li><li class="f-thide" id="auto-id-iVqCzzsg4cT8xwKg"><a href="#">1920</a></li></ul>
                        </div>
                        <span class="wrd f-fl">年</span>
                        <div class="u-slt u-slt-2 f-pr" id="mselect">
                            <span class="curr">-</span>
                            <i class="btn" id="auto-id-bIHZNmdtrMOHnrha"></i>
                            <ul style="display: none;">
                                <li class="f-thide" id="auto-id-vvnNz8SVotkX8KVC"><a href="#">01</a></li><li class="f-thide" id="auto-id-u7fTrky7b7NQqlzk"><a href="#">02</a></li><li class="f-thide" id="auto-id-TZKt8H2dlSWkQxvA"><a href="#">03</a></li><li class="f-thide" id="auto-id-RovColPI795qIWXM"><a href="#">04</a></li><li class="f-thide" id="auto-id-sO51C6z3cl2R0mIB"><a href="#">05</a></li><li class="f-thide" id="auto-id-zFTrmLHvnitBT8NE"><a href="#">06</a></li><li class="f-thide" id="auto-id-tSHA0G44Pl5B1S5G"><a href="#">07</a></li><li class="f-thide" id="auto-id-R141DQUcbmD6TcTR"><a href="#">08</a></li><li class="f-thide" id="auto-id-MxucoUmd9tkovBUp"><a href="#">09</a></li><li class="f-thide" id="auto-id-MSC5BTJQXVaRtVNp"><a href="#">10</a></li><li class="f-thide" id="auto-id-zM6XULvS6pf4tkT7"><a href="#">11</a></li><li class="f-thide" id="auto-id-Zwtc4teiiRt6gdpO"><a href="#">12</a></li></ul>
                        </div>
                        <span class="wrd f-fl">月</span>
                        <div class="u-slt u-slt-2 f-pr" id="dselect">
                            <span class="curr">-</span>
                            <i class="btn" id="auto-id-eNOvKcHIF7cMabv1"></i>
                            <ul style="display: none;">
                            </ul>
                        </div>
                        <span class="wrd f-fl">日</span>
                    </div>
                    <div class="itm itm-1 f-cb" style="z-index:10;">
                        <label class="lab">地区：</label>
                        <div class="u-slt f-pr" id="pselect">
                            <span class="curr">福建省</span>
                            <i class="btn" id="auto-id-JV34N4PAnOolggXg"></i>
                            <ul style="display: none;"><!-- ie6下，高超过150px就设_height:150px; -->
                                <li class="f-thide" id="auto-id-kZCx15fmMqs0lhVT"><a href="#">直辖市</a></li><li class="f-thide" id="auto-id-65GdIfREWuvqklR8"><a href="#">特别行政区</a></li><li class="f-thide" id="auto-id-MzVDdhNGwDvJCPFc"><a href="#">河北省</a></li><li class="f-thide" id="auto-id-ZhOpTzOrFBTq6HfQ"><a href="#">山西省</a></li><li class="f-thide" id="auto-id-H1HbuOFg1JRz0pDT"><a href="#">内蒙古</a></li><li class="f-thide" id="auto-id-DZXwmrWD5uTq8nLC"><a href="#">辽宁省</a></li><li class="f-thide" id="auto-id-WQAnKebmfTcn5RZf"><a href="#">吉林省</a></li><li class="f-thide" id="auto-id-UlinTzOcosqAO0gL"><a href="#">黑龙江省</a></li><li class="f-thide" id="auto-id-NRRRkP36bbCMEbTp"><a href="#">江苏省</a></li><li class="f-thide" id="auto-id-nuMw7pLbf2wZRQeb"><a href="#">浙江省</a></li><li class="f-thide" id="auto-id-mSQ0MSS5uG1otpb0"><a href="#">安徽省</a></li><li class="f-thide" id="auto-id-o3nE71z81Hag8UkK"><a href="#">福建省</a></li><li class="f-thide" id="auto-id-eb3aNGkmgkkoGOTw"><a href="#">江西省</a></li><li class="f-thide" id="auto-id-OqgD25c8zNM5I34J"><a href="#">山东省</a></li><li class="f-thide" id="auto-id-JWRhsxPiCVRWJWnM"><a href="#">河南省</a></li><li class="f-thide" id="auto-id-VdofGmGwwb6HIbFF"><a href="#">湖北省</a></li><li class="f-thide" id="auto-id-J62ZVD0oZEOEcX4z"><a href="#">湖南省</a></li><li class="f-thide" id="auto-id-71sgvyUQG2033J9q"><a href="#">广东省</a></li><li class="f-thide" id="auto-id-U27Dk6HBEHFdIutn"><a href="#">广西</a></li><li class="f-thide" id="auto-id-Sx8Cz3POJOOBM7JG"><a href="#">海南省</a></li><li class="f-thide" id="auto-id-CqcsfQOMquCSAV4I"><a href="#">四川省</a></li><li class="f-thide" id="auto-id-FCkTcNGg78vUMmRF"><a href="#">贵州省</a></li><li class="f-thide" id="auto-id-tbNstGQZISi0rf6F"><a href="#">云南省</a></li><li class="f-thide" id="auto-id-MB5SgX5hni6Dc27r"><a href="#">西藏</a></li><li class="f-thide" id="auto-id-gHyQSoMbNf4P3rBi"><a href="#">陕西省</a></li><li class="f-thide" id="auto-id-obJck87Lg8Xq1PgH"><a href="#">甘肃省</a></li><li class="f-thide" id="auto-id-MmC9yIvSMJNgOPrk"><a href="#">青海省</a></li><li class="f-thide" id="auto-id-IdSFTS9yTaIOUlyJ"><a href="#">宁夏</a></li><li class="f-thide" id="auto-id-vfrC7D4PeK0mFaR7"><a href="#">新疆</a></li><li class="f-thide" id="auto-id-olAeHWz7O1qkyWQT"><a href="#">台湾省</a></li><li class="f-thide" id="auto-id-qR7zX9bpb73Uxmab"><a href="#">海外</a></li></ul>
                        </div>
                        <div class="u-slt f-pr" id="cselect">
                            <span class="curr f-thide">泉州市</span>
                            <i class="btn" id="auto-id-dzp2n6Hglyzize1i"></i>
                            <ul style="display: none;">
                                <li class="f-thide" id="auto-id-RotZgxS4ecUXNeKE"><a href="#">福州市</a></li><li class="f-thide" id="auto-id-Olkz51h908QvoTcr"><a href="#">厦门市</a></li><li class="f-thide" id="auto-id-krt0cu15dLfvHrbn"><a href="#">莆田市</a></li><li class="f-thide" id="auto-id-XANTwdW2LcTsc5tt"><a href="#">三明市</a></li><li class="f-thide" id="auto-id-ntDsZncnMwRppC2M"><a href="#">泉州市</a></li><li class="f-thide" id="auto-id-ZmbSbGpzZDbaUGRy"><a href="#">漳州市</a></li><li class="f-thide" id="auto-id-DxlcyocMHuq6ZcTu"><a href="#">南平市</a></li><li class="f-thide" id="auto-id-O7rPXCTzR7z5SN3Z"><a href="#">龙岩市</a></li><li class="f-thide" id="auto-id-ZpyTWrD8sWSmxFKP"><a href="#">宁德市</a></li></ul>
                        </div>
                    </div>
                    <div class="itm ft">
                        <a class="u-btn2 u-btn2-2 u-btn2-w2" hidefocus="true" href="#" data-action="save"><i>保 存</i></a>
                        <a class="u-btn2 u-btn2-1 u-btn2-w2" hidefocus="true" href="#" data-action="cancel" style="display:none;"><i>取 消</i></a>
                    </div>
                </div>
                <div class="avatar f-pr">
                    <img src="http://p4.music.126.net/0pZwSIb90hSALWk6BGDF0g==/6637751697611512.jpg?param=140y140" id="avatar">
                    <span class="btm"></span>
                    <a href="#" class="upload" id="upload">更换头像</a>
                </div>
            </div>
        </form>
    </div>
    <div class="g-wrap m-edtimg f-cb">
        <div class="u-bread1 f-fw1 f-fs1">
            <a href="#" class="s-fc7" id="back">个人设置</a><span class="arr s-fc4">&gt;</span><span class="f-fw1">更换头像</span>
        </div>
        <div id="cropBox"><div class="m-edtimg f-cb">
                <div class="hd j-flag">
                    <form action="/upload/img" class="ztag">
                        <div class="file">
                            <input hidefocus="true" name="fileupload" type="file" id="auto-id-4Kl586giPgFEEHtU">
                        </div>
                    </form>
                    <a href="#" hidefocus="true" class="u-btn2 u-btn2-1 u-btn2-w4 ztag"><i>上传头像</i></a>&nbsp;&nbsp;&nbsp;
                    <span class="tip s-fc4">支持jpg、png、bmp格式的图片，且文件小于20M</span>
                </div>
                <div class="bd f-cb">
                    <div class="left j-flag">
                        <div class="img ztag f-pr">
                            <img class="dft ztag" src="../../style/web2/img/default/default_cover.png">
                            <div class="ztag f-hide f-pr">
                                <div class="rect f-pa ztag" id="auto-id-DOL0owpGOF12SSoB"><div class="zoom f-pa ztag" id="auto-id-nqL57goFh0sn2iJ1"></div></div>
                            </div>
                        </div>
                    </div>
                    <div class="right j-flag">
                        <p class="ztag">头像预览</p>
                        <div class="bpre f-pr ztag"><img class="full" src="http://p4.music.126.net/0pZwSIb90hSALWk6BGDF0g==/6637751697611512.jpg?param=180y180"></div>
                        <p class="s-fc4 ztag">大尺寸头像（180x180像素）</p>
                        <div class="spre f-pr ztag"><img class="full" src="http://p4.music.126.net/0pZwSIb90hSALWk6BGDF0g==/6637751697611512.jpg?param=180y180"></div>
                        <p class="s-fc4 ztag">小尺寸头像（40x40像素）</p>
                    </div>
                </div>
                <div class="itm ft j-flag">
                    <a href="javascript:void(0)" hidefocus="true" class="u-btn2 u-btn2-2 u-btn2-w2 ztag u-btn2-dis" id="auto-id-l8cRGvxOlKUw45Q9"><i>保 存</i></a>
                    <a href="javascript:void(0)" hidefocus="true" class="u-btn2 u-btn2-1 u-btn2-w2 ztag" id="auto-id-N8n1N13Etz2wxcxg"><i>取 消</i></a>
                </div>
            </div></div>
    </div>
</div>
</div>
