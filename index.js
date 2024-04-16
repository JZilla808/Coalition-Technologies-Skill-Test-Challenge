// Showcase proficiency in jQuery event handling and DOM manipulation
$(document).ready(function () {
  // Demonstrate ability to create interactive tab functionality
  $("#mountain-1, #mountain-2").click(function () {
    $("#mountain-1, #mountain-2").toggleClass("active inactive");
    $("#tab-1-image, #tab-2-image").toggleClass(
      "active-tab-image inactive-tab-image"
    );
    $("#event-schedule-section").toggleClass("active-section inactive-section");
  });

  // Highlight skills in implementing accordion functionality
  $("#accordion-button-1").click(function () {
    $("#accordion-button-1").toggleClass('"" collapsed');
    $("#mountain1-details").toggleClass('"" show');
  });
  $("#accordion-button-2").click(function () {
    $("#accordion-button-2").toggleClass('"" collapsed');
    $("#mountain2-details").toggleClass('"" show');
  });
});

// Exhibit expertise in responsive design and smooth scrolling
$(".footer-logo-link, .navbar-brand").click(function () {
  if ($(window).width() >= 900) {
    // Implement smooth scrolling for desktop view
    $("html, body").animate(
      {
        scrollTop: $("#desktop-hero").offset().top,
      },
      800
    );
  } else {
    // Optimize smooth scrolling for mobile view
    $("html, body").animate(
      {
        scrollTop: $("#hero").offset().top,
      },
      300
    );
  }
});
