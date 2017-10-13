$(function(){
	$("#selectBtn").prop("checked",true);
	$("#selectBtn2").prop("checked",true);
	var total = 0;
	var numItems = 0;
	$.ajax({
		url:"../data/subpage.json",
		method:"get",
		success:function(data){
			var sc_arr = eval($.cookie("goods"));
			var html = "";
			var htmlb = '<div class = "pink"><p>深圳市内满199元包邮<span>凑单免邮</span></p><p><span>购买总数</span><b id = "numItems">0</b></p><p><span>商品总价</span><b id = "total1">￥0.00</b></p><div>';
			
			for(var i in sc_arr){
				html += '<ul><li><input class = "radioBtn" checked type = "checkbox"/></li><li><img src ="' 
				+ data[sc_arr[i].id].img + '"/></li><li>' + data[sc_arr[i].id].title
				 + '</li><li class = "price">' + data[sc_arr[i].id].price + '</li><li><p><em><input class = "minus" type="button" value = "-"/></em><em class = "goodsNum" id = "'+ sc_arr[i].id +'">' 
				 + sc_arr[i].num + '</em><em><input class = "plus" type="button" value = "+" /></em></li><p><li class = "sum">￥' + (Number(data[sc_arr[i].id].price.substring(1))*Number(sc_arr[i].num)).toFixed(2) 
				 +'</li><li class = "weight">' + data[sc_arr[i].id].weight 
				 + 'kg</li><li><div><a href = "#" id = "'+ sc_arr[i].id +'">移入收藏</a></div><div><a href = "#" class = "delete" id = "'+ sc_arr[i].id +'">删除</a></div></li></ul>';
				numItems += Number(sc_arr[i].num);
		
				 total += Number(data[sc_arr[i].id].price.substring(1))*Number(sc_arr[i].num);
				
			}

			$("#sc_list").html(html + htmlb);
			$("#total").html( "￥" + total.toFixed(2));
			$("#numItems").html(numItems);
			$("#total1").html( "￥" + total.toFixed(2));
		}
	})
	

	$("#selectBtn").click(function(){
		if($(this).is(":checked")){
	
			for(var i=0;i<$("#sc_list").find(".radioBtn").length;i++){
				
				if(!$("#sc_list").find(".radioBtn").eq(i).is(":checked")){
	
					total += Number($("#sc_list").find(".radioBtn").eq(i).parents("ul").find(".sum").html().substring(1));
					numItems += Number($("#sc_list").find(".radioBtn").eq(i).parents("ul").find(".goodsNum").html());
					$("#total").html("￥" + total.toFixed(2));
					$("#total1").html("￥" + total.toFixed(2));
					$("#numItems").html(numItems);
				}
			}
			$("#sc_list").find(".radioBtn").prop("checked",true);
			$("#selectBtn2").prop("checked",true);
		}else{
			$("#total").html("￥0.00");
			$("#total1").html("￥0.00");
			$("#numItems").html("0");
			$("#sc_list").find(".radioBtn").prop("checked",false);
			total = 0;
			numItems = 0;
			$("#selectBtn2").prop("checked",false);
		}

	})
	$("#selectBtn2").click(function(){
		if($(this).is(":checked")){
			for(var i=0;i<$("#sc_list").find(".radioBtn").length;i++){
				
				if(!$("#sc_list").find(".radioBtn").eq(i).is(":checked")){
	
					total += Number($("#sc_list").find(".radioBtn").eq(i).parents("ul").find(".sum").html().substring(1));
					numItems += Number($("#sc_list").find(".radioBtn").eq(i).parents("ul").find(".goodsNum").html());
					$("#total").html("￥" + total.toFixed(2));
					$("#total1").html("￥" + total.toFixed(2));
					$("#numItems").html(numItems);
				}
			}

			$("#sc_list").find(".radioBtn").prop("checked",true);
			$("#selectBtn").prop("checked",true);
		}else{
			$("#total").html("￥0.00");
			$("#total1").html("￥0.00");
			$("#numItems").html("0");
			$("#sc_list").find(".radioBtn").prop("checked",false);
			$("#selectBtn").prop("checked",false);
			total = 0;
			numItems = 0;

		}
	})
	
	$("#sc_list").on("click",".plus",function(){
		if($(this).parents("ul").find(".radioBtn").is(":checked")){
			numItems +=1;
			$("#numItems").html(numItems);
		}
		var num = $(this).parent().prevAll(".goodsNum").html();
		num = Number(num) + 1;
		$(this).parent().prevAll(".goodsNum").html(num);
		var sc_arr1 = eval($.cookie("goods"));
		for(var i=0;i<sc_arr1.length;i++){
			if(sc_arr1[i].id == $(this).parent().prevAll(".goodsNum").attr("id")){
				sc_arr1[i].num += 1; 
				var cookieStr = JSON.stringify(sc_arr1);
		        $.cookie("goods",cookieStr,{expires:7});
		        break;
			}
		}
		//alert(typeof $(this).parents("ul").find(".price").html().substring(1));
		var sum = (Number($(this).parents("ul").find(".price").html().substring(1))*num).toFixed(2);
		$(this).parents("ul").find(".sum").html("￥" + sum);
		$("#")
		//以上是总数计算
		if($(this).parents("ul").find(".radioBtn").prop("checked")){
			total += Number($(this).parents("ul").find(".price").html().substring(1));
			$("#total").html("￥" + total.toFixed(2));
			$("#total1").html("￥" + total.toFixed(2));
		}

		//点击加选按钮时让选中的商品价格在总是中显示
	})

	$("#sc_list").on("click",".minus",function(){
		if($(this).parents("ul").find(".radioBtn").is(":checked")){
			numItems -=1;
			$("#numItems").html(numItems);
		}
		var num = $(this).parent().nextAll(".goodsNum").html();
		if(num == 1){
			$("#pop-up").stop().animate({
				width:260,
				height:66,
				marginTop:-33,
				marginLeft:-130
			},40)
			var timer = setTimeout(function(){
				$("#pop-up").stop().animate({
					width:0,
					height:0,
					marginTop:0,
					marginLeft:0
				})
			},1500);
		}else{
			num = Number(num) - 1;
			$(this).parent().nextAll(".goodsNum").html(num);
			var sc_arr1 = eval($.cookie("goods"));
			for(var i=0;i<sc_arr1.length;i++){
				if(sc_arr1[i].id == $(this).parent().nextAll(".goodsNum").attr("id")){
					sc_arr1[i].num -= 1; 
					var cookieStr = JSON.stringify(sc_arr1);
					$.cookie("goods",cookieStr,{expires:7});
					break;
				}
			}
			var sum = (Number($(this).parents("ul").find(".price").html().substring(1))*num).toFixed(2);
			$(this).parents("ul").find(".sum").html("￥" + sum);

			if($(this).parents("ul").find(".radioBtn").prop("checked")){
			total -= Number($(this).parents("ul").find(".price").html().substring(1));
			$("#total").html( "￥" + total.toFixed(2));
			$("#total1").html("￥" + total.toFixed(2));
		}
		}
		
	})

	$("#sc_list").on("click",".delete",function(){
			
			var sc_arr1 = eval($.cookie("goods"));
			
			for(var i=0;i<sc_arr1.length;i++){
				if(sc_arr1[i].id == $(this).parents("ul").find(".delete").attr("id")){
					sc_arr1.splice(i,1);
					break;	
				}	
			}
			$(this).parents("ul").detach();
			if($(this).parents("ul").find(".radioBtn").is(":checked")){
					total -= Number($(this).parents("ul").find(".sum").html().substring(1)); 
					numItems -= Number($(this).parents("ul").find(".goodsNum").html());
					$("#total").html("￥" + total.toFixed(2));
					$("#total1").html("￥" +total.toFixed(2));
					$("#numItems").html(numItems);
			}







			var cookieStr = JSON.stringify(sc_arr1);
			$.cookie("goods",cookieStr,{expires:7});
		
			if($("#sc_list").html() == ""){
				var bgCon = '<img src="../img/cart_k.png" alt=""/><p class = "text">你的购物车空空的，赶紧选购吧！</p>';
				$("#sc_list").html(bgCon);
			}
	})
	
	$("#sc_list").on("click",".radioBtn",function(){
		if($(this).prop("checked")){
			total += Number($(this).parents("ul").find(".sum").html().substring(1));
			numItems += Number($(this).parents("ul").find(".goodsNum").html());	
		}else{
			total -= Number($(this).parents("ul").find(".sum").html().substring(1));
			numItems -= Number($(this).parents("ul").find(".goodsNum").html());
		}
		$("#total").html("￥" + total.toFixed(2));
		$("#numItems").html(numItems);
		$("#total1").html( "￥" + total.toFixed(2));
	})




})