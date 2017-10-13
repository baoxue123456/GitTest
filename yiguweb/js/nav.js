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

		$("#listContent").mouseenter(function(){
			$(this).css("display","block");
		})
	})	
	$("#listContent").mouseleave(function(){
			$(this).css("display","none");
	})
	$("#optCard").find("li").mouseleave(function(){
		$("#listContent").css("display","none");
	})
})