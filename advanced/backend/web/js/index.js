/**
 * Created by Administrator on 2016/2/16.
 */
//=================================================
function addSongEditEvent(){
    $('#file_upload_mp3').uploadify({
        'formData'     : {
            'timestamp' : window.TIMESTAMP,
            'token'     : window.TOKEN
        },
        'swf'      : '/plugin/uploadify/uploadify.swf',
        'uploader' : '/plugin/uploadify/uploadify.php',
        'fileTypeExts':'*.mp3'
    });

    swfobject.addDomLoadEvent(function () {
        var swf = new fullAvatarEditor("/plugin/fullAvatarEditor-2.3/fullAvatarEditor.swf", "/plugin/fullAvatarEditor-2.3/expressInstall.swf", "swfContainerCover", {
                id : 'swf',
                upload_url : '/song/uploadcover',	//上传接口
                method : 'post',	//传递到上传接口中的查询参数的提交方式。更改该值时，请注意更改上传接口中的查询参数的接收方式
                src_upload : 0,		//是否上传原图片的选项，有以下值：0-不上传；1-上传；2-显示复选框由用户选择
                avatar_box_border_width : 0,
                avatar_field_names:'coverimg',
                avatar_sizes : '200*200',
                avatar_sizes_desc : '200*200像素',
                tab_active:'upload',
                tab_visible:'false',
            }, function (msg) {
                console.log(msg);
                switch(msg.code)
                {
                    case 1 : break;
                    case 2 :
                        document.getElementById("upload").style.display = "inline";
                        break;
                    case 3 :
                        break;
                    case 5 :
                        if(msg.type == 0)
                        {
                        }
                        break;
                }
            }
        );
    });
}