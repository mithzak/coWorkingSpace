/* ==============
 ========= js documentation ==========================

 * theme name: FlexiSpace
 * version: 1.0
 * description: Workplace Html5 Template
 * author: PixelAxis
 * author url: https://themeforest.net/user/pixelaxis

    ==================================================

     01. preloader
     -------------------------------------------------
     02. ata background
     -------------------------------------------------
     03. custom cursor
     -------------------------------------------------
     04. mobile navigation
     -------------------------------------------------
     05. on window scroll
     -------------------------------------------------
     06. toggle class to items
     -------------------------------------------------
     07. featured slider
     -------------------------------------------------
     08. toggle video
     -------------------------------------------------
     09. faq slide
     -------------------------------------------------
     10. scroll to top with progress

    ==================================================
============== */

(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    // 01. preloader
    setTimeout(function () {
      $("#ctn-preloader").addClass("loaded");
      if ($("#ctn-preloader").hasClass("loaded")) {
        $("#preloader")
          .delay(1000)
          .queue(function () {
            $(this).remove();
          });
      }
    }, 2000);

    // 02. data background
    $("[data-background]").each(function () {
      $(this).css(
        "background-image",
        "url(" + $(this).attr("data-background") + ")"
      );
    });

    // 03. custom cursor
    function itCursor() {
      var myCursor = jQuery(".mouseCursor");
      if (myCursor.length) {
        if ($("body")) {
          const e = document.querySelector(".cursor-inner"),
            t = document.querySelector(".cursor-outer");
          let n,
            i = 0,
            o = !1;
          (window.onmousemove = function (s) {
            o ||
              (t.style.transform =
                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
              (e.style.transform =
                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
              (n = s.clientY),
              (i = s.clientX);
          }),
            $("body").on(
              "mouseenter",
              "button, a, .cursor-pointer",
              function () {
                e.classList.add("cursor-hover"),
                  t.classList.add("cursor-hover");
              }
            ),
            $("body").on(
              "mouseleave",
              "button, a, .cursor-pointer",
              function () {
                ($(this).is("a", "button") &&
                  $(this).closest(".cursor-pointer").length) ||
                  (e.classList.remove("cursor-hover"),
                  t.classList.remove("cursor-hover"));
              }
            ),
            (e.style.visibility = "visible"),
            (t.style.visibility = "visible");
        }
      }
    }
    itCursor();

    // 04. mobile navigation
    if ($(".mobile-menu").length) {
      var mobileMenuContent = $(".header__nav-menu").html();
      $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

      $(".mobile-menu .dropdown-label").on("click", function () {
        $(this)
          .parent()
          .siblings()
          .find(".sub-menu, .sub-menu__nested")
          .slideUp(300);
        $(this)
          .parent()
          .siblings()
          .find(".dropdown-label")
          .removeClass("menu-item-active");
        $(this).siblings(".sub-menu, .sub-menu__nested").slideToggle(300);
        $(this).toggleClass("menu-item-active");
      });
    }

    $(".nav__bar").on("click", function () {
      $(".mobile-menu").addClass("show-menu");
      $(".nav-fade").each(function (i) {
        $(this).css("animation-delay", 0.2 * 1 * i + "s");
      });
    });

    $(".nav-cmn-open").on("click", function () {
      $(".header-two .mobile-menu").addClass("show-menu");
      $(".header-two .nav-fade").each(function (i) {
        $(this).css("animation-delay", 0.2 * 1 * i + "s");
      });
    });

    $(".close-mobile-menu, .menu-backdrop").on("click", function () {
      $(".mobile-menu").removeClass("show-menu");
    });

    // 05. on window scroll
    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll < 100) {
        $(".header__menu").removeClass("header__menu-active");
      } else {
        $(".header__menu").addClass("header__menu-active");
      }
    });

    // 06. toggle class to items
    $(".counter__single").on("mouseover", function () {
      $(".counter__single").removeClass("counter__single-active");
      $(this).addClass("counter__single-active");
    });

    $(".space-s-single").on("mouseover", function () {
      $(".space-s-single").removeClass("space-s-single-active");
      $(this).addClass("space-s-single-active");
    });

    $(".snip-r-alter .snip-single").on("mouseover", function () {
      $(".snip-r-alter .snip-single").removeClass("snip-single-active");
      $(this).addClass("snip-single-active");
    });

    $(".brtd").on("mouseover", function () {
      $(".brtd").removeClass("brtd-active");
      $(this).addClass("brtd-active");
    });

    $(".space-gallery-single").on("mouseover", function () {
      $(".space-gallery-single").removeClass("space-gallery-single-active");
      $(this).addClass("space-gallery-single-active");
    });

    $(".b-single-box").on("mouseover", function () {
      $(".b-single-box").removeClass("b-single-box-active");
      $(this).addClass("b-single-box-active");
    });

    $(".search").on("click", function () {
      $("body").addClass("search-active body-active");
    });

    $(".close-search").on("click", function () {
      $("body").removeClass("search-active body-active");
    });

    // 07. featured slider
    var currentSlide = 0;
    var totalSlides = $(".image-container .single-slide").length;

    function showSlide(slideIndex) {
      $(".image-container .single-slide")
        .eq(currentSlide)
        .removeClass("single-slide-active");
      $(".text-single").eq(currentSlide).removeClass("text-single-active");
      $(".image-container .single-slide")
        .eq(slideIndex)
        .addClass("single-slide-active");
      $(".text-single").eq(slideIndex).addClass("text-single-active");
      currentSlide = slideIndex;
    }

    $(".next-feature").on("click", function () {
      var nextSlide = (currentSlide + 1) % totalSlides;
      showSlide(nextSlide);
    });

    $(".prev-feature").on("click", function () {
      var prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(prevSlide);
    });

    // 08. toggle video
    $(".video-toggle").on("click", function () {
      $(this).toggleClass("active");
      if ($(this).hasClass("active")) {
        $(this).html(
          "Close Video <span class='material-symbols-outlined'>close</span>"
        );
        $(".video-m").addClass("video-m-active");
      } else {
        $(this).html(
          "View Video <span class='material-symbols-outlined'>add</span>"
        );
        $(".video-m").removeClass("video-m-active");
      }
    });

    // 09. faq slide
    var singleItems = $(".single-wrapper .single");
    var currentIndex = 0;

    singleItems.eq(currentIndex).show();
    setTimeout(changeItem, 5000);
    function changeItem() {
      singleItems.eq(currentIndex).fadeTo(500, 0, function () {
        $(this).hide();
        currentIndex = (currentIndex + 1) % singleItems.length;
        singleItems.eq(currentIndex).fadeTo(500, 1);
        setTimeout(changeItem, 5000);
      });
    }

    // 10. scroll to top with progress
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 1000;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
  });
})(jQuery);
