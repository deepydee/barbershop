$(function() {

	$('.main-menu a').click(function(event) {
		event.preventDefault();
		//var clicked = $(this).attr('href');
		//var needElem = 'a[href="'+clicked+'"]';
		$('.main-menu .active').removeClass('active');
		$(this).parent().addClass('active');
	});

	$('.top-line').after('<div class="mobile-menu d-lg-none">');
	$('.top-menu').clone().appendTo('.mobile-menu');

	$('.mobile-menu-button').click(function() {
	$('.mobile-menu').stop().slideToggle();
	});



});

