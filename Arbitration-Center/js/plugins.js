/* jslint plusplus: true, evil:true */
/* global $, jQuery, console, document, window, alert, prompt, confirm */

/* Window Height */
$(function () {
  "use strict";
  var windowH = $(window).height(),
    upperbar = $(".upper-bar").innerHeight(),
    navbar = $(".navbar").innerHeight();
  $(".windowHeight, .carousel-item").height(windowH - (upperbar + navbar));
  //
  $(".windowHeight-middle").height(windowH / 2);
});
/* form-sine-in */
$(function () {
  "use strict";
  $(".navbar .sign").click(function (e) {
    e.preventDefault();
    $(".form-sine-in").slideToggle();
  });
});
