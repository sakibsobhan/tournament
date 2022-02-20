	// banner slider

	$(".banner-slider").slick({
		autoplay: true,
		prevArrow: '<i class="fa-solid fa-arrow-left-long prev"></i>',
		nextArrow: '<i class="fa-solid fa-arrow-right-long next"></i>',
	});

	// countdown
	$('#countdown-active1').countdown('2023/04/01', function(event) {
		$(this).html(event.strftime('<div class="single-counter">%D <span>Days</span> </div><div class="single-counter">%H <span>Hours</span> </div><div class="single-counter">%M <span>Minutes</span> </div><div class="single-counter">%S <span>Seconds</span> </div>'));
	  });
	$('#countdown-active2').countdown('2023/05/02', function(event) {
		$(this).html(event.strftime('<div class="single-counter">%D <span>Days</span> </div><div class="single-counter">%H <span>Hours</span> </div><div class="single-counter">%M <span>Minutes</span> </div><div class="single-counter">%S <span>Seconds</span> </div>'));
	  });
	$('#countdown-active3').countdown('2023/06/03', function(event) {
		$(this).html(event.strftime('<div class="single-counter">%D <span>Days</span> </div><div class="single-counter">%H <span>Hours</span> </div><div class="single-counter">%M <span>Minutes</span> </div><div class="single-counter">%S <span>Seconds</span> </div>'));
	  });
	


	// about slider
	$(".top-slider").slick({
		autoplay: true,
		prevArrow: '<i class="fa-solid fa-arrow-left-long prev"></i>',
		nextArrow: '<i class="fa-solid fa-arrow-right-long next"></i>',
		asNavFor: '.bottom-slider'
	});
	$(".bottom-slider").slick({
		arrows: false,
		asNavFor: '.top-slider',
	});

	// venobox
	new VenoBox({
		selector: ".my-link"
	});

	// popular slider
	$(".left-slider").slick({
		vertical: true,
		slidesToShow: 3,
		prevArrow: '<i class="fa-solid fa-angle-up up"></i>',
		nextArrow: '<i class="fa-solid fa-angle-down down"></i>',
		centerMode: true,
		centerPadding: 0,
		asNavFor:'.right-slider',
		// autoplay: true,
		
	});
	$(".right-slider").slick({
		arrows:false,
		asNavFor:'.left-slider',
	});

	// testi slider
	$(".up-slider").slick({
		arrows:false,
		asNavFor:'.down-slider',
		autoplay: true,
	});
	$(".down-slider").slick({
		arrows:false,
		asNavFor:'.up-slider',
	});

	// news slider
	$(".news-slider").slick({
		slidesToShow:2,
		prevArrow: '<i class="fa-solid fa-arrow-left-long prev"></i>',
		nextArrow: '<i class="fa-solid fa-arrow-right-long next"></i>',
		// autoplay: true,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 576,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			  }
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		  ]
	});



	

