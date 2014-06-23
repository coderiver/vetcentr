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

// document click

	var agent = navigator.userAgent,
	event = (agent.match(/iPad/i)) ? "touchstart" : "click";

	$(document).bind(event, function(e){
		$(".js-popup").hide();
	});

});