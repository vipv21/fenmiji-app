$(function(){
	$("#bot a").click(function(){
		$("#bot a").find("span").removeClass("active");
		$(this).find("span").addClass("active");
	})
	$("#header .top").click(function(){
		
		$(this).find(".bar_bg").slideToggle();
		$(this).find(".bar").slideToggle();
	})
	$("#header .top .bar a").click(function(){
		$("#header .top .bar a").removeClass("active");
		$(this).addClass("active");
	})
})
