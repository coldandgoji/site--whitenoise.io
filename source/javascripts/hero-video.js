(function () {

  'use strict'

  var n;

  $(document).ready(function () {

    n.Toggle.listeners();
    n.Hover.listeners();

    var video = $('.hero-video .hero-video__video')
    var preloader = $('.hero-video .hero-video__preloader');

    function checkLoad() {
      if (video.readyState === 4) {
        preloader.hide();
      } else {
        setTimeout(checkLoad, 100);
      }
    }

    checkLoad();

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
