$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop() == 0){
			$(".logobg").css("backgroundColor","#e0e0e0").css("top","30px").css("opacity","1");
		}else{
			$(".logobg").css("top",$(window).scrollTop()).css("backgroundColor","black").css("opacity","0.7");
		}
		
	})

	$("#input-box").keyup(function(){
		if($(this).value != ""){
			var oScript = document.createElement("script");
			oScript.src = "http://suggestion.baidu.com//su?wd=" + this.value + "&cb=func";
			$("body").append(oScript);
		}else{
			$("#ul1").css("display","none");
		}
	})

	$("#input-box").blur(function(){
		$("#ul1").css("display","none");

	})

	$(".car").mouseenter(function(){
		$("#car-from").css("display","block");
		$("#now").find("b").attr("class","iconfont icon-arrLeft-fill");
	})
	$(".car").mouseleave(function(){
		$("#car-from").mouseover(function(){
			$(this).css("display","block");
			$("#now").find("b").attr("class","iconfont icon-arrRight-fill");
		})
		$("#car-from").mouseout(function(){
			$(this).css("display","none");
		
		})
		$("#now").find("b").attr("class","iconfont icon-arrRight-fill");
		$("#car-from").css("display","none");
	})


	var oImgs = $(".banner").find(".pic").find("li");
	var oBtns = $(".banner").find(".num").find("li");
	var iNow = 0;
	var timer = null;
	oBtns.click(function(){
		iNow = $(this).index();
		oBtns.attr("class","");
		oBtns.eq(iNow).attr("class","active");
		oImgs.stop().animate({
			opacity:0,
			width:0,
			height:0,
			marginLeft:921,
			marginTop:240
		})
		oImgs.eq(iNow).stop().animate({
			opacity:1,
			width:1920,
			height:480,
			marginLeft:0,
			marginTop:0
		})
	})
	/*timer = setInterval(function(){
		iNow++;
		oBtns.attr("class","");
		oBtns.eq(iNow).attr("class","active");
		oImgs.eq(iNow-1).stop().animate({
			opacity:0,
			width:0,
			height:0,
			marginLeft:921,
			marginTop:240

		},1000)
		oImgs.eq(iNow).stop().animate({
			opacity:1,
			width:1920,
			height:480,
			marginLeft:0,
			marginTop:0

		},1000)
		if(iNow == oImgs.size()){
			oImgs.eq(0).stop().animate({
				opacity:1,
				width:1920,
				height:480,
				marginLeft:0,
				marginTop:0
			},1000)
			oBtns.eq(0).attr("class","active");
			iNow = 0;
		}
		
	},3000);*/

	//选项卡下载数据
	$("#optCard").find("li").mouseenter(function(){
		$("#content").css("display","block");
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
				$("#content").html(htmlp);
			}
		})


		$("#content").css("top",(48*(iNow+1)-11));
		$("#content").mouseenter(function(){
			$(this).css("display","block");
		})
		$("#content").mouseleave(function(){
			$(this).css("display","none");
		})
	})
	$("#optCard").find("li").mouseleave(function(){
		$("#content").css("display","none");
	})
		


	$.ajax({
		url:"../data/pic.json",
		method:"get",
		success: function(data){
			// alert(data);
			for(var i=0;i<data.length;i++){
				var oLi = document.createElement("li");
				var oImg = document.createElement("img");
				oImg.src = data[i].img;
				var oDiv1 = document.createElement("div");
				oDiv1.className = "label";
				var oDiv2 = document.createElement("div");
				oDiv2.className = "label1";
				var oH = document.createElement("h3");
				oH.innerHTML = data[i].title;
				var oP = document.createElement("p");
				oP.innerHTML = data[i].des;
				oDiv2.append(oH);
				oDiv2.append(oP);
				oDiv1.append(oDiv2);
				oLi.append(oDiv1);
				oLi.append(oImg);
				$("#ul_li").append(oLi);
			}
		 }
	})

		$("#ul_li").on("mouseenter","li",function(){
			$(this).stop().animate({
				left:5
			})
		})
		$("#ul_li").on("mouseleave","li",function(){
			$(this).stop().animate({
				left:0
			})
		})

		$(".w_l").on("mouseenter","p",function(){
			$(this).stop().animate({
				left:9
			})
		})

		$(".w_l").on("mouseleave","p",function(){
			$(this).stop().animate({
				left:0
			})
		})

		$.ajax({
			url:"../data/pic_r.json",
			method:"get",
			success:function(data){
				var html = "";
				for(var i=0;i<data.length;i++){
					 html += '<li><img src="'+ data[i].img +'"/></li>';
					$("#ul2").html(html);

					var htmlf = '<img src = "'+ data[0].img + '"/><p>'+ data[0].title +'</p>';
					$("#pic-bottom").find(".left").html(htmlf);
				}
			}
		})

		var timer = null;
		var iNow = 0;
		timer = setInterval(function(){
			iNow ++;
			$("#pic-bottom").find("li").css("backgroundImage","");
			$("#pic-bottom").find("li").eq(iNow-1).css("backgroundImage","url(../img/bg1.png)");
			$.ajax({
				url:"../data/pic_r.json",
				method:"get",
				success:function(data){
					var htmlf = '<img src="'+data[iNow-1].img +'"</><p>'+ data[iNow-1].title +'</p>';		
						$("#pic-bottom").find(".left").html(htmlf);
						if(iNow == 4){
							iNow = 0;
							}
						}
			})
		},3000);

		$("#pic-bottom").on("mouseenter","li",function(){
			var iNow = $(this).index();
			$("#pic-bottom").find("li").css("backgroundImage","");
			$(this).css("backgroundImage","url(../img/bg1.png)");
			var html1= "";
			$.ajax({
				url:"../data/pic_r.json",
				method:"get",
				success:function(data){
					 html1 = '<img src="' + data[iNow].img + '"/><p>' + data[iNow].title + '</p>';
					$("#pic-bottom").find(".left").html(html1);

				}
			})
		})


		$.ajax({
			url:"../data/fruits.json",
			method:"get",
			success:function(data){
				var html = "";
				for(var i=0;i<data.length;i++){
					if(data[i].pic){
						html +='<li><img src = "' + data[i].pic + '"/></li>';
					}else{
						html += '<li><img src = "' + data[i].img +'"/><a>' + data[i].title + '</a><p><b>'+ data[i].price +'</b><span>' + data[i].exprice + '</span></p><i>加入购物车</i></li>';
					}
					$(".fru_r").html(html);
				}
			}
		})

		$(".fru_r").on("mouseenter","li",function(){
			$(this).find("i").stop().animate({
				bottom:0
			},400)
			$(".fru_r").on("mouseenter","i",function(){
				$(this).animate({
					textIndent:5
				},400)
			})
			$(".fru_r").on("mouseleave","i",function(){
				$(this).css("textIndent",0);
				$(".fru_r").on("mouseleave","li",function(){
				$(this).find("i").stop().animate({
					bottom:-35
				},400)

			})
			})
		})

		$(".fru_r").on("mouseleave","li",function(){
			$(this).find("i").stop().animate({
				bottom:-35
			},100)

		})

		$(".fru_r").on("mouseenter","img",function(){
			$(this).stop().animate({
				left:5
			})
		})
		$(".fru_r").on("mouseleave","img",function(){
			$(this).stop().animate({
				left:0
			})
		})

		$(".fru_r").on("mouseenter","a",function(){
			$(this).stop().animate({
				left:5
			})
		})

		$(".fru_r").on("mouseleave","a",function(){
			$(this).stop().animate({
				left:0
			})
		})
		
		$.ajax({
			url:"../data/meat.json",
			method:"get",
			success:function(data){
				var html = "";
				var html1="";
				var html2 = "";
				for(var i=0;i<data.length;i++){
					if(i == 0){
						html = '<div><img src = "' + data[0].pic + '"/></div>';
						$(".meat").find(".m_l").append(html);
					}else if(i>0 && i<7){
						 html1 += '<li><img src ="' + data[i].img + '"/><div><a>' +data[i].title + '</a></div><p><b>' +data[i].price + '</b><span>' + data[i].exprice + '</span></p><div>加入购物车</div></li>';
						$(".meat").find(".m_m").html(html1);
					}else{
						 html2 += '<li><img src ="' + data[i].pic + '"/></li>';
						$(".meat").find(".m_r").html(html2); 
					}
				}
			}
		})
		$.ajax({
			url:"../data/grain.json",
			method:"get",
			success:function(data){
				var html = "";
				var html1="";
				var html2 = "";
				for(var i=0;i<data.length;i++){

					if(i == 0){
						html = '<div><img src = "' + data[0].pic + '"/></div>';
						$(".grain").find(".m_l").append(html);
					}else if(i>0 && i<7){
						 html1 += '<li><img src ="' + data[i].img + '"/><div><a href = "#" title = "' + data[i].alt +'">' +data[i].title + '</a></div><p><b>' +data[i].price + '</b><span>' + data[i].exprice + '</span></p><div>加入购物车</div></li>';
						$(".grain").find(".m_m").html(html1);
					}else{
						 html2 += '<li><img src ="' + data[i].pic + '"/></li>';
						$(".grain").find(".m_r").html(html2); 
					}
					
				}
			}
		})


		$(".m_m").on("mouseenter","li",function(){
			$(this).find("div").eq(1).stop().animate({
				bottom:0
			})
		})
		$(".m_m").on("mouseleave","li",function(){
			$(this).find("div").eq(1).stop().animate({
				bottom:-35
			})
		})

		$(".m_r").on("mouseenter","img",function(){
			$(this).stop().animate({
				left:5
			})
		})
		$(".m_r").on("mouseleave","img",function(){
			$(this).stop().animate({
				left:0
			})
		})
		$.ajax({
			url:"../data/drink.json",
			method:"get",
			success:function(data){
				var html = "";
				var html1="";
				var html2 = "";
				var html3 = "";
				for(var i=0;i<data.length;i++){

					if(i == 0){
						html = '<div><img src = "' + data[0].img + '"/></div>';
						$(".drink").find(".m_l").append(html);
					}else if(i>0 && i<3){
						html3 += '<li><img src = "' + data[i].img + '"/></li>';
						$(".drink").find(".m_m").html(html3);
					} else if(i>2 && i<5){
						 html1 += '<li><img src ="' + data[i].pic + '"/><div><a href = "#" title = "' + data[i].title +'">' +data[i].title + '</a></div><p><b>' +data[i].price + '</b><span>' + data[i].exprice + '</span></p><div>加入购物车</div></li>';
						$(".drink").find(".m_m2").html(html1);
					}else{
						 html2 = '<img src ="' + data[i].img + '"/>';
						$(".drink").find(".m_r").html(html2); 
					}
					
				}
			}
		})

		$(".drink").on("mouseenter","li",function(){
			$(this).find("div").eq(1).stop().animate({
				bottom:0
			},400)
			$(".drink").on("mouseenter","div:nth-of-type(2)",function(){
				$(this).animate({
					textIndent:5
				},400)
			})
			$(".drink").on("mouseleave","div:nth-of-type(2)",function(){
				$(this).css("textIndent",0);
				$(".drink").on("mouseleave","li",function(){
				$(this).find("div:nth-of-type(2)").stop().animate({
					bottom:-35
				},400)

			})
			})
		})

		$(".drink").on("mouseleave","li",function(){
			$(this).find("div").eq(1).stop().animate({
				bottom:-35
			},1000)

		})

		$(".drink").on("mouseenter","img",function(){
			$(this).stop().animate({
				left:5
			})
		})
		$(".drink").on("mouseleave","img",function(){
			$(this).stop().animate({
				left:0
			})
		})

		$(".drink").on("mouseenter","a",function(){
			$(this).stop().animate({
				left:5
			}).css("color","#8ea227")
		})

		$(".drink").on("mouseleave","a",function(){
			$(this).stop().animate({
				left:0
			}).css("color","#000")
		})

		$.ajax({
			url:"../data/theme.json",
			method:"get",
			success:function(data){
				var html = "";
				var htmlp = "";
				for(var i = 0; i<data.length; i++){
					
					if(i==0){
						html = '<div><img src ="' + data[0].img +'"/></div>';
						$(".theme").find(".m_l").append(html);
					}else{
						if(data[i].img){
							htmlp += '<li><img src = "' + data[i].img + '"/></li>';
						}else{
							htmlp += '<li><img src ="' + data[i].pic + '"/><div><a href = "#" title = "' + data[i].title +'">' + data[i].title + '</a></div><p><b>' + data[i].price + '</b><span>' + data[i].exprice + '</span></p><div>加入购物车</div></li>';
							
						}
						$(".theme").find(".m_m").html(htmlp);
					}
				}
			}
		})

		$(".theme").on("mouseenter","li",function(){
			$(this).find("div").eq(1).stop().animate({
				bottom:35
			},400)
			$(".theme").on("mouseenter","div:nth-of-type(2)",function(){
				$(this).animate({
					textIndent:5
				},400)
			})
			$(".theme").on("mouseleave","div:nth-of-type(2)",function(){
				$(this).css("textIndent",0);
				$(".theme").on("mouseleave","li",function(){
				$(this).find("div:nth-of-type(2)").stop().animate({
					bottom:-35
				},400)

			})
			})
		})

		$(".theme").on("mouseleave","li",function(){
			$(this).find("div").eq(1).stop().animate({
				bottom:-35
			},1000)

		})

		$(".theme").on("mouseenter","img",function(){
			$(this).stop().animate({
				left:5
			})
		})
		$(".theme").on("mouseleave","img",function(){
			$(this).stop().animate({
				left:0
			})
		})

		$(".theme").on("mouseenter","a",function(){
			$(this).stop().animate({
				left:5
			}).css("color","#8ea227")
		})

		$(".theme").on("mouseleave","a",function(){
			$(this).stop().animate({
				left:0
			}).css("color","#000")
		})

		$.ajax({
			url:"../data/box.json",
			method:"get",
			success:function(data){
				var html = "";
				var html1="";
				var html2 = "";
				for(var i=0;i<data.length;i++){

					if(i == 0){
						html = '<div><img src = "' + data[0].img + '"/></div>';
						$(".box").find(".m_l").append(html);
					}else if(i>0 && i<7){
						 html1 += '<li><img src ="' + data[i].img + '"/><div><a href = "#" title = "' + data[i].alt +'">' +data[i].title + '</a></div><p><b>' +data[i].price + '</b><span>' + data[i].exprice + '</span></p><div>加入购物车</div></li>';
						$(".box").find(".m_m").html(html1);
					}else{
						 html2 += '<li><img src ="' + data[i].img + '"/></li>';
						$(".box").find(".m_r").html(html2); 
					}
					
				}
			}
		})

		$.ajax({
			url:"../data/life.json",
			method:"get",
			success:function(data){
				var html = "";
				var htmls = "";
				for(var i=0;i<data.length;i++){
					if(i==0){
						html = '<div><img src = "' + data[0].img + '"/></div>';
						$(".life").find(".m_l").append(html);
					}else{
						if(data[i].img){
							htmls += '<li><img src ="' +data[i].img +'"/></li>';
						}else{
							htmls += '<li><img src = "' + data[i].pic + '"/><a title = "'+ data[i].title +'" >' + data[i].title + '</a><p><b>' + data[i].price + '</b><span>' + data[i].exprice + '</span></p><div><a>加入购物车</a></div>';
						}
						$(".life").find("ul").html(htmls);
					}
				}
			}
		})

		$(".life").on("mouseenter","li",function(){
			$(this).find("div").stop().animate({
				bottom:35
			})
			$(".life").on("mouseenter","div",function(){
				$(this).find("a").stop().animate({
					left:5
				}).css("color","#fff")
				
			})
			$(".life").on("mouseleave","div",function(){
				$(this).find("a").stop().animate({
					left:0
				}).css("color","#fff")
			})
				
		})
		$(".life").on("mouseleave","li",function(){
			$(this).find("div").stop().animate({
				bottom:0
			})
		})
		$(".life").on("mouseenter","img",function(){
			$(this).stop().animate({
				left:5
			})
		})
		$(".life").on("mouseleave","img",function(){
			$(this).stop().animate({
				left:0
			})
		})
		$(".life").on("mouseenter","a:nth-of-type(1)",function(){
			$(this).stop().animate({
				left:5
			}).css("color","#9bae39")
		})
		$(".life").on("mouseleave","a:nth-of-type(1)",function(){
			$(this).stop().animate({
				left:0
			}).css("color","#000")
		})

		$(window).scroll(function(){
			if($(window).scrollTop() == 0){
				$(".aside").css("zIndex","101");
				$(".logobg").css("zIndex","0");
				$(".car").css("zIndex","2");
			}else{
				$(".aside").css("zIndex","40");
				$(".logobg").css("zIndex","41");
				$(".car").css("zIndex","42");
			}	
		})
		$("#person").attr("isYes","false");
		$("#person").click(function(){
			if($(this).attr("isYes") == "false"){
				$("#my").stop().animate({
					right:38
				}).css("zIndex","100")
				$(this).attr("isYes","true");
			}else{
				$("#my").stop().animate({
					right:-318
				})
				$(this).attr("isYes","false");
			}
		})

		$("#shop_car").mouseenter(function(){
			$(this).css("backgroundColor","#fd7308")
		})
		$("#shop_car").mouseleave(function(){
			$(this).css("backgroundColor","#000")
		})
		$("#shop_car").attr("isYes","false");
		$("#shop_car").click(function(){
			if($(this).attr("isYes") == "false"){
				$("#shopcar").stop().animate({
					right:38
				}).css("zIndex","100")
				$(this).attr("isYes","true");
			}else{
				$("#shopcar").stop().animate({
					right:-318
				})
				$(this).attr("isYes","false");
			}
		})
		$("#footprintBtn").attr("isYes","false");
		$("#footprintBtn").click(function(){
			if($(this).attr("isYes") == "false"){
				$("#footprint").stop().animate({
					right:38
				}).css("zIndex","100")
				$(this).attr("isYes","true");
			}else{
				$("#footprint").stop().animate({
					right:-318
				})
				$(this).attr("isYes","false");
			}
		})
		$("#collectBtn").attr("isYes","false");
		$("#collectBtn").click(function(){
			if($(this).attr("isYes") == "false"){
				$("#collect").stop().animate({
					right:38
				}).css("zIndex","100")
				$(this).attr("isYes","true");
			}else{
				$("#collect").stop().animate({
					right:-318
				})
				$(this).attr("isYes","false");
			}
		})
		$("#telBtn").attr("isYes","false");
		$("#telBtn").click(function(){
			if($(this).attr("isYes") == "false"){
				$("#tel").stop().animate({
					right:38
				}).css("zIndex","100")
				$(this).attr("isYes","true");
			}else{
				$("#tel").stop().animate({
					right:-318
				})
				$(this).attr("isYes","false");
			}
		})

		$(window).scroll(function(){
			$("#my").css("top",$(window).scrollTop());
			$("#shopcar").css("top",$(window).scrollTop());
			$("#footprint").css("top",$(window).scrollTop());
			$("#tel").css("top",$(window).scrollTop());
			$("#collect").css("top",$(window).scrollTop());
		})

		$("#person").mouseenter(function(){
			$(this).css("backgroundColor","#fd7308");
			$(this).find("p").css("display","block").stop().animate({
				left:-92
			})
		})
		$("#person").mouseleave(function(){
			$(this).css("backgroundColor","#000")
			$(this).find("p").css("display","none").animate({
				left:-130
			});
		})
		$("#footprintBtn").mouseenter(function(){
			$(this).css("backgroundColor","#fd7308");
			$(this).find("p").css("display","block").stop().animate({
				left:-92
			})
		})
		$("#footprintBtn").mouseleave(function(){
			$(this).css("backgroundColor","#000");
			$(this).find("p").css("display","none").stop().animate({
				left:-130
			})
		})
		$("#collectBtn").mouseenter(function(){
			$(this).css("backgroundColor","#fd7308");
			$(this).find("p").css("display","block").stop().animate({
				left:-92
			})
		})
		$("#collectBtn").mouseleave(function(){
			$(this).css("backgroundColor","#000");
			$(this).find("p").css("display","none").stop().animate({
				left:-130
			})
		})
		$("#telBtn").mouseenter(function(){
			$(this).css("backgroundColor","#fd7308");
			$(this).find("#tel_s").css("display","block").stop().animate({
				left:-92
			})
		})
		$("#telBtn").mouseleave(function(){
			$(this).css("backgroundColor","#000");
		})
		$("#bell").mouseenter(function(){
			$(this).css("backgroundColor","#fd7308");
		})
		$("#bell").mouseleave(function(){
			$(this).css("backgroundColor","#000");
		})
		

})

function func(data){
	if(data.s.length){
		$("#ul1").html("");
		$("#ul1").css("display","block");
		for(var i=0;i<data.s.length;i++){
			var oLi = document.createElement("li");
			var oA = document.createElement("a");
			oA.innerHTML = data.s[i];
			oLi.appendChild(oA);
			$("#ul1").append(oLi);

		}
	}else{
		$("#ul1").css("display","none");
	}
}