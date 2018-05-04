$(function(){
	$('.seatext').focus(function(){
		var keyval=$('.seatext').val();
		if(keyval=='请输入关键字'){
			$('.seatext').val('');
		}
	})
	$('.seatext').focusout(function(){
		var keyval=$('.seatext').val();
		if(keyval==''){
			$('.seatext').val('请输入关键字');
		}
	})
	$('.mkey').click(function(){
		$('.keyul').show();
		$('.keyul li').click(function(){
			var keyval=$(this).text();
			$('.mkey').text(keyval);
			$('.keyul').hide();
		})		
	})
	$(document).mouseup(function() {
		$('.keyul').hide();
	});
	$('.seabtn').click(function(){
		var mval=$('.mkey').text();
		var keyval=$('.seatext').val();
		alert(mval+keyval)	
	})
	$('.keyul li').hover(function(){$(this).addClass('on');},function(){$(this).removeClass('on');})
})