
$(function() {
	resizePerfecBar();
	
	if(window.parent!=window) {
		$(window.parent).resize(function(){
			 //resizePerfecBar();
			 setTimeout(resizePerfecBar,400);
		});
	}
	
	$(window).resize(function(){
		 //resizePerfecBar();
		 setTimeout(resizePerfecBar,400);
	});
});

function resizePerfecBar() {
	$("div[perfectbar='1']").each(function (){
		var subWidth = $(this).attr('subWidth');
		var subHeight = $(this).attr('subHeight');
		var sub;
		var sWid = 0,sHid = 0;
		
		if (subWidth != null && subWidth != "") {
			
			sub = subWidth.split(',');
			
			if (sub != null && sub.length > 0) {
				for (var i=0; i < sub.length; i++) {
					sWid += $(sub[i]).outerWidth();
				}
			}
		}
		
		if (subHeight && subHeight != "") {
			sub = subHeight.split(',');
			
			if (sub != null && sub.length > 0) {
				for (var i=0; i < sub.length; i++) {
					sHid += $(sub[i]).outerHeight();
				}
			}
		}
		$(this).perfectScrollbar();
		$(this).width($(window).width()-sWid).height($(window).height()-sHid);
        $(this).perfectScrollbar('update');
	});
}