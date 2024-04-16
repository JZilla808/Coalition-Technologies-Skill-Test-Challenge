"use strict";
$(document).ready(function () {
  $("#mountain-1, #mountain-2").click(function () {
    $("#mountain-1, #mountain-2").toggleClass("active inactive");
    $("#tab-1-image, #tab-2-image").toggleClass(
      "active-tab-image inactive-tab-image"
    );
    $("#event-schedule-section").toggleClass("active-section inactive-section");
  });

  $("#accordion-button-1").click(function () {
    $("#accordion-button-1").toggleClass('"" collapsed');
    $("#mountain1-details").toggleClass('"" show');
  });
  $("#accordion-button-2").click(function () {
    $("#accordion-button-2").toggleClass('"" collapsed');
    $("#mountain2-details").toggleClass('"" show');
  });
});

$(".footer-logo-link, .navbar-brand").click(function () {
  if ($(window).width() >= 900) {
    // Desktop view
    $("html, body").animate(
      {
        scrollTop: $("#desktop-hero").offset().top,
      },
      800
    );
  } else {
    // Mobile view
    $("html, body").animate(
      {
        scrollTop: $("#hero").offset().top,
      },
      300
    );
  }
});
