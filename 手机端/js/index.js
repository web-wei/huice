// JavaScript Document
//banner图切换

window.onload=function(){
	var slider = Swipe(document.getElementById('scroll_img'), {
    auto: 3000,
    continuous: true,
    callback: function(pos) {
        var i = bullets.length;
        while (i--) {
            bullets[i].className = ' ';
        }
        bullets[pos].className = 'on';
    }
});
	var bullets = document.getElementById('scroll_position').getElementsByTagName('li');

	var slider = Swipe(document.getElementById('scroll_imgp'), {
    auto: 3000,
    continuous: true,
    callback: function(pos) {
        var i = bullets.length;
        while (i--) {
            bulletsp[i].className = ' ';
        }
        bulletsp[pos].className = 'on';
    }
});
	var bulletsp = document.getElementById('scroll_positionp').getElementsByTagName('li');
	
	var slider = Swipe(document.getElementById('scroll_imgj'), {
    auto: 3000,
    continuous: true,
    callback: function(pos) {
        var i = bullets.length;
        while (i--) {
            bulletsj[i].className = ' ';
        }
        bulletsj[pos].className = 'on';
    }
});
	var bulletsj = document.getElementById('scroll_positionj').getElementsByTagName('li');
	
	}
	
$(function() {
	$("#beijing_course").on("click",function(){
            $("#xian_course_con").hide();
            $("#beijing_course_con").show();
			$(this).addClass("tidu_choosed").siblings().removeClass("tidu_choosed");
        });
	$("#xian_course").on("click",function(){
            $("#xian_course_con").show();
            $("#beijing_course_con").hide();
			$(this).addClass("tidu_choosed").siblings().removeClass("tidu_choosed");
        });
        
	})
	
$(document).ready(function() {
	//返回顶部 
    $(".return_top").click(function() {
        $("html,body").animate({scrollTop: 0}, 300);
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
            if(l_dis<=-475){
                l_dis=0;
            }
            $('.qypic_scroll').css("left",(l_dis)+'px')
            i=i+1;
            if(i>5){
                i=0;
            }
        },100);
        $('.qypic_scroll').on('mouseover',function(){
            clearInterval(timer)
        });
    }
    run();
    $('.qypic_scroll').on('mouseout',function(){
        run();
    });
	
})

//分类导航菜单弹出
$(document).ready(function(){
	  $('#keyword_a').sideToggle({
		moving: '#sideMenuContainer',
		direction: 'right'
	  });

	});


