$(document).ready(function() {
	$('.burger').on('click', function () {
		$(this).toggleClass('active');
		$('.nav').toggleClass('active');
		$('body, html').toggleClass('lock');
	});

	$(function () {
	let header = $(".header-top");
	let intro = $(".header");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();

	 $(window).on("scroll resize load", function () {

		
		checkScroll(scrollPos,introH);
	 });

	 function checkScroll(scrollPos, introH) {
	 	if($(window).scrollTop() > intro.innerHeight() ) {
	 		header.addClass("header-fixed");
	 	} else {
	 		header.removeClass("header-fixed");
	 	}
	 }
	 console.log(scrollPos);
	});

	$('.book, .tarif, .features, .app, .testimonials, .advertise, .footer').on('click', function() {
		$('.nav').removeClass('active');
		$('.burger').removeClass('active');
	});

	$(".nav a").mPageScroll2id();
})