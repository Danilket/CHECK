
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

import './js/babel'
import './js/modalFancybox'
import 'slick-slider'



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

// $(window).onload(function () {
// 	let width = $(window).width()
// 	let list = $('.list');
// 	if (width < 1201) {
// 		console.log(width);
// 		list.addClass('mobile-list')
// 	} else {
// 		list.removeClass('mobile-list')
// 	}
// })