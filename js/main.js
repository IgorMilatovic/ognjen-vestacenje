// navbar show and hide on scroll
$(document).scroll(function() {
  var y = $(this).scrollTop();
  
  if (y > 650) {
    $('.custom-nav').css({
    					  'opacity': '1',
    					  'transition': 'opacity 0.5s',
	                      '-webkit-transition': 'opacity 0.5s'
    });						
  } 
  
  else {
    $('.custom-nav').css({
    					  'opacity': '0',
    					  'transition': 'opacity 0.5s',
	                      '-webkit-transition': 'opacity 0.5s'
    });
  }
});

// small screen navigation collapse
$(".button-holder").click(function() {
	$(".hideNav").toggleClass('showNav');
});
