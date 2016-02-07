var t;
var playType = new Array();
playType[0] = 'icn-one';
playType[1] = 'icn-loop';
playType[2] = 'icn-shuffle';
var playTypeTitle = new Array();
playTypeTitle[0] = '单曲循环';
playTypeTitle[1] = '循环';
playTypeTitle[2] = '随机';
var pti = 0;
function closeBar(){
	$(".m-mask").hide();
	$(".z-show").hide();
}

function showBar(){
	$("#lrBar").show();
	$("#loginBar").hide();
	$("#regBar").hide();
	$(".m-mask").show();
	$(".z-show").show();
	return false;
}

function showTList(){
	$(".m-tlist").show();
}
function closeTList(){
	$(".m-tlist").hide();
}
function logout(){
	$.ajax({
		type:'post',
		url:window.LogoutUrl,
		dataType:'json',
		success:function(data){
			if(data.code == 1){
				loadTopHead();
			}
		}
	});
	return false;
}

function bindTopHeadEvent(){
	$(".m-tophead").mouseover(showTList);
	$(".m-tophead").mouseout(closeTList);
	$(".m-tophead a.logoutBtn").click(logout);
	$(".m-tophead a.login").click(showBar);
}
function loadTopHead(){
	$.ajax({
		type:'post',
		dataType:'json',
		url:window.LoadTopHeadUrl,
		success:function(data){
			if(data.code == 1){
				$(".m-tophead").get(0).outerHTML = data.data;
				bindTopHeadEvent();
			}
		}
	});
}
var isShow=false;
var listShow=false;
var lock = false;
function playBarShow(){
	if(!isShow && !$(this).is(":animated")){
		$(".m-playbar").stop(false,false).animate({top:"-53px"}, 100);
		isShow = true;
	}
}
function playBarHide(){
	if(isShow && !$(this).is(":animated") && !lock&&!listShow){
		$(".m-playbar").stop(false,false).delay(400).animate({top:"-7.21px"}, 500);
		isShow = false;
	}
}

function playListShow(){
	$("#g_playlist").show();
	listShow=true;
}
function playListHide(){
	$("#g_playlist").hide();
	listShow=false;
}
//加载音乐信息
function loadSong(id){
	$.ajax({
		type:'get',
		url:'http://f.music.com/song/getinfo',
		dataType:'json',
		data:{id:id},
		success:function(data){
			if(data.code == 1){

				$("audio").attr('src',data.data.src);
				$("#song_img img").attr('src', data.data.cover);
				$("#songinfo a.name").attr('title', data.data.name);
				$("#songinfo a.name").text(data.data.name);
				$("#song_author").attr('title', data.data.author);
				$("#song_author a").text(data.data.author);
				$("#mCSB_1_container").html(data.data.lyric);
				$("#g_playlist .listhdc p.lytit").text(data.data.name);

				var duration = data.data.duration/1000;
				var min = parseInt(duration/60);
				var cer = parseInt(duration%60);
				if(min<10){
					min = '0'+min;
				}
				if(cer<10){
					cer = '0'+cer;
				}
				$("#totalTime").text(min+':'+cer);

				$("#curTime").text('00:00');
				$(".m-pbar .cur").css('width', '0%');
				if($("#play_pause").hasClass('pas')){
					$("audio")[0].load();
					$("audio")[0].play();
					console.log($("audio").prop('duration'));
				}
			}
		}
	});
}
function playSong(){
	var id = $(this).attr('data-res-id');
	loadSongLi(id);
	$("#playlistul li").removeClass('z-sel');
	$("#playlistul li[data-id='"+id+"']").addClass('z-sel');
	loadSong(id);
	var pp=$("#play_pause");
	var player=$("audio")[0];
	player.play();
	pp.addClass('pas');
	window.clearInterval(t);
	t = window.setInterval(movePlayPosition, 1000);
}
function playSongLi(){
	var id = $(this).attr('data-id');
	$("#playlistul li").removeClass('z-sel');
	$(this).addClass('z-sel');
	loadSong(id);
	var pp=$("#play_pause");
	var player=$("audio")[0];
	player.play();
	pp.addClass('pas');
	window.clearInterval(t);
	t = window.setInterval(movePlayPosition, 1000);
}

