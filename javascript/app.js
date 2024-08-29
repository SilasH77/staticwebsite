//$('.exp').css('left', '25%');

//$('.exp2').css('left', '-25%');

//SCROLL TO RECIPES
$("#button2").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".aboutMe").offset().top
    	}, 500);
});

//SCROLL TO ABOUTME
$("#button").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".experience").offset().top
    	}, 500);
});


//SCROLL TO ABOUTME
$("#button3").click(function() {
    	$('html, body').animate({
        	scrollTop: $(".skills").offset().top
    	}, 500);
});

