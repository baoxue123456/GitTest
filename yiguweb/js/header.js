$(function(){
	$("#attention").mouseenter(function(){
		$(this).find("p").css("display","block");
	})
	$("#attention").mouseleave(function(){
		$(this).find("p").css("display","none");
	})
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