head.ready(function() {

// info

	function info(){
		var item = $(".js-info");
		$('.js-info-a').hide();
		item.each(function(){
			var q = $(this).find('.js-info-q');
			q.on('click', function(){
				$(this).next('.js-info-a').slideToggle('fast');
				return false;
			});
		});
	}
	if ($(".info").length) {
		info();
	};	

// reset search input

    function reset_search() {
        var input = $(".js-search");
        $(".js-reset").hide();
        input.keyup(function(){
            if ( this.value !== 0 ) {
                $(this).parent().find('.js-reset').show();
            };
        });
        $('.js-reset').on('click', function(){
            $(this).hide();
        });

    } 
    if ($('.js-search').length) {
    	reset_search();
    };

// scroll top

	$(".js-up").on('click', function(){
		$('html, body').animate({
    	    scrollTop: $(".out").offset().top
    	}, 500);
    	return false;
	});	 

// banners slider

	

// document click

	var agent = navigator.userAgent,
	event = (agent.match(/iPad/i)) ? "touchstart" : "click";

	$(document).bind(event, function(e){
		$(".js-popup").hide();
	});

});