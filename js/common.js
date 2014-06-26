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

	// fancy box
	var fancy_el = $('.js-fancybox'),	
			fancy_popup = $('.js-fancybox-popup');
	if (fancy_el.length) {
		fancy_el.fancybox({
			padding: 10
		});
	};
	if (fancy_popup.length) {
		fancy_el.fancybox({
			padding: 0
		});
	};

	// document click
	var agent = navigator.userAgent,
	event = (agent.match(/iPad/i)) ? 'touchstart' : 'click';

	$(document).bind(event, function(e){
		$('.js-popup').hide();
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

});