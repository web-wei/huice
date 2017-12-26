// JavaScript Document
window.onload=function(){
	function getDate (){
	var oldTime = Math.round(new Date().getTime());//现在距离1970年的秒数
	var newTime =1514736000000  //设定的时间距离1970年的秒数
	var surplus_second = newTime-oldTime; //时间差-秒数
	
	var count_down_day = Math.floor(surplus_second/86400000)
	 if(count_down_day<10){
		 count_down_day="0"+count_down_day
	 }
	  surplus_second = surplus_second%86400000;
	  
	 var count_down_hour = Math.floor(surplus_second/3600000)
	 if(count_down_hour<10){
		 count_down_hour="0"+count_down_hour
	 }
	  surplus_second = surplus_second%3600000;
	  
	  var count_down_minute = Math.floor(surplus_second/60000)
	  if(count_down_minute<10){
		 count_down_minute="0"+count_down_minute
	 }
	  surplus_second = surplus_second%60000;
	  
	  var count_down_second = Math.floor(surplus_second/1000)
	   if(count_down_second<10){
		 count_down_second="0"+count_down_second
	 }
	 surplus_second = surplus_second%1000;
	 var count_down_msecond = Math.floor(surplus_second)
	 if(count_down_msecond<10){
		 count_down_msecond="00"+count_down_msecond
	 }
	 if(count_down_msecond<100){
		 count_down_msecond="0"+count_down_msecond
	 }
	 var down_day = $("#day").html(count_down_day); 
	  var down_hour = $("#hour").html(count_down_hour); 
	  var down_minute = $("#minute").html(count_down_minute); 
	  var down_second = $("#second").html(count_down_second); 
	  var down_msecond = $("#msecond").html(count_down_msecond); 
	 }
	 setInterval(getDate, 1);
	
	}


