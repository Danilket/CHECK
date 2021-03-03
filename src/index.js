
// import "@babel/polyfill";
import "core-js/stable";
import "regenerator-runtime/runtime";


import "normalize.css"
import * as $ from 'jquery'
import '@/styles/scss/style.scss'
// import images from '@/assets/images/bg.png'
// import imagesWebp from '@/assets/images/bg.webp'
// import twitterIcon from './assets/twitter.svg';
import logo from '@/assets/images/logo.svg'
import key from '@/assets/images/key.svg'
import cart from '@/assets/images/cart.svg'
import wave from '@/assets/images/wave.svg'
import waveGray from '@/assets/images/wave-gray.svg'
import fb from '@/assets/images/fb.svg'
import vk from '@/assets/images/vk.svg'
import mail from '@/assets/images/mail.svg'
import tel from '@/assets/images/tel.svg'
import heart from '@/assets/images/heart.svg'
import world from '@/assets/images/world.svg'
import checkBox from '@/assets/images/check-box.svg'
import modalThx from '@/assets/images/modal-thx.png'
import modalThxWebp from '@/assets/images/modal-thx.webp'
import bgImage from '@/assets/images/bg-image.png'
import bgImageWebp from '@/assets/images/bg-image.webp'
import dot from '@/assets/images/dot-static.svg'
import dotActive from '@/assets/images/dot-active.svg'
import sliderWave from '@/assets/images/slider-wave.svg'
import bgBottle from '@/assets/images/bg-bottle.png'
import bgBottleWebp from '@/assets/images/bg-bottle.webp'

import './js/babel'
import './js/modalFancybox'

import Inputmask from "inputmask";
import 'jquery-validation'

import 'slick-slider'



// window.onload = function () {
// 	$('.slick-current').find('svg').addClass('dot-active')
// 	$('.slick-current').find('use').attr('xlink:href', '#dot-active')
// }

$(function () {
	$('.slider').slick({
		// dots: true,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.nature__dots',
		fade: true,
		// nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/next-arrow.svg" alt="next-arrow"></button>',
		// prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/prev-arrow.svg" alt="prev-arrow"></button>',
		// responsive: [
		// 	{
		// 		breakpoint: 1024,
		// 		settings: {

		// 		}
		// 	},
		// 	{
		// 		breakpoint: 640,
		// 		settings: {
		// 			arrows: false
		// 		}
		// 	},
		// ]
	});
	$('.nature__dots').slick({ // настройка навигации
		slidesToShow: 3, // указываем что нужно показывать 3 навигационных изображения
		asNavFor: '.slider', // указываем что это навигация для блока выше
		focusOnSelect: true // указываем что бы слайделось по клику
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



// $('.nature__dots-item').on('click', function () {
// 	$('.nature__dots-item').removeClass('dot-active')
// 	$('.nature__dots-item').find('use').attr('xlink:href', '#dot-static')
// 	$('.slick-current').find('svg').addClass('dot-active')
// 	$('.slick-current').find('use').attr('xlink:href', '#dot-active')
// })


$('.info__language, .info__language--mobile').on('click', function () {
	$('.change-language').toggleClass('change-language--active')
})

function burgerMenu(selector) {
	let menu = $(selector);
	let button = $('.menu__button');
	let buttonClose = menu.find('.menu__button--close');
	let list = $('.menu-mobile');
	let overlay = $('.menu__overlay');

	button.on('click', (e) => {
		e.preventDefault();
		console.log(list);
		toggleMenu()
	})

	buttonClose.on('click', (e) => {
		e.preventDefault();
		console.log(list);
		toggleMenu()
	})

	overlay.on('click', () => toggleMenu());

	function toggleMenu() {
		list.toggleClass('active');
		overlay.toggleClass('overlay-active');

		if (list.hasClass('active')) {
			$('body').css('overflow', 'hidden');
		} else {
			$('body').css('overflow', 'visible');
		}
	}
}

burgerMenu('.menu-mobile')

// $('.buttons__call2').on('click', function () {
// 	$.fancybox.close();
// });

$('[data-fancybox]').fancybox({
	autoFocus: false,
	// backFocus: false,
	// trapFocus: false,
});


$("#number").inputmask({
	mask: '+7 (999) 999-99-99',
	showMaskOnHover: false,
});



// let element = $('.callback__form')

$('.callback__form').validate({
	// element: $('.callback__form'),
	groups: {
		username: "tel name checkbox"
	},
	rules: {
		tel: {
			required: true
		},
		name: {
			required: true,
			minlength: 2
		},
		checkbox: {
			required: true
		}
	},
	messages: {
		tel: {
			required: 'Пожалуйста заполните все поля, отмеченные звездочкой'
		},
		name: {
			required: 'Пожалуйста заполните все поля, отмеченные звездочкой',
			minlength: 'Длина должна быть больше 2 символов'
		},
		checkbox: {
			required: 'Пожалуйста заполните все поля, отмеченные звездочкой'
		}
	},
	errorPlacement: function (error, element) {
		if (element.attr("name") == "tel" || element.attr("name") == "name" || element.attr("name") == "checkbox") {
			error.insertAfter(".callback__data");
		} else {
			error.insertAfter(element);
		}
		console.log(error);
	},
	submitHandler: function () {
		$.fancybox.close();
		$.fancybox.open($('#modal-thanks'));
	}
})





// Проверяем, можно ли использовать Webp формат
function canUseWebp() {
	// Создаем элемент canvas
	let elem = document.createElement('canvas');
	// Приводим элемент к булеву типу
	if (!!(elem.getContext && elem.getContext('2d'))) {
		// Создаем изображение в формате webp, возвращаем индекс искомого элемента и сразу же проверяем его
		return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
	}
	// Иначе Webp не используем
	return false;
}

window.onload = function () {

	$('.slick-current').find('.nature__dots-item').addClass('dot-active')
	$('.slick-current').find('.nature__dots-item').find('use').attr('xlink:href', '#dot-active')
	// Получаем все элементы с дата-атрибутом data-bg
	let images = document.querySelectorAll('[data-bg]');
	// Проходимся по каждому
	for (let i = 0; i < images.length; i++) {
		// Получаем значение каждого дата-атрибута
		let image = images[i].getAttribute('data-bg');
		// Каждому найденному элементу задаем свойство background-image с изображение формата jpg
		images[i].style.backgroundImage = 'url(' + image + ')';
	}

	// Проверяем, является ли браузер посетителя сайта Firefox и получаем его версию
	let isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
	let firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0;

	// Если есть поддержка Webp или браузер Firefox версии больше или равно 65
	if (canUseWebp() || firefoxVer >= 65) {
		// Делаем все то же самое что и для jpg, но уже для изображений формата Webp
		let imagesWebp = document.querySelectorAll('[data-bg-webp]');
		for (let i = 0; i < imagesWebp.length; i++) {
			let imageWebp = imagesWebp[i].getAttribute('data-bg-webp');
			imagesWebp[i].style.backgroundImage = 'url(' + imageWebp + ')';
		}
	}
};