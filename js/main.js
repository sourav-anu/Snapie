

// SUB-MENU START

$(document).ready(function () {
  $('.closebtn').click(function () {
    $('body').removeClass('active');
    $(".wrapper").addClass("show");
  });


  $('.sidetogglebtn').on('click', function (e) {

    if ($(window).width() > 767) {
      $('body').addClass('');
    } else {
      $('body').addClass('active');
    }
    e.stopPropagation();
  });

  $('.bell a').on('click', function (e) {
    e.stopPropagation();
  });





  $(function () {
    $(".sidetogglebtn").on("click", function (e) {
      $(".wrapper").toggleClass("show");
    });


    if ($(window).width() > 991) {
      $(document).on("click", function (e) {
        if ($(e.target).is(".sidebar, .page__content") === false) {
          // $(".wrapper").addClass("show");
          // $('body').removeClass('active');
        }
      });
    } else {
      $(document).on("click", function (e) {
        if ($(e.target).is(".sidebar, .page__content") === false) {
          $(".wrapper").addClass("show");
          $('body').removeClass('active');
        }
      });
    }



    $(".bell a").on("click", function (e) {

      $(".notification_drop").toggleClass("open");
    });
    $(document).on("click", function (e) {

      if ($(e.target).is(".notification_drop, .notification_drop ul li, .rightnoteinfo, .rightnoteinfo h3, .rightnoteinfo p, .rightnoteinfo small") === false) {
        $(".notification_drop").removeClass("open");
        // $('body').removeClass('active');
      }
    });
  });





});

$(".profile__dropdown a").click(function () {
  $(".listingMenu").toggleClass("open");

});





$(".modal-toggle").on('click', function () {
  $(".add_vehicle").addClass('model-open');
});

$(".accept-toggle").on('click', function () {
  $(".confirm_booking").addClass('model-open');
});
$(".cancel-toggle").on('click', function () {
  $(".cancel_booking").addClass('model-open');
});
$(".closemodal, .bg-overlay").click(function () {
  $(".add_vehicle").removeClass('model-open');
  $(".confirm_booking").removeClass('model-open');
  $(".cancel_booking").removeClass('model-open');
});



$(".toggle-password").click(function () {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});




































