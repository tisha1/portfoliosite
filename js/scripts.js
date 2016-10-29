$(document).ready(function() {

	function parallax(){
    var scrolled = $(window).scrollTop();
    $('#hero').css('margin-top', '100px');
    $('#hero').css('top', -(scrolled * 0.3) + 'px');
	}


	$(window).scroll(function(e){
	    parallax();
	});


	$('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });















});