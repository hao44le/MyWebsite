/* jshint browser: true, devel: true, jquery: true */
/* globals skrollr, mobile */

;(function($, window, document, undefined) {
  'use strict';


  // smooth scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') || location.hostname === this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top -40
      }, 1500);
      return false;
    }
    }
  });

})(jQuery, window, document);
