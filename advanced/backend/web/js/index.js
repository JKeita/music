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
        'uploader' : window.UPLOAD_MP3_URL,
        'fileTypeExts':'*.mp3',
        'fileObjName':'upload',
        'fileSizeLimit':0,
        'queueSizeLimit' : 1,
        'multi':false,
        'onUploadSuccess':function(file, data, response){
            var result = JSON.parse(data);
            if(result.code == 1){
                $("#input_src").val(result.url);
                $("#input_src").show();
                $("#input_duration").val(result.duration);
            }
        }
    });

    swfobject.addDomLoadEvent(function () {
        var swf = new fullAvatarEditor("/plugin/fullAvatarEditor-2.3/fullAvatarEditor.swf", "/plugin/fullAvatarEditor-2.3/expressInstall.swf", "swfContainerCover", {
                id : 'swf',
                upload_url : window.UPLOAD_COVER_URL,	//上传接口
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
                            $("#input_cover").val(msg.content.sourceUrl);
                            $("#input_cover").show();
                        }
                        break;
                }
            }
        );
    });
    $("#saveBtn").click(function(){
        $.ajax({
           type:'post',
            dataType:'json',
            url:$("#songForm").attr('action'),
            data:$("#songForm").serialize(),
            success:function(data){
                layer.alert(data.msg,function(index){
                    if(data.code == 1){
                        $.get(location.href, function(data) {
                            $('.container').get(0).outerHTML=data;
                            addNewObjEvent();
                        });
                    }
                    layer.close(index);
                });
            }
        });
    });
}
//=================================================
function addSongListEvent(){
    $('table th input:checkbox').on('click' , function(){
        var that = this;
        $(this).closest('table').find('tr > td:first-child input:checkbox')
            .each(function(){
                this.checked = that.checked;
                $(this).closest('tr').toggleClass('selected');
            });

    });
    $("#searchBtn").click(function(){
        var key = $("#search_key").val();
        var url = $(this).attr('href');
        if(key == ''){
            return false;
        }
        url = url.replace(/_k_/,key);
        history.pushState({ path: url }, '', url);
        console.log(url);
        $.get(url, function(data) {
            $('.main-content').get(0).outerHTML=data;
            addNewObjEvent();
        });
        return false;
    });
    $(".delete").click(function(e){
        if(confirm("确定删除该歌曲？")){
            var id =$(this).attr('data-id');
            $.ajax({
                    type:'post',
                    dataType:'json',
                    url:window.DEL_SONG_URL,
                data:{
                id:id
                },
                success:function(data){
                    layer.alert(data.msg,function(index){
                        if(data.code == 1){
                            $.get(location.href, function(data) {
                                $('.main-content').get(0).outerHTML=data;
                                addNewObjEvent();
                            });
                        }
                        layer.close(index);
                    });
                }
        });
        }
        return false;
    });
    $("#deleteBtn").click(function(e){
        var checkbox = $("input[name='ids']");
        var ids = "";
        for(var i=0;i<checkbox.length;i++)
        {
            if($(checkbox[i]).prop("checked"))
            {
                if(ids != null && ids != "")
                {
                    ids = ids + ",";
                }
                ids =  ids + $(checkbox[i]).val();
            }
        }
        $.ajax({
                type:'post',
                dataType:'json',
                url:window.DEL_SONG_URL,
                data:{
                ids:ids
                },
                success:function(data){
                    layer.alert(data.msg,function(index){
                        if(data.code == 1){
                            $.get(location.href, function(data) {
                                $('.main-content').get(0).outerHTML=data;
                                addNewObjEvent();
                            });
                        }
                        layer.close(index);
                    });
                }
        });
    });
}
//=================================================
function addReportListEvent(){
    $('table th input:checkbox').on('click' , function(){
        var that = this;
        $(this).closest('table').find('tr > td:first-child input:checkbox')
            .each(function(){
                this.checked = that.checked;
                $(this).closest('tr').toggleClass('selected');
            });

    });
    $(".okBtn").click(function(e){
        if(confirm("确定通过？")){
            var id =$(this).attr('data-id');
            $.ajax({
                type:'post',
                dataType:'json',
                url:window.EXAMINE_REPORT_URL,
                data:{
                    id:id,
                    type:2
                },
                success:function(data){
                    layer.alert(data.msg,function(index){
                        if(data.code == 1){
                            $.get(location.href, function(data) {
                                $('.main-content').get(0).outerHTML=data;
                                addNewObjEvent();
                            });
                        }
                        layer.close(index);
                    });
                }
            });
        }
        return false;
    });
    $("#okBtn").click(function(e){
        var checkbox = $("input[name='ids']");
        var ids = "";
        for(var i=0;i<checkbox.length;i++)
        {
            if($(checkbox[i]).prop("checked"))
            {
                if(ids != null && ids != "")
                {
                    ids = ids + ",";
                }
                ids =  ids + $(checkbox[i]).val();
            }
        }
        $.ajax({
            type:'post',
            dataType:'json',
            url:window.EXAMINE_REPORT_URL,
            data:{
                ids:ids,
                type:2
            },
            success:function(data){
                layer.alert(data.msg,function(index){
                    if(data.code == 1){
                        $.get(location.href, function(data) {
                            $('.main-content').get(0).outerHTML=data;
                            addNewObjEvent();
                        });
                    }
                    layer.close(index);
                });
            }
        });
    });
    $(".errorBtn").click(function(e){
        if(confirm("确定违规？")){
            var id =$(this).attr('data-id');
            $.ajax({
                type:'post',
                dataType:'json',
                url:window.EXAMINE_REPORT_URL,
                data:{
                    id:id,
                    type:1
                },
                success:function(data){
                    layer.alert(data.msg,function(index){
                        if(data.code == 1){
                            $.get(location.href, function(data) {
                                $('.main-content').get(0).outerHTML=data;
                                addNewObjEvent();
                            });
                        }
                        layer.close(index);
                    });
                }
            });
        }
        return false;
    });
    $("#errorBtn").click(function(e){
        var checkbox = $("input[name='ids']");
        var ids = "";
        for(var i=0;i<checkbox.length;i++)
        {
            if($(checkbox[i]).prop("checked"))
            {
                if(ids != null && ids != "")
                {
                    ids = ids + ",";
                }
                ids =  ids + $(checkbox[i]).val();
            }
        }
        $.ajax({
            type:'post',
            dataType:'json',
            url:window.EXAMINE_REPORT_URL,
            data:{
                ids:ids,
                type:1
            },
            success:function(data){
                layer.alert(data.msg,function(index){
                    if(data.code == 1){
                        $.get(location.href, function(data) {
                            $('.main-content').get(0).outerHTML=data;
                            addNewObjEvent();
                        });
                    }
                    layer.close(index);
                });
            }
        });
    });
}