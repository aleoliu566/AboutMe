var	barHeight;
$(document).ready(function(){	
	if(window.matchMedia("(min-width:660px)").matches){
		 barHeight=90;
	}else{
		 barHeight=170;
	}
	$("#basic-data").click(function(){
		$("html,body").animate({scrollTop:$("#data").offset().top-barHeight}, 800);
		$("#small-bar").css("display","none");
	});
	$("#basic-personality").click(function(){
		$("html,body").animate({scrollTop:$("#personality").offset().top-barHeight}, 800);
		$("#small-bar").css("display","none");
	});
	$("#basic-ability").click(function(){
		$("html,body").animate({scrollTop:$("#ability").offset().top-barHeight}, 800);
		$("#small-bar").css("display","none");
	});
	$("#basic-part-time").click(function(){
		$("html,body").animate({scrollTop:$("#part-time").offset().top-barHeight}, 800);
		$("#small-bar").css("display","none");
	});
	$("#basic-picture").click(function(){
		$("html,body").animate({scrollTop:$("#picture").offset().top-barHeight}, 800);
		$("#small-bar").css("display","none");
	});
	$("#self-introduction").mouseover(function(){
		$("#small-bar").css("display","block");
	});
	$("#self-introduction").mouseout(function(){
		$("#small-bar").css("display","none");
	});

});

(function($){
    var jump=function(e)
    {
       if (e){
           e.preventDefault();
           var target = $(this).attr("href");
       }else{
           var target = location.hash;
       }
       $('html,body').animate(
       {
           scrollTop: $(target).offset().top-barHeight },800,function()
       {
           location.hash = target;
       }); 
    }
    $('html, body').hide()
    $(document).ready(function()
    {
        $("a[href^='#']").bind("click", jump);
        if (location.hash){
            setTimeout(function(){
                $('html, body').scrollTop(0).show()
                jump()
            }, 0);
        }else{
          $('html, body').show()
        }
    });
})(jQuery)


