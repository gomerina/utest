function ibg(){
	let ibg = document.querySelectorAll('.ibg');
	for(var i=0;i<ibg.length;i++){
		if(ibg[i].querySelector('img')){
			ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
		}
	}

}
ibg();


$(document).ready(function(){

	$('.sale-button-pointer').click(function(){
		$('.sale-button-pointer').removeClass('active');
		$(this).addClass('active');
	})


	$('.slider-recomended').slick({
		slidesToShow:4,
		infinite:false,variableWidth: true,
		responsive:[{
			breakpoint:1200,
			settings:{
				slidesToShow:2,
			}
		},{
			breakpoint:630,
			settings:{
				slidesToShow:1,
				dots:true,
				arrows:false
			}
		}]
	});
	$('.item-content-slider').slick({
		infinite:false,
		dots:true,
		responsive:[{
			breakpoint:768,
			settings:{
				arrows:false,
			}
		}]
	});

	$('.open_modal').click(function(){
		$('.modal_location').addClass('active');
	})
	$('.modal-close').click(function(){
		$('.modal_location').removeClass('active');
	})

	var w = $(window).width();
	if(w<1200){
		$('.item-content-add_top').appendTo($('#item-lg-left'));
		$('.item-lg-right').appendTo($('#item-lg-right'));
		$('.item-content-payment').appendTo($('#item-lg-right_02'));
		$('.item-content-add__delivery').appendTo($('#item-lg-left_02'));
		$('.about').appendTo($('.about-lg-visible'));
		$('.footer-center-lg-left').appendTo($('#footer-center-lg-left'));
		$('.footer-center-lg-right').appendTo($('#footer-center-lg-right'));
		$('.footer-center__row').appendTo($('#footer-center-lg-right_02'));
		$('.mob-right').appendTo($('#footer-center-lg-left_02'));
	}else{
		$('.item-content-add_top').appendTo($('.item-content-add'));
		$('.item-lg-right').appendTo($('.item-content-add'));
		$('.item-content-payment').insertAfter($('.item-content-add'));
		$('.item-content-add__delivery').appendTo($('.item-content-add'));
		$('.about').appendTo($('.about-body'));
		
		$('.footer-center-lg-right').prependdTo($('.footer-center__icons'));
		$('.footer-center__row').appendTo($('.footer-center'));
		$('.footer-center-lg-left').appendTo($('.footer-center'));
		$('.footer-center-lg-right').appendTo($('.footer-center'));
		$('.mob-right').appendTo($('.footer-center'));

	}



})

$(window).resize(function(){
	var w = $(window).width();
	if(w<1200){
		$('.item-content-add_top').appendTo($('#item-lg-left'));
		$('.item-lg-right').appendTo($('#item-lg-right'));
		$('.item-content-payment').appendTo($('#item-lg-right_02'));
		$('.item-content-add__delivery').appendTo($('#item-lg-left_02'));
		$('.about').appendTo($('.about-lg-visible'));
		$('.footer-center-lg-left').appendTo($('#footer-center-lg-left'));
		$('.footer-center-lg-right').appendTo($('#footer-center-lg-right'));
		$('.footer-center__row').appendTo($('#footer-center-lg-right_02'));
		$('.mob-right').appendTo($('#footer-center-lg-left_02'));
	}else{
		$('.item-content-add_top').appendTo($('.item-content-add'));
		$('.item-lg-right').appendTo($('.item-content-add'));
		$('.item-content-payment').insertAfter($('.item-content-add'));
		$('.item-content-add__delivery').appendTo($('.item-content-add'));
		$('.about').appendTo($('.about-body'));
		
		$('.footer-center-lg-right').prependdTo($('.footer-center__icons'));
		$('.footer-center__row').appendTo($('.footer-center'));
		$('.footer-center-lg-left').appendTo($('.footer-center'));
		$('.footer-center-lg-right').appendTo($('.footer-center'));
		$('.mob-right').appendTo($('.footer-center'));
	}


})