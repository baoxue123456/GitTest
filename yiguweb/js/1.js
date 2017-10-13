$.ajax({
			url:"../data/pic_r.json",
			method:"get",
			success:function(data){
				var html ="";
				for(var i = 0; i < data.length; i++){
					html += '<li><img src = "' + data[i].img + '"/></li>';
				}
				$("#ul2").html(html);
				var htmlf ='<img src ="' + data[0].img + '"/><p>' + data[0].title + '</p>';
				$("#pic-bottom").find(".left").html(htmlf);
			}
		})

		var timer = null;
		var iNow = 0;
		timer = setInterval(function(){
			var htmlf ="";
			iNow++;
			$.ajax({
				url:"../data/pic_r.json",
				method:"get",
				success:function(data){		
					htmlf ='<img src ="' + data[iNow-1].img + '"/><p>' + data[iNow-1].title + '</p>';	
					$("#pic-bottom").find(".left").html(htmlf);
					if(iNow == 4){
						iNow = 0;
					}
				}
			})
		},6000);

		$("#ul2").on("mouseenter","li",function(){
			var iNow = $(this).index();
			var htmlf ="";
			$.ajax({
				url:"../data/pic_r.json",
				method:"get",
				success:function(data){		
					htmlf ='<img src ="' + data[iNow].img + '"/><p>' + data[iNow].title + '</p>';	
					$("#pic-bottom").find(".left").html(htmlf);
				}
			})
		})
