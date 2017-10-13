$(function(){
	sc_car();
	$.ajax({
		url:"../data/subpage.json",
		method:"get",
		success:function(data){
			var html = "";
			for(var i = 0; i< 16;i++){
				html += '<li><img src = "' + data[i].img + '"/><p><a href = "#">' + data[i].title + '</a><div><b>' + data[i].price + '</b><i>' + data[i].exprice + '</i></div><a class = "addToCart" id = "'+ data[i].id + '">加入购物车>> </a></li>';
			}
			$("#pro_con").html(html);
		}
	})

	$("#pro_con").on("mouseenter","li",function(){
		$(this).find(".addToCart").css("display","block");
	})
	$("#pro_con").on("mouseleave","li",function(){
		$(this).find(".addToCart").css("display","none");
	})
	/*var iNow = 0;
	$("#next").click(function(){
		iNow++;
		$.ajax({
			url:"../data/subpage.json",
			method:"get",
			success:function(data){
				var html = "";
				for(var i=iNow*16;i<16*(iNow + 1);i++){
				html += '<li><img src = "' + data[i].img + '"/><p><a href = "#">' + data[i].title + '</a><div><b>' + data[i].price + '</b><i>' + data[i].exprice + '</i></div><a class = "addToCart">加入购物车>> </a></li>';					
				}
				$("#pro_con").html(html);
				if(iNow > 4){
					iNow = 3;
				}
			}
		})
		if(iNow >2){
			iNow = 2;
		}
	})*/
	var iNow = 0;
	$("#next").click(function(){
		iNow++;
		if(iNow >=3){
			iNow = 3;
		}
		$.ajax({
			url:"../data/subpage.json",
			method:"get",
			success:function(data){
				if(16*(iNow +1) <= data.length){
					var html = "";
					for(var i = iNow*16;i<16*(iNow + 1);i++){
						html += '<li><img src = "' + data[i].img + '"/><p><a href = "#">' + data[i].title + '</a><div><b>' + data[i].price + '</b><i>' + data[i].exprice + '</i></div><a class = "addToCart" id = "' + data[i].id +'">加入购物车>> </a></li>';					
					}
					$("#pro_con").html(html);
				}else{
					var html = "";
					for(var i = 16*iNow;i<data.length;i++){
						html += '<li><img src = "' + data[i].img + '"/><p><a href = "#">' + data[i].title + '</a><div><b>' + data[i].price + '</b><i>' + data[i].exprice + '</i></div><a class = "addToCart" id = "'+ data[i].id +'">加入购物车>> </a></li>';					
					}
					$("#pro_con").html(html);
				}
			}
		})
	})



	$("#nextb").click(function(){
		iNow++;
		if(iNow >=3){
			iNow = 3;
		}
		$.ajax({
			url:"../data/subpage.json",
			method:"get",
			success:function(data){
				if(16*(iNow + 1) <= data.length){
					var html = "";
					for(var i=iNow*16;i<16*(iNow + 1);i++){
						html += '<li><img src = "' + data[i].img + '"/><p><a href = "#">' + data[i].title + '</a><div><b>' + data[i].price + '</b><i>' + data[i].exprice + '</i></div><a class = "addToCart" id = "' + data[i].id + '">加入购物车>> </a></li>';					
					}
					$("#pro_con").html(html);
				}else{
					var html = "";
					for(var i=iNow*16;i<data.length;i++){
						html += '<li><img src = "' + data[i].img + '"/><p><a href = "#">' + data[i].title + '</a><div><b>' + data[i].price + '</b><i>' + data[i].exprice + '</i></div><a class = "addToCart" id = "' + data[i].id +'">加入购物车>> </a></li>';					
					}
					$("#pro_con").html(html);
				}
				
			}
		})
		
	})
	$("#pre").click(function(){
		iNow--;
		$.ajax({
			url:"../data/subpage.json",
			method:"get",
			success:function(data){
				var html = "";
				for(var i=iNow*16;i<16*(iNow + 1);i++){
				html += '<li><img src = "' + data[i].img + '"/><p><a href = "#">' + data[i].title + '</a><div><b>' + data[i].price + '</b><i>' + data[i].exprice + '</i></div><a class = "addToCart" id = "' + data[i].id + '">加入购物车>> </a></li>';					
				}
				$("#pro_con").html(html);
				
			}
		})
			if(iNow < 0){
				iNow = 0;
				}
	})
	$("#preb").click(function(){
		iNow--;
		$.ajax({
			url:"../data/subpage.json",
			method:"get",
			success:function(data){
				var html = "";
				for(var i=iNow*16;i<16*(iNow + 1);i++){
				html += '<li><img src = "' + data[i].img + '"/><p><a href = "#">' + data[i].title + '</a><div><b>' + data[i].price + '</b><i>' + data[i].exprice + '</i></div><a class = "addToCart" id = "'+ data[i].id +'">加入购物车>> </a></li>';					
				}
				$("#pro_con").html(html);
				
			}
		})
			if(iNow < 0){
				iNow = 0;
				}
	})

	$("#first").click(function(){
		iNow = 0;
		$.ajax({
			url:"../data/subpage.json",
			method:"get",
			success:function(data){
				var html = "";
				for(var i=iNow*16;i<16*(iNow + 1);i++){
				html += '<li><img src = "' + data[i].img + '"/><p><a href = "#">' + data[i].title + '</a><div><b>' + data[i].price + '</b><i>' + data[i].exprice + '</i></div><a class = "addToCart" id = "' + data[i].id + '">加入购物车>> </a></li>';					
				}
				$("#pro_con").html(html);
				
			}
		})
	})
	$("#last").click(function(){
		iNow = 3;
		$.ajax({
			url:"../data/subpage.json",
			method:"get",
			success:function(data){
				var html = "";
				for(var i=iNow*16;i<data.length;i++){
				html += '<li><img src = "' + data[i].img + '"/><p><a href = "#">' + data[i].title + '</a><div><b>' + data[i].price + '</b><i>' + data[i].exprice + '</i></div><a class = "addToCart" id = "' + data[i].id + '">加入购物车>> </a></li>';					
				}
				$("#pro_con").html(html);
				
			}
		})
	})


	/*$("#pro_con").on("click",".addToCart",function(){
		var id = this.id;
		var first = $.cookie("goods") == null? true:false;
		if(first){
			$.cookie("goods",'[{id:' + id + ',num:1}]',{expires:7});
		}else{
			var str = $.cookie("goods");
			var arr = eval(str);
			var same = false;
			for(var i in arr){
				if(arr[i].id == id){
					arr[i].num = arr[i].num + 1;
					var cookieStr = JSON.stringify(arr);
					$.cookie("goods",cookieStr,{expires:7});
					same = true;
					break;
				}
			}

			if(!same){
				var obj = {id:id,num:1};
				arr.push(obj);
				var cookieStr = JSON.stringify(arr);
				$.cookie("goods",cookieStr,{expires:7});
			}
		}
		alert($.cookie("goods"));
	})

*/

$("#pro_con").on("click", ".addToCart", function(){
			 //alert(this.id);
			//是否是第一次添加cookie
			var id = this.id;
			
			var first = $.cookie("goods") == null ? true:false;

			if(first){
				//第一次添加  [{id:id,num:2}]
				$.cookie("goods",'[{id:' + id + ',num:1}]', {
					expires: 7
				});
			}else{
				var str = $.cookie("goods");
				var arr = eval(str);
				var same = false; //代表是否有相同商品

				//遍历所有的对象，判断是否id相同，num++
				for(var i in arr){
					if(arr[i].id == id){
						arr[i].num = arr[i].num + 1;
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr,  {
							expires: 7
						});
						same = true;
						break;
					}
				}

				//没有相同的商品
				if(!same){
					var obj = {id:id, num:1};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
					$.cookie("goods", cookieStr, {
						expires: 7
					});
				}
				sc_car();
			}

			/*alert($.cookie("goods"));*/


			return false;
		})

	function sc_car(){
			var sc_str = $.cookie("goods");
			if(sc_str){ //判断字符串是否存在
				var sc_arr = eval(sc_str);
				var sc_num = 0;
				for(var i in sc_arr){
					sc_num = Number(sc_arr[i].num) + sc_num;
				}
				$("#sc_num").html(sc_num);
			}
		}

})