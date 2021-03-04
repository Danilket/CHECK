import $ from 'jquery'
import 'slick-slider'



$(function () {
	$('.slider').slick({
		arrows: false,
		asNavFor: '.nature__dots',
	});
	$('.nature__dots').slick({
		slidesToShow: 3,
		asNavFor: '.slider',
		focusOnSelect: true
	});
	$('.slider').on('swipe', function () {
		$('.nature__dots-item').removeClass('dot-active')
		$('.nature__dots-item').find('use').attr('xlink:href', '#dot-static')
		$('.slick-current').find('.nature__dots-item').addClass('dot-active')
		$('.slick-current').find('.nature__dots-item').find('use').attr('xlink:href', '#dot-active')
	});
	$('.nature__dots-item').on('click', function () {
		$('.nature__dots-item').removeClass('dot-active')
		$('.nature__dots-item').find('use').attr('xlink:href', '#dot-static')
		$(this).addClass('dot-active')
		$(this).find('use').attr('xlink:href', '#dot-active')
	});

});