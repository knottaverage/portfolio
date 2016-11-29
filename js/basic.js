$(document).ready(function() {

  // Ace Projects

  $('.aceSub1, .aceSub2').on("click", function() {
    var loc = $(this).attr("src");
    $('.aceResponsiveHero').attr("src", loc);
  });

  $('.aceOldSub1, .aceOldSub2').on("click", function() {
    var loc = $(this).attr("src");
    $('.aceHero').attr("src", loc);
  });

  $('.embraceSub1, .embraceSub2').on("click", function() {
    var loc = $(this).attr("src");
    $('.embraceHero').attr("src", loc);
  });


  var $nav_header    = $(window),
    header_height  = $('.body-container').height(),
    hero_height    = $(window).height(),
    offset_val     = hero_height - header_height;


  function navSlide() {
    var scroll_top = $(window).scrollTop();

    if (scroll_top >= offset_val) { // the detection!
      $('.basic-container--animate').removeClass();
    }
  }

  $(window).scroll(navSlide);

});
