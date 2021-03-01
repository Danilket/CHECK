
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

import './js/babel'
import './js/modalFancybox'

import Inputmask from "inputmask";
import 'jquery-validation'

import 'slick-slider'



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

$('.buttons__call2').on('click', function () {
	$.fancybox.close();
});

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
		$.fancybox.open($('#modal2'));
	}
})