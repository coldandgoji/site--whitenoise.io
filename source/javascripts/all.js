(function () {

  'use strict'

  var n;

  $(document).ready(function () {

    n.Toggle.listeners();
    n.Hover.listeners();

    $('.header').headroom();

    var video = $('.hero-video .hero-video__video')
    var preloader = $('.preloader');

    video.on('canplay', function (event) {
      preloader.fadeOut(250);
    });

    var $carousel = $('.slideshow .slideshow__slides');

    function showSliderScreen($widthScreen) {

      if ($widthScreen >= "1000") {
        if (!$carousel.hasClass('slick-initialized')) {
          $carousel.slick({
            slide: '.slide',
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrows: false,
            focusOnSelect: true,
            dots: false
          });
        }

      } else {
        if ($carousel.hasClass('slick-initialized')) {
          $carousel.unslick();
        }
      }   
    }

    $('.pager .pager__item').on('click', function(e) {
      e.preventDefault();
      var i = $(this).index();
      $carousel.slickGoTo(i);
      $('.pager .pager__item').removeClass('pager__item--active');
      $('.pager.pager--text .pager__item:eq(' + i + ')').addClass('pager__item--active');
      $('.pager.pager--dots .pager__item:eq(' + i + ')').addClass('pager__item--active');
    });

    var widthScreen = $(window).width();

    $(window).ready(showSliderScreen(widthScreen)).resize(
      function () {
        var widthScreen = $(window).width();
        showSliderScreen(widthScreen);
      }
    );


    if ($(window).width() >= "1000") {
      var windowHeight = $(window).height();
      $(".hero-video").height(windowHeight);
    }


    $('.hero-video .hero-video__scroll').click(function(){
      $('html,body').animate({scrollTop: $('.slideshow .slideshow__pager--text').offset().top},500);
    });


  }),

  $(window).resize(function() {
    if ($(window).width() >= "1000") {
      var windowHeight = $(window).height();
      $(".hero-video").height(windowHeight);
    }
    else {
      $(".hero-video").height('auto');
    }
  }),

  n = {

    Hover: {
      listeners: function() {
        // $('.hover').hover(n.Hover.hover_component);
      },

      hover_component: function(e) {
      }
    },

    Toggle: {

      listeners: function() {
        // $('.toggle').on('click', n.Toggle.toggle_component);
      },

      toggle_component: function(e) {
      }
    }
  }

}());
