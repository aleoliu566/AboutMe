$(document).ready(function(){
	$("#basic-data").click(function(){
		$("html,body").animate({scrollTop:$("#data").offset().top-170}, 800);
		$("#small-bar").css("display","none");
	});
	$("#basic-personality").click(function(){
		$("html,body").animate({scrollTop:$("#personality").offset().top-170}, 800);
	});
	$("#basic-ability").click(function(){
		$("html,body").animate({scrollTop:$("#ability").offset().top-156}, 800);
	});
	$("#basic-part-time").click(function(){
		$("html,body").animate({scrollTop:$("#part-time").offset().top-156}, 800);
	});
	$("#self-introduction").mouseover(function(){
		$("#small-bar").css("display","block");
	});
	$("#self-introduction").mouseout(function(){
		$("#small-bar").css("display","none");
	});
});
jQuery.noConflict();

function goIndex(){
	javascript:location.href="index.html";
	// $(document).ready(function(){
	// $("html,body").animate({scrollTop:$("#personality").offset().top-170}, 800);
	// });
}
