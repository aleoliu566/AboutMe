
$(document).ready(function(){
	// var $window = $(window);
  	function checkWidth() {
      // var windowsize = $window.width();//取得螢幕寬度
      location.reload(); //重新整理刷新網頁
  	}
  	var resizeId;
  	$(window).resize(function() {
  	  clearTimeout(resizeId);
  	  resizeId = setTimeout(checkWidth, 500); //當停止螢幕拖拉才執行
 	});

	var	barHeight;
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
	$("#self-introduction").mouseover(function(){
		$("#small-bar").css("display","block");
	});
	$("#self-introduction").mouseout(function(){
		$("#small-bar").css("display","none");
	});
	// function goIndex(){
	// javascript:location.href="index.html";
	// // $("html,body").animate({scrollTop:$("#personality").offset().top-170}, 800);
	// }
	// if(aaa){
	// 	$("html,body").animate({scrollTop:$("#part-time").offset().top-156}, 800);
	// }
});
// jQuery.noConflict();


function goIndex(){
	javascript:location.href="index.html";
	// $(document).ready(function(){
	// $("html,body").animate({scrollTop:$("#personality").offset().top-170}, 800);
	// });
	aaa = true;
}

// function run() {
//     var d = document.getElementsByTagName("iframe");
//     var s = document.getElementById("haga");
//     var li;
//     s.innerHTML = d[0];
//     d[0].src = "hagawan.html";
// }
// function run1() {
//     var d = document.getElementsByTagName("iframe");
//     var s = document.getElementById("haga");
//     var li;
//     s.innerHTML = d[0];
//     d[0].src = "atcc.html";
// }
// function run2() {
//     var d = document.getElementsByTagName("iframe");
//     var s = document.getElementById("haga");
//     var li;
//     s.innerHTML = d[0];
//     d[0].src = "hoperead.html";
// }
// ------------------------------------------------------------------------

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
           scrollTop: $(target).offset().top-170
       },1000,function()
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


