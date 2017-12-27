// JavaScript Document
//点击前后按钮切换页面
$(function(){

    //点击左右按钮，图片进行切换效果
    var a=0;
    $("#vedio_prev").click(function(){
        a--;
        a=(a+2)%2;
        $(".vedio_ul").animate({marginLeft:-1320*a},"slow");

    });
    $("#vedio_next").click(function(){
        a++;
        a=a%2;
        $(".vedio_ul").animate({marginLeft:-1320*a},"slow");
		
    });

});

$(function(){

    //点击左右按钮，图片进行切换效果
    var a=0;
    $("#index_course_prev").click(function(){
        a--;
        a=(a+2)%2;
        $("#index_course_inner").animate({marginLeft:-1320*a},"slow");

    });
    $("#index_course_next").click(function(){
        a++;
        a=a%2;
        $("#index_course_inner").animate({marginLeft:-1320*a},"slow");
		
    });

});

$(document).ready(function(){
	//返回顶部 
   $("#return_top").click(function(){
      $("html,body").animate({scrollTop:0},300);
   });
});

$(function(){

 $(".flexslider").flexslider({

 slideshowSpeed:4000,//展示时间间隔ms

 animationSpeed:400,//滚动时间ms

 touch:true//是否支持触屏滑动

 });

 });


$(function() {
	$("#contact_next").on("click",function(){
            $("#contactpics_01").hide();
            $("#contactpics_02").show();
        });
	$("#contact_prev").on("click",function(){
            $("#contactpics_01").show();
            $("#contactpics_02").hide();
        });
        
	})

$(function() {
	$("#beijing_course").on("click",function(){
            $("#xian_course_con").hide();
            $("#beijing_course_con").show();
			$(this).addClass("tidu_choosed").siblings().removeClass("tidu_choosed");
			$(".tidu_top").removeClass("xian_top");
        });
	$("#xian_course").on("click",function(){
            $("#xian_course_con").show();
            $("#beijing_course_con").hide();
			$(this).addClass("tidu_choosed").siblings().removeClass("tidu_choosed");
			$(".tidu_top").addClass("xian_top");
        });
        
	})

//无缝滚动
$(function(){
	
	function run(){
        var l_dis=0;
        var i=0;
        var timer=null;
        timer=setInterval(function(){
            l_dis-=7;
            if(l_dis<=-1350){
                l_dis=0;
            }
            $('.contact_sec03_inner').css("left",(l_dis)+'px')
            i=i+1;
            if(i>5){
                i=0;
            }
        },30);
        $('.contact_sec03_inner').on('mouseover',function(){
            clearInterval(timer)
        });
    }
    run();
    $('.contact_sec03_inner').on('mouseout',function(){
        run();
    });
	
})

$(function(){
	//分类
	$(".performance_into").on("click",function(){
		var catid=$(this).attr("catid");
		var top=$(".performance_sec_bar li[catid='"+catid+"']").offset().top;
		$(window).scrollTop(top);
	});
});
