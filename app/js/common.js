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
	 



});

