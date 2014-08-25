head.ready(function() {

	// info
	function info(){
		var item = $('.js-info');
		if (item.length) {
			$('.js-info-a').hide();
			item.each(function(){
				var q = $(this).find('.js-info-q');
				q.on('click', function(){
					$(this).next('.js-info-a').slideToggle('fast');
					return false;
				});
			});
		};
	}
	info();

	// reset search input
  function reset_search() {
    var input = $('.js-search'),
    		reset = $('.js-reset');
    if (input.length) {
    	reset.hide();
    	input.keyup(function(){
    	  if ( this.value !== 0 ) {
    	    $(this).parent().find('.js-reset').show();
    	  };
    	});
    	reset.on('click', function(){
    	  $(this).hide();
    	});
    };
  } 
  reset_search();

	// scroll top
	$('.js-up').on('click', function(){
		$('html, body').animate({
      scrollTop: $('.out').offset().top
    }, 500);
    return false;
	});	 

	// banners slider
	var slick_el = $('.js-banners');
	if (slick_el.length) {
		slick_el.slick({
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			dots: true
		});
	};

// roundabout slider
	
	$(".js-roundabout").roundabout({
		minScale: 0.7,
		autoplay: true,
    	autoplayDuration: 3000,
    	autoplayPauseOnHover: true
	});

// fancy box
	var fancy_el = $('.js-fancybox'),	
			fancy_popup = $('.js-fancybox-popup');
	if (fancy_el.length) {
		fancy_el.fancybox({
			padding: 10
		});
	};
	if (fancy_popup.length) {
		fancy_popup.fancybox({
			padding: 0,
			margin: [50, 50, 20, 20]
		});
	};

	$(document).on('click',function(){
		$('.js-overlay').hide();
		$('html').removeClass('has-open-popup');
	});

// popups
	$('.js-popup-link').on('click', function(event){
		if($(this).hasClass('js-popup-register-link')){
			$('.popup .js-tab .tab-simle__item:last-child a').trigger('click');
		}
		if($(this).hasClass('js-popup-enter-link')){
			$('.popup .js-tab .tab-simle__item:first-child a').trigger('click');
		}

		$('.js-overlay').fadeOut(200);
		var popup = $(this).attr('href');
		$('html').addClass('has-open-popup');
		$('.'+popup).parent().fadeIn(200);
		event.stopPropagation();
		return false; 
	});

	$('.js-popup-close').on('click', function(){
		$('.js-overlay').fadeOut(200); 
		$('html').removeClass('has-open-popup')
		return false;
	});
	$('.js-popup').on('click', function(event){
		event.stopPropagation();
	});

	// tabs
	var tabs_el = $('.js-tabs');
	tabs_el.each(function(){
		var tabs_btn = $(this).find('> .tabs__nav a'),
			tabs_container = $(this).find('> .tabs__container'),
			tabs_item = tabs_container.find('> .tabs__item');
		tabs_item.hide();
		tabs_item.first().show();
		tabs_btn.on('click', function() {
			if (!$(this).hasClass('is-active')) {
				var id = $(this).attr('href');
				tabs_btn.removeClass('is-active');
				$(this).addClass('is-active');
				tabs_item.hide();
				$(id).fadeIn();
				return false;
			};
		});
	});

	// services
	var services_el = $('.js-services'),
			services_el_item = services_el.find('.services__item'),
			services_el_list = services_el.find('.services__list'),
			services_el_title = services_el.find('.services__title'),
			services_el_all = services_el.find('.services__all');
	services_el_title.on('click', function(){
		if (!$(this).parent().hasClass('is-active')) {
			services_el_item.removeClass('is-active');
			services_el_list.slideUp();
			$(this).parent().addClass('is-active');
			$(this).next().slideDown();
		}
		else {
			$(this).parent().removeClass('is-active');
			$(this).next().slideUp();
		}
	});
	services_el_all.on('click', function(){
		var text_show = $(this).data('show'),
				text_hide = $(this).data('hide');
		if (!$(this).hasClass('is-active')) {
			$(this).addClass('is-active');
			$(this).html(text_hide);
			$(this).parent().find('.services__item').addClass('is-active');
			$(this).parent().find('.services__list').slideDown();
		}
		else {
			$(this).removeClass('is-active');
			$(this).html(text_show);
			$(this).parent().find('.services__item').removeClass('is-active');
			$(this).parent().find('.services__list').slideUp();
		};
		return false;
	});

	// schedule
	var schedule_el = $('.js-schedule'),
			schedule_el_time_link = schedule_el.find('.schedule__time > li > a'),
			schedule_el_time = schedule_el.find('.schedule__time > li > span'),
			schedule_el_help = schedule_el.find('.schedule__help'),
			schedule_el_btn = schedule_el.find('.btn-gray');
	schedule_el_time_link.hover(function(){
		schedule_el_help.removeClass('is-open');
		$(this).next().addClass('is-open');
	}, function(){});
	schedule_el_time.hover(function(){
		schedule_el_help.removeClass('is-open');
		$(this).next().addClass('is-open');
	}, function(){
		schedule_el_help.removeClass('is-open');
	});
	schedule_el_help.hover(function(){}, function(){
		schedule_el_help.removeClass('is-open');
	});
	schedule_el_btn.on('click', function(){
		schedule_el_help.removeClass('is-open');
		var text_show = $(this).data('show'), 
			  text_hide = $(this).data('hide');
		if (!$(this).hasClass('is-active')) {
			$(this).addClass('is-active');
			$(this).html(text_hide);
			$(this).prev().addClass('is-active');
			$(this).prev().slideDown();
		}
		else {
			$(this).removeClass('is-active');
			$(this).html(text_show);
			$(this).prev().removeClass('is-active');
			$(this).prev().slideUp();
		};
	});


	// validation form
	function validate() {
		$('.js-validate').each(function(){
			if ($(this).length > 0) {
				$(this).validate({
					errorClass: 'is-error',
					rules: {
						//firstname: 'required',
						//lastname: 'required',
						//fathername: 'required',
						//alias: 'required',
						username: {
							//required: true,
							minlength: 2
						},
						password: {
							//required: true,
							minlength: 5
						},
						confirm_password: {
							//required: true,
							minlength: 5,
							equalTo: '#password'
						},
						email: {
							//required: true,
							email: true
						},
						tel: {
							//required: true,
							minlength: 2,
						},
						address: {
							minlength: 2
						},
						message: {
							minlength: 4
						}
					},
					// messages: {
					// 	firstname: 'Вас так зовут?',
					// 	lastname: 'У вас такая фамилия?',
					// 	fathername: 'У вас такое отчество?',
					// 	password: {
					// 		required: 'Пароли не совпадают',
					// 		minlength: 'Минимум 5 символов'
					// 	},
					// 	confirm_password: {
					// 		required: 'Пароли не совпадают',
					// 		minlength: 'Минимум 5 символов',
					// 		equalTo: 'Пароли не совпадают'
					// 	},
					// 	email: 'Неверный формат',
					// 	address: 'Это Ваш адрес?',
					// 	tel: {
					// 		required: 'Телефон с ошибкой',
					// 		phoneUS: 'Please enter a valid phone number: (e.g. 19999999999 or 9999999999)'
					// 	},
					// 	message: {
					// 		required: 'Это Ваш вопрос?',
					// 		minlength: 'Это Ваш вопрос?'
					// 	}
					// }
					messages: {
						firstname: '',
						lastname: '',
						fathername: '',
						alias: '',
						password: {
							required: '',
							minlength: ''
						},
						confirm_password: {
							required: '',
							minlength: '',
							equalTo: ''
						},
						email: '',
						address: '',
						workplace: '',
						edu: '',
						status: '',
						exp: '',
						tel: {
							required: '',
							phoneUS: ''
						},
						message: {
							required: '',
							minlength: ''
						}
					}
				});
			}
		});
	}
		
	validate();

	function validateEnter() {
		$('.js-validate-enter').each(function(){
			if ($(this).length > 0) {
				$(this).validate({
					errorClass: 'is-error',
					rules: {
						password: {
							//required: true,
							minlength: 5
						},
						email: {
							//required: true,
							email: true
						},
					},
					messages: {
						password: {
							required: '',
							minlength: ''
						},
						email: ''
					}
				});
			}
		});
	}
	validateEnter();

// tabs
	function tab() {
       $('.js-tab').each(function(){
            var tab_link = $(this).find('a');
            var tab_item = $(this).find('li');
            var tab_cont = $(this).parents('.js-tab-group').find('.js-tab-cont');
           // tab_cont.hide();
            tab_item.first().addClass('is-active');
            //$(this).parents('.js-tab-group').find('.js-tab1').show();
       });
       $('.js-tab a').on('click', function() {
            var index = $(this).attr('href');  
            $(this).parents('.js-tab').find('li').removeClass('is-active');
            $(this).parent().addClass('is-active');
            $(this).parents('.js-tab-group').find('.js-tab-cont').hide();
            $(this).parents('.js-tab-group').find('.'+index).show();
            return false;
      });
  	}
  	tab();

// sitemap popup

	$('.js-sitemap').hide();

	$('.js-sitemap-btn').on('click', function(){
		$('.js-sitemap').show();
		return false;
	});

	$('.js-sitemap-close').on('click', function(){
		$(this).parents('.js-sitemap').hide();
		return false;
	});

// catalog tabs

	if ($('.catalog__tabs').length) {
		function CatalogTabs(){
			
			$('.catalog__tabs').each(function(){
				var tabs_btn = $(this).find('> .catalog__tabs-nav a'),
					tabs_container = $(this).find('> .catalog__tabs-wrap'),
					tabs_item = tabs_container.find('> .catalog__tabs-content'),
					tabs_bg = $('.catalog__bg img');
				tabs_item.hide();
				tabs_item.first().show();
				tabs_btn.on('click', function() {
					if (!$(this).hasClass('is-active')) {
						var id = $(this).attr('href');
						tabs_btn.removeClass('is-active');
						$(this).addClass('is-active');
						tabs_item.hide();
						$(id).fadeIn('fast');
						//change background
						tabs_bg.removeClass('is-active');
						$('[data-type = '+id+']').addClass('is-active');
						
						return false;
					};
				});
			});

		}
		CatalogTabs();
	}

// scroll-pane

	function scrollPane(){
    if ($('.js-scroll-pane').length){
      $('.js-scroll-pane').jScrollPane({
        reinitialise: true
      }); 
    }
  }
	
  scrollPane();

// catalog popup
	
	$('.js-catalog').hide();

	function catalogPopup(){
		if ($('.js-catalog')) {

			var link = $('.js-catalog-link'),
			close = $('.js-catalog-close');

			link.each(function(){
				$(this).on('click', function(){
					$(this).parent().children('.js-catalog').fadeIn("200");
					return false;
				});	
			});
			close.on('click', function(){
				$(this).parents('.js-catalog').fadeOut("200");
				return false;
			});

		}
	} 	
	catalogPopup();

// cancel popup
	
	$(".js-popup-cancel-btn").on('click', function(){
		$(".js-popup-cancel").show();
		return false;
	});


	// jquery ui slider
	var range_slider = $('.js-range-slider'),
			range_slider_el = range_slider.find('.range__el'),
			range_slider_from = range_slider.find('.range__from'),
			range_slider_to = range_slider.find('.range__to'),
			range_slider_currency = range_slider.data('currency');
	if (range_slider.length) {
		range_slider_el.slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 75, 300 ],
			slide: function( event, ui ) {
			  range_slider_from.html(ui.values[0] + ' ' + range_slider_currency);
			  range_slider_to.html(ui.values[1] + ' ' + range_slider_currency);
			}
		});
		range_slider_from.html(range_slider_el.slider('values', 0) + ' ' + range_slider_currency);
		range_slider_to.html(range_slider_el.slider('values', 1) + ' ' + range_slider_currency);
	};


	$('.js-clone-workplace').click(function(event) {
		event.preventDefault();
		var _elementClone = $("#toclone div").clone(); 
		$(".js-inserthere").append(_elementClone);
	});

});