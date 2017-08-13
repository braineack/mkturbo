
$(document).ready(function () {

  // $('.slider').fractionSlider({
	// 	'fullWidth': 			false,
	// 	'controls': 			true,
	// 	'pager': 				true,
	// 	'responsive':  			true,
	// 	'dimensions':  			'825,400',
	// });

  //Activates the offcanvas navigation panel
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });

  //Handles the carousel thumbnails
  $('[id^=carousel-selector-]').click(function() {
    var id_selector = $(this).attr("id").split('-').pop();
    	$('.carousel').carousel(parseInt(id_selector));
  });

});


$(document).bind('keyup', function(e) {
  //Allows keyboard control of the carousel
  if (e.which==39) {
      $('.carousel').carousel('next');
  }
  else if(e.which==37){
      $('.carousel').carousel('prev');
  }
});
