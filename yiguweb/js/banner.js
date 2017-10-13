$(function(){
				var oImg = $("#slideshow").find("#pics").find("img");
				var oLis = $("#slideshow").find("ul").find("li");

				var iNow = 0;
				var timer = null;

				oLis.click(function(){
					oLis.attr("class","");
					iNow = $(this).index();
					oLis.eq(iNow).attr("class","active");
					oImg.stop().animate({
							opacity:0,
							height:0,
							width:0,
							marginTop:240,
							marginLeft:750
					})
					oImg.eq(iNow).stop().animate({
							opacity:1,
							height:480,
							width:1500,
							marginTop:0,
							marginLeft:0
					})
				})

				/*timer = setInterval(function(){
					iNow++;
					oLis.attr("class","");
					oLis.eq(iNow).attr("class","active");
					oImg.eq(iNow-1).stop().animate({
							opacity:0,
							height:0,
							width:0,
							marginTop:240,
							marginLeft:750
					})
					oImg.eq(iNow).stop().animate({
							opacity:1,
							height:480,
							width:1500,
							marginTop:0,
							marginLeft:0
					})
					if(iNow == oImg.size()){
						oImg.eq(0).stop().animate({
							opacity:1,
							height:480,
							width:1500,
							marginTop:0,
							marginLeft:0
					})
						oLis.eq(0).attr("class","active");
						iNow = 0;
					}
				},4000);*/

			})