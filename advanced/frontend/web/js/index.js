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
	$("#g-playlist").show();
	listShow=true;
}
function playListHide(){
	$("#g-playlist").hide();
	listShow=false;
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
}
//===============================================================================================
$(function(){
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
	
});

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	