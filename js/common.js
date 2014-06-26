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

	$(document).on("click",function(){
		$(".js-overlay").hide();
		$("html").removeClass("has-open-popup");
	});

	// popups
	$(".js-popup-link").on("click", function(event){
		$(".js-overlay").fadeOut(200);
		var popup = $(this).attr("href");
		$("html").addClass("has-open-popup");
		$("."+popup).parent().fadeIn(200);
		event.stopPropagation();
		return false; 
	});

	$(".js-popup-close").on("click", function(){
		$(".js-overlay").fadeOut(200); 
		$("html").removeClass("has-open-popup")
		return false;
	});
	$(".js-popup").on("click", function(event){
		event.stopPropagation();
	});

	// validation form
	function validate() {
		$(".js-validate").each(function(){
			if ($(this).length > 0) {
				$(this).validate({
					errorClass: "is-error",
					rules: {
						//firstname: "required",
						//lastname: "required",
						//fathername: "required",
						//alias: "required",
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
							equalTo: "#password"
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
					// 	firstname: "Вас так зовут?",
					// 	lastname: "У вас такая фамилия?",
					// 	fathername: "У вас такое отчество?",
					// 	password: {
					// 		required: "Пароли не совпадают",
					// 		minlength: "Минимум 5 символов"
					// 	},
					// 	confirm_password: {
					// 		required: "Пароли не совпадают",
					// 		minlength: "Минимум 5 символов",
					// 		equalTo: "Пароли не совпадают"
					// 	},
					// 	email: "Неверный формат",
					// 	address: "Это Ваш адрес?",
					// 	tel: {
					// 		required: "Телефон с ошибкой",
					// 		phoneUS: "Please enter a valid phone number: (e.g. 19999999999 or 9999999999)"
					// 	},
					// 	message: {
					// 		required: "Это Ваш вопрос?",
					// 		minlength: "Это Ваш вопрос?"
					// 	}
					// }
					messages: {
						firstname: "",
						lastname: "",
						fathername: "",
						alias: "",
						password: {
							required: "",
							minlength: ""
						},
						confirm_password: {
							required: "",
							minlength: "",
							equalTo: ""
						},
						email: "",
						address: "",
						tel: {
							required: "",
							phoneUS: ""
						},
						message: {
							required: "",
							minlength: ""
						}
					}
				});
			}
		});
	}
		
	validate();

	function validateEnter() {
		$(".js-validate-enter").each(function(){
			if ($(this).length > 0) {
				$(this).validate({
					errorClass: "is-error",
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
							required: "",
							minlength: ""
						},
						email: ""
					}
				});
			}
		});
	}
	validateEnter();

	function tab() {
       $(".js-tab").each(function(){
            var tab_link = $(this).find("a");
            var tab_item = $(this).find("li");
            var tab_cont = $(this).parents(".js-tab-group").find(".js-tab-cont");
           // tab_cont.hide();
            tab_item.first().addClass("is-active");
            //$(this).parents(".js-tab-group").find(".js-tab1").show();
       });
       $(".js-tab a").on("click", function() {
            var index = $(this).attr("href");  
            $(this).parents(".js-tab").find("li").removeClass("is-active");
            $(this).parent().addClass("is-active");
            $(this).parents(".js-tab-group").find(".js-tab-cont").hide();
            $(this).parents(".js-tab-group").find("."+index).show();
            return false;
      });
  	}
  	tab();

});