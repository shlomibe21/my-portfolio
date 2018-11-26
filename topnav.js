'use strict';

$(function () {
  $(".top-nav .icon").click(event => {
    const className = $(".top-nav").attr("class");
    if (className === "top-nav") {
      $('#top-nav').removeClass().addClass('top-nav responsive');
    } else {
      $('#top-nav').removeClass().addClass('top-nav');
    }
  });

  $('#top-nav-home').click(function () {
    closeResponsiveNavBar();
    let scrollPoint = $("body").offset().top - 40;
    $('html, body').animate({
      scrollTop: scrollPoint
    }, 1000)
  });

  $('#top-nav-about').click(function () {
    closeResponsiveNavBar();
    let scrollPoint = $("section.about-me").offset().top - 40;
    $('html, body').animate({
      scrollTop: scrollPoint
    }, 1000)
  });

  $('#top-nav-selected-work').click(function () {
    closeResponsiveNavBar();
    let scrollPoint = $("section.selected-work").offset().top - 60;
    $('html, body').animate({
      scrollTop: scrollPoint
    }, 1000)
  });

  $('#top-nav-testimonials').click(event => {
    closeResponsiveNavBar();
    let scrollPoint = $("section.testimonials").offset().top - 30;
    $('html, body').animate({
      scrollTop: scrollPoint
    }, 1000)
  });
});

function closeResponsiveNavBar() {
  const className = $(".top-nav").attr("class");
  if (className === "top-nav responsive") {
    $('#top-nav').removeClass().addClass('top-nav');
  }
}