function loadSongLi(id){
	if($("#playlistul li[data-id='"+id+"']").length > 0){
		return false;
	}
	$.ajax({
		type:'post',
		url:'http://f.music.com/song/getsongli',
		dataType:'text',
		data:{ids:id},
		success:function(data){
			$("#playlistul").append($(data));
			$("#playlistul li").off('dblclick');
			$("#playlistul li").on('dblclick', playSongLi);
		}

	});
	return false;
}
function loadSongList(pid){
	clearPlayList();
	$.ajax({
		type:'post',
		url:'http://f.music.com/song/getsongli',
		dataType:'text',
		async:false,
		data:{pid:pid},
		success:function(data){
			$("#playlistul").append($(data));
			$("#playlistul li").off('dblclick');
			$("#playlistul li").on('dblclick', playSongLi);
		}

	});
	return false;
}
function prevSong(){
	switch(pti){
		case 0:{
			$("audio")[0].play();

		}break;
		case 1:{

			var index = 0;
			$("#playlistul li").each(function(i){
				if($(this).hasClass('z-sel')){
					index = i;
				}
			});
			var count = $("#playlistul li").length;
			index = (--index+count)%count;
			console.log(index);
			$("#playlistul li").removeClass('z-sel');
			$("#playlistul li").eq(index).addClass('z-sel');
			var sid = $("#playlistul li").eq(index).attr('data-id');
			loadSong(sid);

		}break;
		case 2:{

			var count = $("#playlistul li").length;
			var index = Math.floor(Math.random()*count);
			console.log(index);
			$("#playlistul li").removeClass('z-sel');
			$("#playlistul li").eq(index).addClass('z-sel');
			var sid = $("#playlistul li").eq(index).attr('data-id');
			loadSong(sid);

		}break;
	}
}
function nextSong(){
	switch(pti){
		case 0:{
			$("audio")[0].play();
		}break;
		case 1:{
			var index = 0;
			$("#playlistul li").each(function(i){
				if($(this).hasClass('z-sel')){
					index = i;
				}
			});
			var count = $("#playlistul li").length;
			index = (++index)%count;
			console.log(index);
			$("#playlistul li").removeClass('z-sel');
			$("#playlistul li").eq(index).addClass('z-sel');
			var sid = $("#playlistul li").eq(index).attr('data-id');
			loadSong(sid);


		}break;
		case 2:{
			var count = $("#playlistul li").length;
			var index = Math.floor(Math.random()*count);
			console.log(index);
			$("#playlistul li").removeClass('z-sel');
			$("#playlistul li").eq(index).addClass('z-sel');
			var sid = $("#playlistul li").eq(index).attr('data-id');
			loadSong(sid);


		}break;
	}
}
function setPlayPosition(percent){
	var player=$("audio")[0];
	var curTime = player.duration * percent;
	player.currentTime = curTime;
	var min = parseInt(curTime/60);
	var cer = parseInt(curTime%60);
	if(min<10){
		min = '0'+min;
	}
	if(cer<10){
		cer = '0'+cer;
	}
	var w = percent * 100;
	$("#curTime").text(min+':'+cer);
}

