(function(){
var isOnMenu = false;
var timeOut = null,timeOutOnMenu = null;
$(".menu>li").each(function(){
	$("#"+$(this).attr("id")+"_popup_menu").css({"top":"0"}).show();
	});
	$(".menu>li").hover(function(){
		$("div[id$=popup_menu]").each(function(){
			$(this).stop(true).animate({"top":"0"});
		});
		isOnMenu = false;
		$("#"+$(this).attr("id")+"_popup_menu").stop(true).animate({"top":-$(this).outerHeight()});
	},function(){
		var _this = $(this);
		clearTimeout(timeOut);
		timeOut = setTimeout(function(){
			if(!isOnMenu){
				$("#"+_this.attr("id")+"_popup_menu").stop(true).animate({"top":"0"});
				isOnMenu = false;
			}
		},100);
	});
	$("div[id$=popup_menu]").hover(function(){
		isOnMenu = true;
	},function(){		
		isOnMenu = false;
		var _this = $(this);
		_this.stop(true).animate({"top":"0"},function(){});
	});
})();