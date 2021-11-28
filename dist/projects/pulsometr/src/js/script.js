/* Слайдер с помощью TinySlider */
const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controls: false,
	speed: 800,
	navPosition: "bottom",
	responsive: {
		320: {
			nav: true
		},
		992: {
			nav: false
		}
	}
});

document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});


/* Переключение табов и их контента c помощью jQuery */
(function($) {
	$(function() {
		
		$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
			.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
			.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
		});
	});

/* Переключение карточек c помощью jQuery */
	function toggleSlide(item) { 
		$(item).each(function(i) {
			$(this).on('click', function(e) { 
				e.preventDefault();
				$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
				$('.catalog-item__second').eq(i).toggleClass('catalog-item__second_active');
			});
		});
	}

	toggleSlide('.catalog-item__link');
	toggleSlide('.catalog-item__back');

	/* Модальные окна c помощью jQuery */

	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow');
	});

	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #order, #thanks').fadeOut('slow');
	});
	
	$('.button_mini').each(function(i)  {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		});
	});


	/* Валидация форм */
	function validateForms(form){
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				phone: 'required',
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Пожалуйста, введите своё имя",
					minlength: jQuery.validator.format("Введите {0} символа")
				},
				phone: "Пожалуйста, введите свой номер телефона",
				email: {
				required: "Пожалуйста, введите свой почтовый адрес",
				email: "Неправильно введён почтовый адрес"
				}
			}
		});
	}

	validateForms('#consultation-form');
	validateForms('#consultation form');
	validateForms('#order form');


/* Маска ввода номера на сайте */

	$('input[name=phone]').mask("+7 (999) 999-9999");


/* Отправка данных на почту ? */
	$('form').submit(function(e) {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "mailer/smart.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			$('#consultation, #order').fadeOut();
			$('.overlay, #thanks').fadeIn('slow');

			$('form').trigger('reset');
		});
		return false;
	});


/* Smooth scroll and pageup */
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	$("a[href='#up']").click(function(){
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

/* Подключаем wow.js для создания анимации */
	new WOW().init();

})(jQuery);
