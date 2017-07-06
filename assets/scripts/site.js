
$(document).ready(function () {

  $('.slider').fractionSlider({
		'fullWidth': 			false,
		'controls': 			true,
		'pager': 				true,
		'responsive':  			true,
		'dimensions':  			'825,400',
	});

  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });


  //Handles the carousel thumbnails
  $('[id^=carousel-selector-]').click(function() {
    var id_selector = $(this).attr("id");
    var id = id_selector.split('-').pop();
    if (id == 0) {
    	$('.carousel').carousel(0);
		}
    if (id == 1) {
    	$('.carousel').carousel(1);
		}
    if (id == 2) {
    	$('.carousel').carousel(2);
		}
    if (id == 3) {
    	$('.carousel').carousel(3);
		}
    if (id == 4) {
      $('.carousel').carousel(4);
    }
    if (id == 5) {
      $('.carousel').carousel(5);
    }
    if (id == 6) {
      $('.carousel').carousel(6);
    }
    if (id == 7) {
      $('.carousel').carousel(7);
    }
    if (id == 8) {
      $('.carousel').carousel(8);
    }
    if (id == 9) {
      $('.carousel').carousel(9);
    }
    if (id == 10) {
      $('.carousel').carousel(10);
    }
    if (id == 11) {
      $('.carousel').carousel(11);
    }
    if (id == 12) {
      $('.carousel').carousel(12);
    }
  });


});
