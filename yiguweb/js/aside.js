$(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() >=40){
			$("#b_qr").css("display","block");
		}
		if($(this).scrollTop() <=40){
			$("#b_qr").css("display","none");
		}
		$(".positionBox").css("top",$(this).scrollTop());
	})

	$("#top_ul").on("mouseenter","li",function(){
		$(this).css("backgroundColor","#fd7308");
		$(this).find(".slider-box").css("display","block").stop().animate({
			left:-92
		})
	})
	$("#top_ul").on("mouseleave","li",function(){
		$(this).css("backgroundColor","#000");
		$(this).find(".slider-box").stop().animate({
			left:-130
		}).css("display","none");
	})
	$("#bottom_ul").on("mouseenter","li",function(){
		$(this).css("backgroundColor","#fd7308");
		$(this).find(".slider-box").css("display","block").stop().animate({
			left:-92
		})
	})
	$("#bottom_ul").on("mouseleave","li",function(){
		$(this).css("backgroundColor","#000");
		$(this).find(".slider-box").stop().animate({
			left:-130
		}).css("display","none");
	})
	$("#b_qr").mouseenter(function(){
		$(this).find("div").css("display","block");
	})
	$("#b_qr").mouseleave(function(){
		$(this).find("div").css("display","none");
	})
	$("#top_ul").find("li").attr("isYes","false");

	$("#top_ul").find("li").click(function(){
		$("#slider-info-box").find("div").css("display","none");
		$("#slider-info-box").find("div").eq($(this).index()).css("display","block");
		if($(this).attr("isYes") == "false"){
			$("#slider-info-box").stop().animate({
			right:0
		})
			$(this).attr("isYes","true");
		}else{
			$("#slider-info-box").stop().animate({
				right:-285
			})
			$("#top_ul").find("li").attr("isYes","false");
		}
	})


	$("#top_ul").find("li").eq(2).click(function(){
		$(this).html("");
		$.ajax({
			url:"../data/myfootprint.json",
			method:"get",
			success:function(data){
				var html = "";
				var htmls = '<p class = "view">查看浏览足迹</p><p class = "bgImg"><img src = "../img/i_logo_c.png"/></p>';
				for(var i=0;i<data.length;i++){
					html += '<li><p class = "picLeft"><img src ="' + data[i].img + '"/></p><p class = "picRight"><a class = "titlea" href = "#">' + data[i].title + '</a><span>' + data[i].price + '</span><a class = "btn" href = "#">加入购物车</a></p></li>';
				}
				$("#aside_mf").html(html+htmls);
			}
		})
	})
	
	$("#top_ul").find("li").eq(3).click(function(){
		$.ajax({
			url:"../data/myfootprint.json",
			method:"get",
			success:function(data){
				var html = "";
				var htmls = '<p class = "view">查看全部收藏</p><p class = "bgImg"><img src = "../img/i_logo_c.png"/></p>';
				for(var i=0;i<data.length;i++){
					html += '<li><p class = "picLeft"><img src ="' + data[i].img + '"/></p><p class = "picRight"><a class = "titlea" href = "#">' + data[i].title + '</a><span>' + data[i].price + '</span><a class = "btn" href = "#">加入购物车</a></p></li>';
				}
				$("#collection").html(html+htmls);
			}
		})
	})

	$("#hotline").attr("isYes","false");
	$("#hotline").click(function(){

		$("#slider-info-box").find("div").css("display","none");
		$("#slider-info-box").find("div").eq(4).css("display","block");
		if($(this).attr("isYes") == "false"){
			$("#slider-info-box").stop().animate({
			right:0
		})
			$(this).attr("isYes","true");
		}else{
			$("#slider-info-box").stop().animate({
				right:-285
			})
			$(this).attr("isYes","false");
		}
	})


	$("#hotline").click(function(){
		$.ajax({
			url:"../data/services.json",
			method:"get",
			success:function(data){
				var html = "";
				var htmlt = "";
				for(var i=0;i<data.length;i++){				
					if(data[i].btn){
						html += '<li><p><img src = "' + data[i].img + '"/></p><h3>' + data[i].title + '</h3><span>' + data[i].desc + '</span><span>' + data[i].date + '</span><a href = "#">' + data[i].btn + '</a></li>';
					}else{
						htmlt += '<li><p><img src = "' + data[i].img + '"/></p><h3>' + data[i].title + '</h3><span>' + data[i].date + '</span><span>' + data[i].desc + '</span><p class = "bgImg"><img src = "' + data[i].bg + '"/></p></li>';
					}
				}
			
				$("#service").html(html + htmlt);

			}
		})
	})

	/*$(document).click(function(){
		$("#slider-info-box").stop().animate({
			right:-285
		})
	})*/

})