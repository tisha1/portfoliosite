$(document).ready(function() {

	function parallax(){
    var scrolled = $(window).scrollTop();
    $('#hero').css('margin-top', '100px');
    $('#hero').css('top', -(scrolled * 0.3) + 'px');
	}


	$(window).scroll(function(e){
	    parallax();
	});


	















});