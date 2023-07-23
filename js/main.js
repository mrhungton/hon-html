$(document).ready(function () {
  $(".owl-carousel-company-history").owlCarousel({
    loop: false,
    nav: true,
    singleItem: true,
    margin: 20,
    responsive: {
      0: {
        items: 1,
        center: true,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,
      },
    },
  });
  $(".owl-carousel-leadership").owlCarousel({
    loop: false,
    nav: true,
    singleItem: true,
    responsive: {
      0: {
        items: 1,
        center: true,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
        margin: 100,
      },
    },
  });
  $(".owl-carousel-development").owlCarousel({
    loop: false,
    nav: true,
    singleItem: true,
    margin: 40,
    responsive: {
      0: {
        items: 1,
        center: true,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".owl-carousel-customers").owlCarousel({
    loop: true,
    nav: true,
    singleItem: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
        center: true,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  });
});
