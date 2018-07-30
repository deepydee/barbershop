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

	var $fotoramaDiv = $('#fotorama').fotorama();
	var fotorama = $fotoramaDiv.data('fotorama');
	

	$('.button-gallery-prev').click(function() {
		fotorama.show('<');
	});

	$('.button-gallery-next').click(function() {
		fotorama.show('>');
	});

/* 	if (window.matchMedia('all and (max-width: 576px)').matches) {
		fotorama.setOptions({
			arrows: true
		 });
	} else {
		fotorama.setOptions({
			arrows: false
		 });
	} */

	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				// Done Functions
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

	$('.map').magnificPopup({
		type: 'iframe',
		items: {
				src:'https://yandex.ru/map-widget/v1/?um=constructor%3A2152ae03c9989425b575be008096f392c1c904896a0e33ae9c2142f9b06eccef&amp;source=constructor" width="769" height="510" frameborder="0"'
		}
});

$('.entry-popup-link').magnificPopup({
	type: 'inline'
})

$('.callback').magnificPopup({
	type: 'inline'
})
	 
	 
$(window).scroll(function() {
	if ($(this).scrollTop() > $(this).height()/2) {
		$('.top').addClass('active');
	} else {
		$('.top').removeClass('active');
	}
});

$('.top').click(function() {
	$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});

});

