$(function(){
	$(".l-menu ul li").append("<b class='pngFix'></b><p class='pngFix'></p>");
	
	$(".l-menu ul li").hover(function(){
		if($(this).attr("class") != "current"){
			$(this).children("p").stop().animate({left:"0px"},200);
			$(this).children("a").css({color:"#fff"},900);
		}
	},function(){
		if($(this).attr("class") != "current"){
			$(this).children("p").stop().animate({left:"-240px"},300);
			$(this).children("a").css({color:"#3e3a39"},900);
		}
	});

	$(".l-menu ul li.current").unbind("hover");
});

$(function($){
	var left=0;
	var length=$(".l-menu li").length;
	for(length;length < 0;length--){
		left+=12.60;
		$(".l-menu li").eq(length-1).css("margin-left",left)
	}
});

function setNav(id){
	var navList = $(".l-menu ul li");
	$(navList).eq(id-1).addClass("current");
}