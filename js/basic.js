$(document).ready(function() {
  $(".inline").modaal();
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

  $('.quanta1, .quanta2').on("click", function() {
    var loc = $(this).attr("src");
    $('.quantaImaging').attr("src", loc);
  });

  $('.patternLab1, .patternLab2').on("click", function() {
    var loc = $(this).attr("src");
    $('.patternLab').attr("src", loc);
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


  // New Global JS 2017
  // Menu
  $('.new__menu-button').on('click', function() {
    $('.new__nav').addClass('new__nav--show animated fadeIn');
    $(this).hide();
  });
  $('.new__close-button').on('click',function() {
    $('.new__nav').removeClass('new__nav--show animated slideInRight');
    $('.new__menu-button').show();
  });
  // Nav

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
      $(".new__logo-container a img").addClass("smaller");
      $(".new__menu-button").addClass("new__menu-button--smaller");
    } else {
      $(".new__logo-container a img").removeClass("smaller");
      $(".new__menu-button").removeClass("new__menu-button--smaller");
    }
  });

  // Smooth Scrolling
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });




});
