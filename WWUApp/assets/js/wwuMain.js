/* ===========================
   Author: Bhargav Gandhi (BG)
   Description: wwuMain.js
   =========================== */


	// function setHeight() {
 //        windowHeight = $(window).innerHeight();
 //      };
 //      setHeight();

 //      function setWidth() {
 //        windowWidth = $(window).innerWidth();
 //      };
 //      setWidth();


$(function() {

 // setHeight();
 // setWidth();

 	$('body').addClass("Hide");
 	$('#preloader').removeClass("Hide");

 	$('#wwuLogoSec, #homeHero > img, p.homePara1, h3.comingSoonTxt, #button1, #button2, p.copyrightTxt').addClass('Hide');

	 var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);

	 var fadeClass = "fadeInUp";
	 var fadeClassL = "fadeInLeft";
	 var fadeClassR = "fadeInRight";
	 var fadeClassDown = "fadeInDown";

	 // if (isSafari){
	 // 	fadeClass = "fadeIn";
	 // 	fadeClassL = "fadeIn";
	 // 	fadeClassR = "fadeIn";
	 // 	fadeClassDown = "fadeIn";

	 // }

	$(window).load(function(){
		
		$('#preloader').fadeOut('slow',function(){
			$(this).remove();
			$('body').removeClass("Hide").addClass('fadeIn');
		});

		
	});

    
   //    $(window).resize(function() {
   //      setHeight();
   //       setWidth();

   //       	$('#homeHero').css({
			// 	'height' : (windowHeight)
			// })
   //    });

   //    	$('#homeHero').css({
			// 	'height' : (windowHeight)
			// })


    $('#nav-icon3').click(function(){
        $(this).toggleClass('open');
      });


	setTimeout(function(){
	 	$('#wwuLogoSec').removeClass("Hide").addClass('animated ' + fadeClassDown);
	 
	},  1000);

	setTimeout(function(){
	 	
	 	$('#homeHero > img').removeClass("Hide").addClass('animated fadeIn');
	},  100);

	setTimeout(function(){
	 	$('p.homePara1').removeClass("Hide").addClass('animated ' + fadeClass);
	},  1500);

	setTimeout(function(){
	 	$('h3.comingSoonTxt').removeClass("Hide").addClass('animated ' + fadeClass);
	},  2000);

	setTimeout(function(){
	 	$('#button1').removeClass("Hide").addClass('animated ' + fadeClassL);
	},  2500);

	setTimeout(function(){
	 	$('#button2').removeClass("Hide").addClass('animated ' + fadeClassR);
	},  2700);

	setTimeout(function(){
	 	$('p.copyrightTxt').removeClass("Hide").addClass('animated ' + fadeClass);
	},  3000);



});


