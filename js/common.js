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

	// document click
	var agent = navigator.userAgent,
	event = (agent.match(/iPad/i)) ? 'touchstart' : 'click';

	$(document).bind(event, function(e){
		$('.js-popup').hide();
	});

});