$(function() {
	initTab('#navigation','#steps');
});


function initTab (navId,stepId) {
	var current 	= 1;
	var stepsWidth	= 0;
    var widths 		= new Array();
	$(stepId+' .step').each(function(i){
        var $step 		= $(this);
		widths[i]  		= stepsWidth;
        stepsWidth	 	+= $step.width();
    });
	$(stepId).width(stepsWidth);
	
	//$('#formElem').children(':first').find(':input:first').focus();	
	
	$(navId).show();
	
    $(navId+'  li a').bind('click',function(e){
		var $this	= $(this);
		var prev	= current;
		$this.closest('ul').find('li').removeClass('selected');
        $this.parent().addClass('selected');

		current = $this.parent().index() + 1;

        $(stepId).stop().animate({
            marginLeft: '-' + widths[current-1] + 'px'
        },500);
        e.preventDefault();
    });
}