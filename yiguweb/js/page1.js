$(function(){
	$("#list_btn").mouseenter(function(){
		$("#optCard").css("display","block");
	})
	$("#list_btn").mouseleave(function(){
		$("#optCard").css("display","none");
	})
	$("#optCard").on("mouseenter","li",function(){
		$("#listContent").css("display","block");
		var iNow = $(this).index();
		var htmlp = "",htmls1 = "",htmls2 = "",htmls3 = "",htmls4 = "",htmls5 = "";
		$.ajax({
			url:"../data/menu.json",
			method:"get",
			success:function(data){
				for(var arr in data[iNow]){
					switch(arr){
						case "arr1":
							for(var i=0;i<data[iNow].arr1.length;i++){
								if(i==9){
									htmls1+= '<span>' + data[iNow].arr1[i] + '</span><br/>';
								}else{
									htmls1 += '<span>' + data[iNow].arr1[i] + '</span>';
								}
							}
							break;
						case "arr2":
							for(var i=0;i<data[iNow].arr2.length;i++){
								htmls2 += '<span>' + data[iNow].arr2[i] + '</span>';
							}
							break;
						case "arr3":
							for(var i=0;i<data[iNow].arr3.length;i++){
								htmls3 += '<span>' + data[iNow].arr3[i] + '</span>';
							}
							break;
						case "arr4":
							for(var i=0;i<data[iNow].arr4.length;i++){
								htmls4 += '<span>' + data[iNow].arr4[i] + '</span>';
							}
							break;
						case "arr5":
							for(var i=0;i<data[iNow].arr5.length;i++){
								htmls5 += '<span>' + data[iNow].arr5[i] + '</span>';
							}
							break;
						
					}
					htmlp = '<p>' + htmls1 + '</p>' + '<p>' + htmls2 + '</p>' + '<p>' + htmls3 + '</p>' + '<p>' + htmls4 + '</p>' + '<p>' + htmls5 + '</p>';
				}
				$("#listContent").html(htmlp);
			}
		})
		$("#listContent").css("top",(48*(iNow+1)-11));
	})	
	$("#optCard").find("li").mouseleave(function(){
		$("#listContent").css("display","none");
	})
	$.ajax({
		url:"../data/main-img.json",
		method:"get",
		success:function(data){
			var html = "";
			for(var i=0;i<data.length;i++){
				html += '<li><img src="'+ data[i].img + '"/></li>';
			}
			$("#imgList").html(html);
		}
	})
	var iNow = 0;
	$.ajax({
			url:"../data/main-img.json",
			method:"get",
			success:function(data){
				var htmls = '<img src = "' + data[1].img + '"/>';
				$("#imgBox").append(htmls);
				$("#b_box").html(htmls);
			}
		})
	$("#imgList").on("mouseenter","li",function(){
		var iNow = $(this).index();
		var htmls = "";
		if(iNow != 0 && iNow != 6){
			$.ajax({
				url:"../data/main-img.json",
				method:"get",
				success:function(data){
					var htmls = '';
					htmls = '<img src = "' + data[iNow].img + '"/>';
					$("#imgBox").html('<div id = "position-box"></div>');
					$("#imgBox").append(htmls);
					$("#b_box").html(htmls);
				}
			})
		}
		
	})

	$("#imgBox").mouseover(function(){
		$(this).find("#position-box").css("display","block");
		$(".r_box").css("display","block");
	})
	$("#imgBox").mouseout(function(){
		$(this).find("#position-box").css("display","none");
		$(".r_box").css("display","none");
	})
	$("#imgBox").mousemove(function(ev){
		 var x = ev.clientX - $(this).offset().left - $("#position-box").width()/2;
		 var y = ev.clientY - $(this).offset().top - $("#position-box").height()/2;
		
		if(x<0){
			x = 0;
		}else if(x > $("#imgBox").width() - $("#position-box").width()){
			x = $("#imgBox").width() - $("#position-box").width();
		}

		if(y<0){
			y = 0;
		}else if(y > $("#imgBox").height() - $("#position-box").height()){
			y = $("#imgBox").height() - $("#position-box").height();
		}
		$("#position-box").css("left",x + "px").css("top",y + "px");
		var proportionX = x/($("#imgBox").width() - $("#position-box").width());
		var proportionY = y/($("#imgBox").height() - $("#position-box").height());
		var a = -proportionX *($("#b_box").width() - $(".r_box").width());
		var b = -proportionY *($("#b_box").height() - $(".r_box").height());
		$("#b_box").css("left",a + "px"); 
		$("#b_box").css("top",b + "px");
	})
	$.ajax({
		url:"../data/mainHot.json",
		method:"get",
		success:function(data){
			var html = "";
			for(var i=0;i<data.length;i++){
				html += '<li><div><img src = "' + data[i].img + '"/></div><p>' + data[i].price + '</p></li>';
			}
			html += html+html;
			$("#aside-hot").html(html);

		}
	})

	var timer = null;
	var iNow = 0;
	timer = setInterval(function(){
		iNow++;
		$("#aside-hot").animate({top:-550*iNow-1116},800,function(){
			if(iNow ==2){
				$("#aside-hot").css("top","-1116px");
				iNow = 0;
			}
		})
	},9000);

	$("#btn").find("span").eq(0).click(function(){
		iNow--;
		$("#aside-hot").animate({top:-550*iNow-1116},800,function(){
			if(iNow ==-2){
				$("#aside-hot").css("top","-1116px");
				iNow = 0;
			}
		})
	})
	$("#btn").find("span").eq(1).click(function(){
		iNow++;
		$("#aside-hot").animate({top:-550*iNow-1116},800,function(){
			if(iNow ==2){
				$("#aside-hot").css("top","-1116px");
				iNow = 0;
			}
		})
	})

	$.ajax({
		url:"../data/mainLeft.json",
		method:"get",
		success:function(data){
			var html = "";
			for(var i=0;i<data.length;i++){
				html += '<li><a href = "#"><img src ="' + data[i].img + '"/><p>' + data[i].title + '</p></a><span>' + data[i].price + '</span>';
			}
			$("#product").html(html);
		}
	})

	$("#con_r").find("a").click(function(){
		$("#con_r").find("a").attr("class","");
		$("#con_r").find("div").css("display","none");
		$(this).attr("class","active");
		$("#con_r").find("div").eq($(this).index()).css("display","block");
	})

})