(function($){
	"use strict"; // Start of use strict

	$(document).ready(function() {
    "use strict";

    /*Wellcome */
    $("body").css("overflow-y", "hidden");
    // window.scrollTo(0,0)
    // $("#modal").show();



    /*Audio BG */
    const cargarSonido = function (fuente) {
      const sonido = document.createElement("audio");
      sonido.src = fuente;
      sonido.setAttribute("preload", "auto");
      sonido.setAttribute("controls", "none");
      sonido.style.display = "none"; // <-- oculto
      document.body.appendChild(sonido);
      return sonido;
    };
    const $botonReproducir = document.querySelector("#btnReproducir"),
      $botonPausar = document.querySelector("#btnPausar"),
      $botonReiniciar = document.querySelector("#btnReiniciar");
    // El sonido que podemos reproducir o pausar
    const sonido = cargarSonido("./audio/intro.mp3");

    $botonReproducir.onclick = () => {
      $botonPausar.style.display = "flex"
      $botonReproducir.style.display = "none"
      $botonReproducir.style.margin = "10px 20px 0px 0px"
      sonido.play();
    };
    $botonPausar.onclick = () => {
      $botonPausar.style.display = "none"
      $botonReproducir.style.display = "flex"
      $botonReproducir.style.margin = "10px 20px 0px 0px"
      sonido.pause();
    };
    $botonReiniciar.onclick = () => {
      sonido.currentTime = 0;
    };
    $("#wellcome").click(() => {
      sonido.play();
      $("body").css("overflow-y", "auto");
      window.scrollTo(0, 0)
      $("#modal").hide().fast();
    })

    /*Vegas BG */
    $("#vegas").vegas({
      slides: [
        { src: "./images/portada/A_R-100.jpg" },
        { src: "./images/portada/A_R-67.jpg" },
        { src: "./images/portada/A_R-4.jpg" },
        { src: "./images/portada/A_R-65.jpg" },
        { src: "./images/portada/A_R-200.jpg" },
        { src: "./images/portada/A_R-7.jpg" },
        { src: "./images/portada/A_R-88.jpg" },
        { src: "./images/portada/A_R-190.jpg" },
        { src: "./images/portada/A_R-33.jpg" },
      ],
      transition: 'blur',
      shuffle: true
    });

		/*Gallery ColorBox */
		// $('.gallery_txt a').colorbox({
		// 	rel:'gal',
		// 	maxWidth:"100%",
		// });

		/*Main Menu Button */
		$('.main_menu_btn').on("click", function(e){
			$(this).toggleClass('main_menu_btn_open');
			$('.main_menu_block').toggleClass('main_menu_block_open').fadeToggle();
			$('.main_menu_block').find('.menu_wrapper').toggleClass('active');
			$('header .anim').toggleClass('active');
			e.preventDefault();
		});

		/* Section Background */
		$('section, .parallax').each(function(){
			var image = $(this).attr('data-image');
			if (image){
				$(this).css('background-image', 'url('+image+')');
			}
		});

		/*ColorBox*/
		if ($(window).width() >= 760) {
			$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
		}else{
			$(".youtube").colorbox({iframe:true, innerWidth:320, innerHeight:240});
		}
		$(window).resize(function () {
			if ($(window).width() >= 760) {
				$(".youtube").colorbox({iframe:true, innerWidth:640, innerHeight:390});
			}else{
				$(".youtube").colorbox({iframe:true, innerWidth:320, innerHeight:240});
			}
		 });

		/*Scroll Effect*/
		$('.intro_down, .go').on("click", function(e){
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
			e.preventDefault();
		});

		/*Show/Hide Photo in When&Where Block*/
		$('.photocamera span').on("click", function(e){
			$(this).parents('section').find('.opacity').toggleClass('fade');
			$(this).parents('section').find('.over').fadeToggle();
			e.preventDefault();
		});

		/*Player*/
		$('.music').on("click", function(e){
			$('.player').fadeToggle();
			e.preventDefault();
		});


		/*CountDown*/
		$('.married_coundown').countdown({until: new Date(2023, 7, 19)});

		/*OWL Carousel in Our Story*/
		$(".story_wrapper").owlCarousel({
	 		navigation : true,	responsive: true, responsiveRefreshRate : 200,	slideSpeed : 200,
	 		paginationSpeed : 200,	rewindSpeed : 500,	items:3,  itemsTablet: [768,1], autoPlay : false,
			itemsMobile : [479,1], 	itemsDesktopSmall : [980,1],  itemsDesktop : [1500,2], mouseDrag:false
		});

		/*Gallery Carousel */
		$(".gallery_wrapper").owlCarousel({
	 		navigation : true,	responsive: true, responsiveRefreshRate : 200,	slideSpeed : 200,
	 		paginationSpeed : 200,	rewindSpeed : 500,	items:6,  itemsTablet: [768,2], autoPlay : true,
			itemsMobile : [479,1], mouseDrag:false
		});
    $('.gallery_item').css("cursor", "pointer")

    $('.gallery_item').click((e) => {
      const index = e.currentTarget.attributes[1].value

      var viewer = new Viewer(document.getElementById('viewerjs'), {
        title: true,
        initialViewIndex: index -1,
        title: function (image) {
          console.log(image);
          return image.alt;
        },
        viewed: function () {
          var titleElement = document.querySelector('.viewer-title');
          if (titleElement) {
            titleElement.style.fontSize = '30px';
            titleElement.style.fontWeight = 'bold';
            titleElement.style.position = 'absolute';
            titleElement.style.top = '-60px';
            titleElement.style.display = 'block';
            titleElement.style.left = '0px';
            titleElement.style.width = '100%';
            // titleElement.style.transform = 'translateX(-50%)';
            titleElement.style.color = 'white';
            titleElement.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.8)';
          }
        },
        hidden: function () {
          viewer.destroy();
        },
      });

      viewer.show();

    });

		/*Registry Carousel */
		$(".registry_wrapper").owlCarousel({
	 		navigation : true, responsive: true, responsiveRefreshRate : 200, slideSpeed : 200, paginationSpeed : 200,
			rewindSpeed : 500,	stopOnHover : true, autoHeight : true, items:3, mouseDrag:false, autoPlay : true
		});

		/*The Crew Carousel*/
		$(".guest_wrapper").owlCarousel({
	 		navigation : true, responsive: true, responsiveRefreshRate : 200, slideSpeed : 200,	paginationSpeed : 200,
			rewindSpeed : 500, stopOnHover : true, autoHeight : true, items:4, mouseDrag:false, autoPlay : true
		});

		/*Slider Carousel*/
		$(".slider").owlCarousel({
	 		navigation : true, responsive: true, responsiveRefreshRate : 200, slideSpeed : 200,	paginationSpeed : 200,
			rewindSpeed : 500, stopOnHover : false, autoHeight : true, singleItem:true, mouseDrag:false, autoPlay : true, transitionStyle : "fade"
		});

		/*Blog Inside*/
		$(".blog_inside_wrapper").owlCarousel({
	 		navigation : true, responsive: true, responsiveRefreshRate : 200, slideSpeed : 200,	paginationSpeed : 200,
			rewindSpeed : 500, stopOnHover : false, autoHeight : true, singleItem:true, mouseDrag:false, autoPlay : true, transitionStyle : "fade"
		});

		/* Top Menu Click to Section */
		$('.sub_menu').find('a').on("click", function(e){
			$('.sub_menu').find('a').removeClass('active');
			$(this).addClass('active');
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top +1
			}, 1000);
			$(".main_menu_btn").trigger('click');
			e.preventDefault();
		});


		/*FireFly in Intro*/
		$.firefly({
			color: '#fff', minPixel: 1, maxPixel: 3, total : 55, on: '.into_firefly'
		});


	});

	$(window).load(function(){
		/*ScrollR */
		if ($(window).width() > 1200) {
			var s = skrollr.init({
				forceHeight: false
			});
		}
	});
})(jQuery);