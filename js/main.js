// navbar show and hide on scroll
$(document).scroll(function() {
  var y = $(this).scrollTop();
  
  if (y > 500) {
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

// close side navbar on link-click
$(".side-bar-link").click(function() {
  $(".showNav").removeClass('showNav');
  $(".showNav").addClass('showNav');
});
var sum = 1;
for (var i = 2; i <= 5; i++) {
sum = sum * i 
  console.log(sum)
}

var p = 1 * 2 * 3 * 4 * 5
console.log(p)






















