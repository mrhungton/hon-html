$(document).ready(function () {
  display_affix_nav()

  $(window).scroll(function() {
    display_affix_nav()
  });

  function display_affix_nav() {
    if ($(document).scrollTop() > 50) {
      $('.nav-header').addClass('affix');
    } else {
      $('.nav-header').removeClass('affix');
    }
  }

  $('.navTrigger').click(function () {
    $(this).toggleClass('active');
    // console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();
    if ($("#mainListDiv").hasClass("show_list")) {
      $('body').css("overflow", "hidden");
    } else {
      $('body').css("overflow", "visible");
    }
  });

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
        margin: 40,
      },
      1000: {
        items: 3,
        margin: 100,
      },
    },
  });
  $(".owl-carousel-three-items").owlCarousel({
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
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 40,
    responsive: {
      0: {
        items: 2,
        margin: 20,
      },
      600: {
        items: 4,
        margin: 10,
      },
      1000: {
        items: 5,
      },
    },
  });
  $(".owl-carousel-one-items").owlCarousel({
    loop: false,
    nav: true,
    singleItem: true,
    margin: 20,
    navText: ["<div class='nav-btn prev-slide'>Prev</div>", "<div class='nav-btn next-slide'>Next</div>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
  $(".owl-carousel-press").owlCarousel({
    loop: false,
    nav: true,
    singleItem: true,
    margin: 15,
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
  // Responsibility
  $("#responsibility-detail").hide();
  $("#show-detail").on("click", function () {
    $("#responsibility-detail").show();
    $("#responsibility").hide();
  });
  $("#back-responsibility").on("click", function () {
    $("#responsibility-detail").hide();
    $("#responsibility").show();
  });
  // End Responsibility
  // Medial --Close all modal when register event
  $("#btn_confirm_event").on("click", function(){
    $("#confirm_event").modal("hide");
  });
  $("#close_all_modal").on("click", function(){
    $(".show-modal-event").modal("hide"); // Change id here
  });
  // End
  // Video
  $("#videoHon").on('hidden.bs.modal', function (e) {
    $("#videoHon iframe").attr("src", $("#videoHon iframe").attr("src"));
  });
});
