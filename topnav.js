'use strict';

$(function() {
  $(".top-nav .icon").click(event => {
    const className = $(".top-nav").attr("class");
    if (className === "top-nav") {
      $('#top-nav').removeClass().addClass('top-nav responsive')
    } else {
      $('#top-nav').removeClass().addClass('top-nav')
    }
  });

  $(".top-nav-link").click(event => {
    alert("CLICKKK");
    $('#top-nav').removeClass().addClass('top-nav')
  });
});
