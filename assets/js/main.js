/***************************************************
==================== JS INDEX ======================
****************************************************
01. PreLoader Js
02. Mobile Menu Js
03. Common Js
04. Menu Controls JS
05. Offcanvas Js
06. Search Js
07. cartmini Js
08. filter
09. Body overlay Js
10. Sticky Header Js
11. Theme Settings Js
12. Nice Select Js
13. Smooth Scroll Js
14. Slider Activation Area Start
15. Masonary Js
16. Wow Js
17. Counter Js
18. InHover Active Js
19. Line Animation Js
20. Video Play Js
21. Password Toggle Js
****************************************************/

(function ($) {
	"use strict";	
	
	// PreLoader Js
	$(window).on('load', function () {
		setTimeout(function () {
			$('.preloader').fadeOut('fade');
			$(".content").show();
		},1000);
	});	
	// PreLoader Js end

	// mobile menu active 
	$('#mobile-menu').meanmenu({
		meanScreenWidth: "991",
		meanMenuContainer: '.mobile-menu',	
		meanExpand: ['<i class="fal fa-plus"></i>'],

	});	
// 03. Sidebar Js mobile menu active   
	$(".menu-icon").on("click", function () {
		$(".sidebar").toggleClass("sidebar-opened");
		$(".body-overlay").toggleClass("opened");
	});
	$(".sidebar-close").on("click", function () {
		$(".sidebar").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});

	$(".body-overlay").on("click", function () {
		$(".sidebar").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});

	// onePageNav 
	$('#nav-active').onePageNav();

	

	///////////////////////////////////////////////////
	// 07. Sticky Header Js
	$(window).on('scroll', function () {
		var scroll = $(this).scrollTop();
		if (scroll < 1) {
			$(".menu-area").removeClass("header-sticky");
		} else {
			$(".menu-area").addClass("header-sticky");
		}
	});


	////////////////////////////////////////////////////
	// <span class="type"></span>
	// type activation 

	new TypeIt(".type", {		
		speed: 200,
		loop: true,
	  })	
	  .type("Developer")	 
	  .delete()
	  .type("Designer")	 
	  .go();

	////////////////////////////////////////////////////

	
	////////////////////////////////////////////////////
	

	////////////////////////////////////////////////////
	// 03. Search Js
	// $(".search-open-btn").on("click", function () {
	// 	$(".search__popup").addClass("search-opened");
	// });
		
	// $(".search-close-btn").on("click", function () {
	// 	$(".search__popup").removeClass("search-opened");
	// });
  

	// $('.tp-hero-2__feature-box .tp-hero-2__feature-item').on('hover', function () {
	// 	$(this).addClass('active').siblings().find('.tp-hero-2__feature-item').removeClass('active');
	// });

	// $('.tp-hero-2__feature-item').on('mouseenter', function () {
	// 	$(this).addClass('active').parent().siblings().find('.tp-hero-2__feature-item').removeClass('active');
	// });

	// $('.tp-custom-accordion .accordion-items').on("click", function(){
	// 	$(this).addClass('tp-faq-active').siblings().removeClass('tp-faq-active');
	// });  


	// for header
	// if ($("#tp-header-top__value-toogle").length > 0) {
	// 	window.addEventListener('click', function(e){
		
	// 		if (document.getElementById('tp-header-top__value-toogle').contains(e.target)){
	// 			$(".tp-header-top__value-submenu").toggleClass("open");
	// 		}
	// 		else{
	// 			$(".tp-header-top__value-submenu").removeClass("open");
	// 		}
	// 	});
	// }


	// for header
	// if ($("#tp-header-top__lang-toogle").length > 0) {
	// 	window.addEventListener('click', function(e){
		
	// 		if (document.getElementById('tp-header-top__lang-toogle').contains(e.target)){
	// 			$(".tp-header-top__lang-submenu").toggleClass("open");
	// 		}
	// 		else{
	// 			$(".tp-header-top__lang-submenu").removeClass("open");
	// 		}
	// 	});
	// }


	///////////////////////////////////////////////////



	////////////////////////////////////////////////////
	// 03. Common Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
		$(this).removeAttr("data-background");
	});
	
	

	////////////////////////////////////////////////////


		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 300) {
				$('.back-to-top').addClass('btn-show');
			} else {
				$('.back-to-top').removeClass('btn-show');
			}
		});
	
		$('#back_to_top').on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	

		
		
	// 13. Swiper Js 
	const brandSwiper = new Swiper('.brandSwiper', {
		// Optional parameters
		speed:1000,
		loop: true,
		slidesPerView: 3,
		autoplay: true,
		spaceBetween: 30,
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		  },
		breakpoints: {			
			'992': {
				slidesPerView: 6,
			},
			'768': {
				slidesPerView: 4,
			},
			'576': {
				slidesPerView: 3,
			},
			'0': {
				slidesPerView: 2,
			}							
		}
	});
	// 13. Swiper Js
	const testiSwiper = new Swiper('.testiSwiper', {
		// Optional parameters
		speed:1000,
		loop: true,
		slidesPerView: 2,
		autoplay: true,
		spaceBetween: 30,
		breakpoints: {
		
			'1400': {
				slidesPerView:2,
			},
			'1200': {
				slidesPerView:2,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
						
		},

	});
	// 13. Swiper Js

	// 13. Swiper Js
	
	////////////////////////////////////////////////////
	// 13. Swiper Js
	
	// 13. Swiper Js
	
		








	
	// 09. Home-1-Slider js
	// $('.tp-testimonial-2-active').slick({
	// 	prevArrow: '<button type="button" class="slick-prev"><i class="fa-regular fa-arrow-up"></i></button>',
	// 	nextArrow: '<button type="button" class="slick-next"><i class="fa-regular fa-arrow-down"></i></button>',
	// 	appendArrows: $(".tp-testimonial-2-arrow"),
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	dots: false,
	// 	arrows: true,
	// 	focusOnSelect: true,
	// 	centerPadding: '0',
	// 	vertical: true,
	// 	verticalSwiping: true,
	// 	centerMode: true,
	// 	speed:1000,
	// 	responsive: [
	// 		{
	// 			breakpoint: 1200,
	// 			settings: {
	// 				slidesToShow: 2,
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 992,
	// 			settings: {

	// 			}
	// 		},
	// 		{
	// 			breakpoint: 768,
	// 			settings: {
	// 				slidesToShow: 1,
	// 			}
	// 		},
	// 		{
	// 			breakpoint: 480,
	// 			settings: {
	// 				slidesToShow: 1,
	// 			}
	// 		}
	// 	]
	// });



	// 13. Swiper Js
	
	////////////////////////////////////////////////////
	// 15. Masonary Js
	// $('.grid').imagesLoaded(function () {
	// 	// init Isotope
	// 	var $grid = $('.grid').isotope({
	// 		itemSelector: '.grid-item',
	// 		percentPosition: true,
	// 		masonry: {
	// 			// use outer width of grid-sizer for columnWidth
	// 			columnWidth: '.grid-item',
	// 		}
	// 	});


	// 	// filter items on button click
	// 	$('.masonary-menu').on('click', 'button', function () {
	// 		var filterValue = $(this).attr('data-filter');
	// 		$grid.isotope({ filter: filterValue });
	// 	});

	// 	//for menu active class
	// 	$('.masonary-menu button').on('click', function (event) {
	// 		$(this).siblings('.active').removeClass('active');
	// 		$(this).addClass('active');
	// 		event.preventDefault();
	// 	});

	// });

	/* magnificPopup img view */
	// $('.popup-image').magnificPopup({
	// 	type: 'image',
	// 	gallery: {
	// 		enabled: true
	// 	}
	// });

	// /* magnificPopup video view */
	// $(".popup-video").magnificPopup({
	// 	type: "iframe",
	// });


	// if ($('.scene').length > 0) {
	// 	$('.scene').parallax({
	// 		scalarX: 5.0,
	// 		scalarY: 5.0,
	// 	});
	// };

	////////////////////////////////////////////////////
	// 16. Wow Js
	// new WOW().init();

	// function tp_ecommerce() {
	// 	$('.tp-cart-minus').on('click', function () {
	// 		var $input = $(this).parent().find('input');
	// 		var count = parseInt($input.val()) - 1;
	// 		count = count < 1 ? 1 : count;
	// 		$input.val(count);
	// 		$input.change();
	// 		return false;
	// 	});
	
	// 	$('.tp-cart-plus').on('click', function () {
	// 		var $input = $(this).parent().find('input');
	// 		$input.val(parseInt($input.val()) + 1);
	// 		$input.change();
	// 		return false;
	// 	});

	// 	$("#slider-range").slider({
	// 		range: true,
	// 		min: 0,
	// 		max: 500,
	// 		values: [75, 300],
	// 		slide: function (event, ui) {
	// 			$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
	// 		}
	// 	});
	// 	$("#amount").val("$" + $("#slider-range").slider("values", 0) +
	// 		" - $" + $("#slider-range").slider("values", 1));
	
		

	// 	$('.tp-checkout-payment-item label').on('click', function () {
	// 		$(this).siblings('.tp-checkout-payment-desc').slideToggle(400);
			
	// 	});
		

	// 	$('.tp-color-variation-btn').on('click', function () {
	// 		$(this).addClass('active').siblings().removeClass('active');
	// 	});
		

	// 	$('.tp-size-variation-btn').on('click', function () {
	// 		$(this).addClass('active').siblings().removeClass('active');
	// 	});
	
		////////////////////////////////////////////////////
		// 17. Show Login Toggle Js
		// $('.tp-checkout-login-form-reveal-btn').on('click', function () {
		// 	$('#tpReturnCustomerLoginForm').slideToggle(400);
		// });
	
		// ////////////////////////////////////////////////////
		// // 18. Show Coupon Toggle Js
		// $('.tp-checkout-coupon-form-reveal-btn').on('click', function () {
		// 	$('#tpCheckoutCouponForm').slideToggle(400);
		// });
	
		// ////////////////////////////////////////////////////
		// // 19. Create An Account Toggle Js
		// $('#cbox').on('click', function () {
		// 	$('#cbox_info').slideToggle(900);
		// });
	
		////////////////////////////////////////////////////
	// 	// 20. Shipping Box Toggle Js
	// 	$('#ship-box').on('click', function () {
	// 		$('#ship-box-info').slideToggle(1000);
	// 	});
	// }
	// tp_ecommerce();

	// ////////////////////////////////////////////////////
	// // 17. Counter Js
	// new PureCounter();
	// new PureCounter({
	// 	filesizing: true,
	// 	selector: ".filesizecount",
	// 	pulse: 2,
	// });

	// ////////////////////////////////////////////////////
	// // 18. InHover Active Js
	// $('.hover__active').on('mouseenter', function () {
	// 	$(this).addClass('active').parent().siblings().find('.hover__active').removeClass('active');
	// });

	// $('.activebsba').on("click", function () {
	// 	$('#services-item-thumb').removeClass().addClass($(this).attr('rel'));
	// 	$(this).addClass('active').siblings().removeClass('active');
	// });



	// ////////////////////////////////////////////////////
	// // 19. Line Animation Js
	// if ($('#marker').length > 0) {
	// 	function tp_tab_line(){
	// 		var marker = document.querySelector('#marker');
	// 		var item = document.querySelectorAll('.menu-style-3  > nav > ul > li');
	// 		var itemActive = document.querySelector('.menu-style-3  > nav > ul > li.active');

	// 		function indicator(e){
	// 			marker.style.left = e.offsetLeft+"px";
	// 			marker.style.width = e.offsetWidth+"px";
	// 		}
				
		
	// 		item.forEach(link => {
	// 			link.addEventListener('mouseenter', (e)=>{
	// 				indicator(e.target);
	// 			});
				
	// 		});

			
	// 		var activeNav = $('.menu-style-3 > nav > ul > li.active');
	// 		var activewidth = $(activeNav).width();
	// 		var activePadLeft = parseFloat($(activeNav).css('padding-left'));
	// 		var activePadRight = parseFloat($(activeNav).css('padding-right'));
	// 		var totalWidth = activewidth + activePadLeft + activePadRight;
			
	// 		var precedingAnchorWidth = anchorWidthCounter();
		
		
	// 		$(marker).css('display','block');
			
	// 		$(marker).css('width', totalWidth);
		
	// 		function anchorWidthCounter() {
	// 			var anchorWidths = 0;
	// 			var a;
	// 			var aWidth;
	// 			var aPadLeft;
	// 			var aPadRight;
	// 			var aTotalWidth;
	// 			$('.menu-style-3 > nav > ul > li').each(function(index, elem) {
	// 				var activeTest = $(elem).hasClass('active');
	// 				marker.style.left = elem.offsetLeft+"px";
	// 				if(activeTest) {
	// 				// Break out of the each function.
	// 				return false;
	// 				}
			
	// 				a = $(elem).find('li');
	// 				aWidth = a.width();
	// 				aPadLeft = parseFloat(a.css('padding-left'));
	// 				aPadRight = parseFloat(a.css('padding-right'));
	// 				aTotalWidth = aWidth + aPadLeft + aPadRight;
			
	// 				anchorWidths = anchorWidths + aTotalWidth;
	
	// 			});
		
	// 			return anchorWidths;
	// 		}
	// 	}
	// 	tp_tab_line();
	// }


	// if ($('#productTabMarker').length > 0) {
	// 	function tp_tab_line_2(){
	// 		var marker = document.querySelector('#productTabMarker');
	// 		var item = document.querySelectorAll('.tp-product-tab button');
	// 		var itemActive = document.querySelector('.tp-product-tab .nav-link.active');

	// 		// rtl settings
	// 		var tp_rtl = localStorage.getItem('tp_dir');
	// 		let rtl_setting = tp_rtl == 'rtl' ? 'right' : 'left';

	// 		function indicator(e){
	// 			marker.style.left = e.offsetLeft+"px";
	// 			marker.style.width = e.offsetWidth+"px";
	// 		}
				
		
	// 		item.forEach(link => {
	// 			link.addEventListener('click', (e)=>{
	// 				indicator(e.target);
	// 			});
	// 		});
			
	// 		var activeNav = $('.nav-link.active');
	// 		var activewidth = $(activeNav).width();
	// 		var activePadLeft = parseFloat($(activeNav).css('padding-left'));
	// 		var activePadRight = parseFloat($(activeNav).css('padding-right'));
	// 		var totalWidth = activewidth + activePadLeft + activePadRight;
			
	// 		var precedingAnchorWidth = anchorWidthCounter();
		
		
	// 		$(marker).css('display','block');
			
	// 		$(marker).css('width', totalWidth);
		
	// 		function anchorWidthCounter() {
	// 			var anchorWidths = 0;
	// 			var a;
	// 			var aWidth;
	// 			var aPadLeft;
	// 			var aPadRight;
	// 			var aTotalWidth;
	// 			$('.tp-product-tab button').each(function(index, elem) {
	// 				var activeTest = $(elem).hasClass('active');
	// 				marker.style.left = elem.offsetLeft+"px";
	// 				if(activeTest) {
	// 				// Break out of the each function.
	// 				return false;
	// 				}
			
	// 				a = $(elem).find('button');
	// 				aWidth = a.width();
	// 				aPadLeft = parseFloat(a.css('padding-left'));
	// 				aPadRight = parseFloat(a.css('padding-right'));
	// 				aTotalWidth = aWidth + aPadLeft + aPadRight;
			
	// 				anchorWidths = anchorWidths + aTotalWidth;
	
	// 			});
		
	// 			return anchorWidths;
	// 		}
	// 	}
	// 	tp_tab_line_2();
	// }

	// ////////////////////////////////////////////////////
	// // 20. Video Play Js
	// var play = false;
	// $('.tp-video-toggle-btn').on('click', function(){

	// 	if(play === false){
	// 		$('.tp-slider-video').addClass('full-width');
	// 		$(this).addClass('hide');
	// 		play = true;

	// 		$('.tp-slider-video').find('video').each(function() {
	// 			$(this).get(0).play();
	// 		});
	// 	}else{
	// 		$('.tp-slider-video').removeClass('full-width');
	// 		$(this).removeClass('hide');
	// 		play = false;
	// 		$('.tp-slider-video').find('video').each(function() {
	// 			$(this).get(0).pause();
	// 		});
	// 	}

	// });

	////////////////////////////////////////////////////
	// 21. Password Toggle Js
	// if($('#password-show-toggle').length > 0){
	// 	var btn = document.getElementById('password-show-toggle');
		
	// 	btn.addEventListener('click', function(e){
			
	// 		var inputType = document.getElementById('tp_password');
	// 		var openEye = document.getElementById('open-eye');
	// 		var closeEye = document.getElementById('close-eye');
	
	// 		if (inputType.type === "password") {
	// 			inputType.type = "text";
	// 			openEye.style.display = 'block';
	// 			closeEye.style.display = 'none';
	// 		 } else {
	// 			inputType.type = "password";
	// 			openEye.style.display = 'none';
	// 			closeEye.style.display = 'block';
	// 		 }
	// 	});
	// }

	// if ($('.tp-header-height').length > 0) {
	// 	var headerHeight = document.querySelector(".tp-header-height");      
	// 	var setHeaderHeight = headerHeight.offsetHeight;	
		
	// 	$(".tp-header-height").each(function () {
	// 		$(this).css({
	// 			'height' : setHeaderHeight + 'px'
	// 		});
	// 	});
	//   }
	// // Jquery Appear raidal
	// if (typeof ($.fn.knob) != 'undefined') {
	// 	$('.knob').each(function () {
	// 	var $this = $(this),
	// 	knobVal = $this.attr('data-rel');

	// 	$this.knob({
	// 	'draw': function () {
	// 		$(this.i).val(this.cv + '%')
	// 	}
	// 	});

	// 	$this.appear(function () {
	// 	$({
	// 		value: 0
	// 	}).animate({
	// 		value: knobVal
	// 	}, {
	// 		duration: 2000,
	// 		easing: 'swing',
	// 		step: function () {
	// 		$this.val(Math.ceil(this.value)).trigger('change');
	// 		}
	// 	});
	// 	}, {
	// 	accX: 0,
	// 	accY: -150,
	// 	});
	// });
	// }

	// if($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length){
	// 	let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
	// 	let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
	// 	mobileNavContainer.innerHTML = navContent;
	
	
	// 	let arrow = $(".tp-main-menu-mobile .has-dropdown > a");
	
	// 	arrow.each(function () {
	// 		let self = $(this);
	// 		let arrowBtn = document.createElement("BUTTON");
	// 		arrowBtn.classList.add("dropdown-toggle-btn");
	// 		arrowBtn.innerHTML = "<i class='fal fa-angle-right'></i>";
	
	// 		self.append(function () {
	// 		  return arrowBtn;
	// 		});
	
	// 		self.find("button").on("click", function (e) {
	// 		  e.preventDefault();
	// 		  let self = $(this);
	// 		  self.toggleClass("dropdown-opened");
	// 		  self.parent().toggleClass("expanded");
	// 		  self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
	// 		  self.parent().parent().children(".tp-submenu").slideToggle();
	// 		});
	
	// 	});
	// }

	
	// $('.tp-feature-item').on('mouseenter', function () {
	// 	$(this).addClass('active').parent().siblings().find('.tp-feature-item').removeClass('active');
	// });

	// // jarallax
	// if ($('.jarallax').length > 0) {
	// 	$('.jarallax').jarallax({
	// 		speed: 0.2,
	// 		imgWidth: 1366,
	// 		imgHeight: 768,
	// 	});
		
	// };

	// ///////////////////////////////////////////////////
	// // 07. Sticky Header Js
	// windowOn.on('scroll', function () {
	// 	var scroll = windowOn.scrollTop();
	// 	if (scroll < 400) {
	// 		$("#header-sticky").removeClass("header-sticky");
	// 	} else {
	// 		$("#header-sticky").addClass("header-sticky");
	// 	}
	// });

	// if ($('.tp-header-height').length > 0) {
	// 	var headerHeight = document.querySelector(".tp-header-height");      
	// 	var setHeaderHeight = headerHeight.offsetHeight;	
		
	// 	$(".tp-header-height").each(function () {
	// 		$(this).css({
	// 			'height' : setHeaderHeight + 'px'
	// 		});
	// 	});
	// }

    // ////////////////////////////////////////////////////
	// // 05. One Page Scroll Js
	// function scrollNav() {
	// 	$('.tp-onepage-menu li a').click(function () {
	// 		$(".tp-onepage-menu li a.active").removeClass("active");
	// 		$(this).addClass("active");

	// 		$('html, body').stop().animate({
	// 			scrollTop: $($(this).attr('href')).offset().top - 80
	// 		}, 300);
	// 		return false;
	// 	});
	// }
	// scrollNav();



	

	//   new TypeIt(".type", {
	// 	strings: ["Developer", "Designer"],
	// 	speed: 75,
	// 	loop: true, // Should be "looping" instead of "loop"
	// }).go();
	











	  
	

})(jQuery);