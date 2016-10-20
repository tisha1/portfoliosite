$(document).ready(function() {

	function parallax(){
    var scrolled = $(window).scrollTop();
    $('#hero').css('top', -(scrolled * 0.1) + 'px');
	}

	$(window).scroll(function(e){
	    parallax();
	});


	















});