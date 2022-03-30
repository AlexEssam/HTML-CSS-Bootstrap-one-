$(document).ready(function (){
	$('.carousel').carousel({
		interval:4000
	});

	//show Color Option
	$(".gear-check").click(function (){
		$(".color-option").fadeToggle();
	});

	// Change Colore On Click
	var colorLi = $(".color-option ul li")
	 colorLi 
		.eq(0).css("backgroundColor", "#e41b17").end()
		.eq(1).css("backgroundColor", "#001cff").end()
		.eq(2).css("backgroundColor", "#00ff01").end()
		.eq(3).css("backgroundColor", "#038103").end()
		.eq(4).css("backgroundColor", "#ff00f5");

		colorLi.click(function (){

			$("link[href*='theme']").attr("href", $(this).attr("data-value"));
		});

		// Scroll Botton

		var scrollButton = $("#scroll-top");
		$(window).scroll(function (){
			if ($(this).scrollTop() >=700){
				scrollButton.show();
			}
			else{
				scrollButton.hide();
			}

		});

		scrollButton.click(function (){
			$("html,body").animate({scrollTop : 0}, 600);
		});

		// Scroll Botton

		var scrollButton = $("#scroll-top");
		$(window).scroll(function (){
			if ($(this).scrollTop() >=700){
				scrollButton.show();
			}
			else{
				scrollButton.hide();
			}

		});

		scrollButton.click(function (){
			$("html,body").animate({scrollTop : 0}, 600);
		});


});

// Loading Screen

$(window).on('load', function (){ 
    
    $(".loading-overlay .spinner").fadeOut(2000, function (){
    	$("body").css("overflow", "auto");

    	$(this).parent().fadeOut(2000,function (){
    		
    		$(this).remove();
    	});
    });
                         
});﻿