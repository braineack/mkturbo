
$(document).ready(function () {

  // $('.slider').fractionSlider({
	// 	'fullWidth': 			false,
	// 	'controls': 			true,
	// 	'pager': 				true,
	// 	'responsive':  			true,
	// 	'dimensions':  			'825,400',
	// });

  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });


  //Handles the carousel thumbnails
  $('[id^=carousel-selector-]').click(function() {
    var id_selector = $(this).attr("id").split('-').pop();
    	$('.carousel').carousel(parseInt(id_selector));
  });


});