function movePlayPosition(){
	var player=$("audio")[0];
	if(!player.paused){
		var curTime = player.currentTime;
		var percent = curTime / player.duration;
		var min = parseInt(curTime/60);
		var cer = parseInt(curTime%60);
		if(min<10){
			min = '0'+min;
		}
		if(cer<10){
			cer = '0'+cer;
		}
		var w = percent * 100;
		$(".m-pbar .cur").css('width', w+'%');
		$("#curTime").text(min+':'+cer);
	}
}
function togglePlayAndPause(){
	var pp=$("#play_pause");
	var player=$("audio")[0];
	if(player.paused){
		player.play();
		pp.addClass('pas');
		t = window.setInterval(movePlayPosition, 1000);
	}else{
		player.pause();
		pp.removeClass('pas');
		window.clearInterval(t);
	}
}
function clearPlayList(){
	$("#playlistul li").remove();
}
function playSongList(){
	var pid = $(this).attr('data-res-id');
	clearPlayList();
	loadSongList(pid);
	$("#playlistul li").removeClass('z-sel');
	$("#playlistul li:first").addClass('z-sel');
	var id = $("#playlistul li").eq(0).attr('data-id');
	console.log(id);
	loadSong(id);
	var pp=$("#play_pause");
	var player=$("audio")[0];
	player.play();
	pp.addClass('pas');
	window.clearInterval(t);
	t = window.setInterval(movePlayPosition, 1000);
}
function collectSong(sid){
	$.ajax({
		type:'get',
		dataType:'text',
		url:'http://f.music.com/playlist/select',
		success:function(data){
			layer.open({
				type: 1,
				area:['400px','300px'],
				title:'收藏',
				skin: 'layui-layer-molv',
				content: data, //这里content是一个普通的String
				btn:['确定', '新建'],
				btn1:function(){
					var pid = $("#play_list_select select").val();
					if(pid == ''){
						layer.alert('请选择歌单或新建歌单', function(index){
							layer.close(index);
						});
						return false;
					}
					$.ajax({
						type:'post',
						url:window.COLLECT_SONG_URL,
						dataType:'json',
						data:{pid:pid,sid:sid},
						success:function(data){
							layer.alert(data.msg, function(index){
								layer.close(index);
							});
						},
						error:function(){
							layer.alert('收藏失败', function(index){
								layer.close(index);
							});
						}

					});
				},
				btn2:function(index){
					layer.prompt({
						title: '新建歌单'
					},function(value, index, elem){
						$.ajax({
							type:'post',
							url:window.ADD_PLAYLIST_URL,
							dataType:'json',
							data:{name:value,sid:sid},
							success:function(data){
								layer.alert(data.msg, function(index){
									layer.close(index);
								});
							},
							error:function(){
								layer.alert('创建失败', function(index){
									layer.close(index);
								});
							}

						});
						layer.close(index);
					});
				}
			});
		}
	});
}
function delCollectSong(pid,sid){
	layer.confirm('确定从该歌单中删除此歌曲?', function(index){
		$.ajax({
			type:'post',
			url:window.DEL_COLLECT_SONG_URL,
			dataType:'json',
			data:{pid:pid,sid:sid},
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
		layer.close(index);
	});
}
//===================================================================================
function addUserInfoEvent(){
	swfobject.addDomLoadEvent(function () {
		var swf = new fullAvatarEditor("/plugin/fullAvatarEditor-2.3/fullAvatarEditor.swf", "/plugin/fullAvatarEditor-2.3/expressInstall.swf", "swfContainer", {
				id : 'swf',
				upload_url : '/user/uploadhead',	//上传接口
				method : 'post',	//传递到上传接口中的查询参数的提交方式。更改该值时，请注意更改上传接口中的查询参数的接收方式
				src_upload : 0,		//是否上传原图片的选项，有以下值：0-不上传；1-上传；2-显示复选框由用户选择
				avatar_box_border_width : 0,
				avatar_field_names:'headimg',
				avatar_sizes : '200*200',
				avatar_sizes_desc : '200*200像素',
			}, function (msg) {
				console.log(msg);
				switch(msg.code)
				{
					case 1 : break;
					case 2 :
						document.getElementById("upload").style.display = "inline";
						break;
					case 3 :
						if(msg.type == 0)
						{
							alert("摄像头已准备就绪且用户已允许使用。");
						}
						else if(msg.type == 1)
						{
							alert("摄像头已准备就绪但用户未允许使用！");
						}
						else
						{
							alert("摄像头被占用！");
						}
						break;
					case 5 :
						if(msg.type == 0)
						{
							loadTopHead();
						}
						break;
				}
			}
		);
		document.getElementById("upload").onclick=function(){
			swf.call("upload");
		};
	});
	$("#uploadImg").on("click", function(){
		$("#baseBox").hide();
		$("#uploadHead").show();
		return false;
	});

	$("#saveUserBtn").on("click",function(){
		var name = $("input[name='username']").val();
		if(name == ""){
			alert("昵称不能为空");
			return false;
		}
		$.ajax({
			type:'post',
			dataType:'json',
			url:$("#update_form").attr("action"),
			data:$("#update_form").serialize(),
			success:function(data){
				if(data.code == 1){
					alert("保存成功");
					$("#update_form .err").hide();
				}else if(data.code <= 0){
					$("#update_form .err span").html(data.msg);
					$("#update_form .err").show();
				}
			}
		});
		return false;
	});
	$(".m-tabs a").on("click",function(e){
		$(".m-tabs a").removeClass('z-slt');
		$(".tabs .tab").removeClass('current');
		$(".m-tabs a").each(function(i){
			if(this == e.currentTarget){
				$(this).addClass('z-slt');
				$(".tabs .tab").eq(i).addClass('current');
			}
		});
		return false;
	});

	$("#savePwdBtn").on("click", function(){
		var old = $("input[name='oldpwd']").val();
		var pwd = $("input[name='pwd']").val();
		var repwd =$("input[name='repwd'").val();
		if(old == ''){
			alert('原密码不能为空');
			return false;
		}
		if(pwd == ''){
			alert('新密码不能为空');
			return false;
		}
		if(repwd == ''){
			alert('确认不能为空');
			return false;
		}

		if(repwd != pwd){
			alert('两次密码不一致');
			return false;
		}
		$.ajax({
			type:'post',
			dataType:'json',
			url:$("#resetpwd_form").attr('action'),
			data:$("#resetpwd_form").serialize(),
			success:function(data){
				alert(data.msg);
			}
		});
		return false;
	});
}
//===============================================================================================
function addSongInfoEvent(){
	var lyricShow = false;
	$("#flag_ctrl").on("click", function(){
		if(!lyricShow){
			$("#flag_more").removeClass('f-hide');
			$(this).text("收起");
			$(".crl i.u-icn").removeClass('u-icn-69');
			$(".crl i.u-icn").addClass('u-icn-70');
			lyricShow = true;
		}else{
			$("#flag_more").addClass('f-hide');
			$(this).text("展开");
			$(".crl i.u-icn").removeClass('u-icn-70');
			$(".crl i.u-icn").addClass('u-icn-69');
			lyricShow = false;
		}
	});

	$("#content-operation a.u-btni-addply").click(playSong);
	$("#content-operation a.u-btni-add").click(function(){
		var id = $(this).attr('data-res-id');
		loadSongLi(id);
	});
	$("#collectBtn").click(function(){
		var sid = $(this).attr('data-res-id');
		collectSong(sid);
	});
}
//===============================================================================================
function leftPlayListEvent(){
	$(".createPlayList").click(function(){
		layer.prompt({
			title: '新建歌单'
		},function(value, index, elem){
			$.ajax({
				type:'post',
				url:window.CREATE_PLAYLIST_URL,
				dataType:'json',
				data:{name:value},
				success:function(data){
					layer.alert(data.msg, function(index){
						if(data.code == 1){
							$.get(location.href, function(data) {
								$('.container').get(0).outerHTML=data;
								addNewObjEvent();
							});
						}
						layer.close(index);
					});
				},
				error:function(){
					layer.alert('创建失败', function(index){
						layer.close(index);
					});
				}

			});
			layer.close(index);
		});
	});
	$(".delPlayList").click(function(){
		var pid = $(this).attr('data-id');
		layer.confirm('确定删除此歌单?', function(index){
			$.ajax({
				type:'post',
				url:window.DEL_PLAYLIST_URL,
				dataType:'json',
				data:{pid:pid},
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
			layer.close(index);
		});
	});
}
//===============================================================================================
function addMySongEvent(){
	leftPlayListEvent();
	$("li.j-iflag").on("mouseover",function(){
		$(this).addClass("z-hover");
		$(this).find(".hshow").show();
	});
	$("li.j-iflag").on("mouseout",function(){
		$(this).removeClass("z-hover");
		$(this).find(".hshow").hide();
	});
	$("#flag_play").click(playSongList);
	$("#flag_add").click(function(){
		var pid = $(this).attr('data-res-id');
		loadSongList(pid);
	});
	$("[data-res-action='addto']").click(function(){
		var id = $(this).attr('data-res-id');
		console.log(id);
		loadSongLi(id);
	});
	$("[data-res-action='fav']").click(function(){
		var sid = $(this).attr('data-res-id');
		console.log(sid);
		collectSong(sid);
	});
	$("[data-res-action='play']").click(playSong);
	$("[data-res-action='delete']").click(function(){
		var sid = $(this).attr('data-res-id');
		var pid = $("#flag_play").attr("data-res-id");
		delCollectSong(pid,sid);
	});
}
//=======================================================
function addPlayListEvent(){
	$("#flag_play").click(playSongList);
	$("#flag_add").click(function(){
		var pid = $(this).attr('data-res-id');
		loadSongList(pid);
	});
	$("[data-res-action='addto']").click(function(){
		var id = $(this).attr('data-res-id');
		console.log(id);
		loadSongLi(id);
	});
	$("[data-res-action='fav']").click(function(){
		var sid = $(this).attr('data-res-id');
		console.log(sid);
		collectSong(sid);
	});
	$("[data-res-action='play']").click(playSong);
	$("[data-res-action='delete']").click(function(){
		var sid = $(this).attr('data-res-id');
		var pid = $("#flag_play").attr("data-res-id");
		delCollectSong(pid,sid);
	});
}
//=======================================================
function addEditPlayListEvent(){
	leftPlayListEvent();
	$("#savePlayListBtn").on("click",function(){
		var name = $("input[name='name']").val();
		if(name == ""){
			alert("歌单名称不能为空");
			return false;
		}
		$.ajax({
			type:'post',
			dataType:'json',
			url:$("#save_playlist_form").attr("action"),
			data:$("#save_playlist_form").serialize(),
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
		return false;
	});
}
//=======================================================
function addEditCoverEvent(){
	var id=$("#playlist_id").val();
	swfobject.addDomLoadEvent(function () {
		var swf = new fullAvatarEditor("/plugin/fullAvatarEditor-2.3/fullAvatarEditor.swf", "/plugin/fullAvatarEditor-2.3/expressInstall.swf", "swfContainerCover", {
				id : 'swf',
				upload_url : '/playlist/uploadcover?id='+id,	//上传接口
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
		document.getElementById("upload").onclick=function(){
			swf.call("upload");
		};
	});
}
//===========================================================
$(function(){
	$("#g_playlist .clear").click(clearPlayList);
	$(".zbar").on("mousedown",function(ed){
		var diffX = ed.pageX - $(".z-show").offset().left;
		var diffY = ed.pageY -$(".z-show").offset().top;

		console.log(diffX+'diffX='+ed.pageX+'-'+$(".z-show").offset().left);
		console.log(diffY+'diffY'+ed.pageY+'-'+ $(".z-show").offset().top);

		$('body').on("mousemove",function(em){
			var maxX = $(window).width()-$(".z-show").width();
			var maxY = $(window).height()-$(".z-show").height();
			var y = em.pageY - diffY;
			var x = em.pageX - diffX;
			if(x<0){
				x=0;
			}
			if(y<0){
				y=0;
			}
			if(x>maxX){
				x=maxX;
			}
			if(y>maxY){
				y=maxY;
			};
			console.log(maxX+','+maxY);
			$(".z-show").css('top', y);
			$(".z-show").css('left', x);
		});
	});
	$('body').on("mouseup",function(){
		$("body").off("mousemove");
	});



	bindTopHeadEvent();
	//$("a.login").click(function(){
	//	showBar();
	//	return false;
	//});

	$("#closeBar").click(function(){
		closeBar();
	});

	$("#lrBar a.loginBtn").click(function(){
		$("#lrBar").hide();
		$("#loginBar").show();
		return false;
	});
	
	$("#lrBar a.regBtn").click(function(){
		$("#lrBar").hide();
		$("#regBar").show();
		return false;
	});
	$("a.back").click(function(){
		$("#regBar").hide();
		$("#loginBar").hide();
		$("#lrBar").show();
		return false;
	});
	$("#loginBar .regLink").click(function(){
		$("#loginBar").hide();
		$("#lrBar").hide();
		$("#regBar").show();
		return false;
	});

	$(".m-playbar").on("mouseenter",function(){
		playBarShow();
	});
	$(".m-playbar").on("mouseleave",function(){
		playBarHide();
	});
	$(".m-playbar .btn").click(function(){
		if(!lock){
			$(".m-playbar").removeClass("m-playbar-unlock");
			$(".m-playbar").addClass("m-playbar-lock");
			lock=true;
		}else{
			$(".m-playbar").removeClass("m-playbar-lock");
			$(".m-playbar").addClass("m-playbar-unlock");
			lock=false;
		}
	});

	$("#signup").click(function(){
		$.ajax({
			type:'post',
			async:false,
			dataType:'json',
			url:$("#signupForm").attr('action'),
			data:$("#signupForm").serialize(),
			success:function(data){
				alert(data.msg);
				closeBar();
				loadTopHead();
			}
		});
		return false;
	});

	$("#login").click(function(){
		$.ajax({
			type:'post',
			async:false,
			dataType:'json',
			url:$("#loginForm").attr('action'),
			data:$("#loginForm").serialize(),
			success:function(data){
				if(data.code == 1){
					closeBar();
					loadTopHead();
				}else{
					alert(data.msg);
				}

			}
		});
		return false;
	});
	$("#play_list_btn").click(function(){
			if(listShow){
				playListHide();
			}else{
				playListShow();
			}
			return false;
	});
	$("#g_playlist .close").click(function(){
		playListHide();
	});

	$("#play_type_btn").click(function(){
		pti++;
		pti = pti % 3;
		$("#play_type_btn").attr("class",'icn '+playType[pti]);
		$("#play_type_btn").attr("title",playTypeTitle[pti]);
	});


	//点击播放音乐
	$("#playlistul li").on('dblclick', playSongLi);


	$("#prev_btn").click(function(){
		prevSong();
	});
	$("#next_btn").click(function(){
		nextSong();
	});
	var volShow = false;
	$("#vol_btn").click(function(){
		if(volShow){
			$(".m-vol").hide();
			volShow = false;
		}else{
			$(".m-vol").show();
			volShow = true;
		}
		return false;
	});
	$(".m-vol .vbg").click(function(e){
		var diffY = e.pageY -$(".m-vol .vbg").offset().top;
		var top = diffY - 6;
		var h = 93 - diffY;
		if(h<0){
			h=0;
		}
		if(h>93){
			h=93;
		}
		if(top<0){
			top=0;
		}
		if(top>81){
			top=81;
		}
		$(".m-vol .curr").css('height', h+'px');
		$("#change_vol").css('top', top+'px');
		$("audio").get(0).volume=h/93;
	});
	$("#change_vol").on("mousedown", function(e){

		$('.m-vol').on("mousemove",function(em){
			var diffY = em.pageY -$(".m-vol .vbg").offset().top;
			var top = diffY - 6;
			var h = 93 - diffY;
			if(h<0){
				h=0;
			}
			if(h>93){
				h=93;
			}
			if(top<0){
				top=0;
			}
			if(top>81){
				top=81;
			}
			$(".m-vol .curr").css('height', h+'px');
			$("#change_vol").css('top', top+'px');
			$("audio").get(0).volume=h/93;
		});
	});

	$('.m-vol,body').on("mouseup",function(){
		$(".m-vol").off("mousemove");
	});

	$("#play_pause").click(function(){
		togglePlayAndPause();
	});
	$("audio").on("ended", function(){
		nextSong();
	});
	$(".m-pbar .barbg").click(function(e){
		var diffX = e.pageX -$(".m-pbar .barbg").offset().left;
		var w = diffX / 455 * 100;
		if(w<0){
			w=0;
		}
		if(w>100){
			w=100;
		}
		setPlayPosition(w/100);
		console.log(diffX);
		$(".m-pbar .cur").css('width', w+'%');
	});

	$(".m-pbar .barbg").on("mousedown", function(e){

		$('.m-pbar .barbg').on("mousemove",function(em){
			var diffX = em.pageX -$(".m-pbar .barbg").offset().left;
			var w = diffX / 455  * 100;
			if(w<0){
				w=0;
			}
			if(w>100){
				w=100;
			}

			$(".m-pbar .cur").css('width', w+'%');
		});
	});
	$('.m-pbar,body').on("mouseup",function(){
		$(".m-pbar .barbg").off("mousemove");
	});
});

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	