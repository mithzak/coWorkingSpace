/* ==============
 ========= js documentation ==========================

 * theme name: FlexiSpace
 * version: 1.0
 * description: Workplace Html5 Template
 * author: PixelAxis
 * author url: https://themeforest.net/user/pixelaxis

    ==================================================

     01. banner two slider
     -------------------------------------------------
     02. blog post filter
     -------------------------------------------------
     03. follow slider
     -------------------------------------------------
     04. normal slider
     -------------------------------------------------
     05. odometer counter
     -------------------------------------------------
     06. testimonial slider
     -------------------------------------------------
     07. select location
     -------------------------------------------------
     08. select size
     -------------------------------------------------
     09. select location two
     -------------------------------------------------
     10. select size two
     -------------------------------------------------
     11. select location three
     -------------------------------------------------
     12. select size three
     -------------------------------------------------
     13. select plan
     -------------------------------------------------
     14. client slider
     -------------------------------------------------
     15. client slider two
     -------------------------------------------------
     16. gsap register
     -------------------------------------------------
     17. gsap config
     -------------------------------------------------
     18. smooth scroll
     -------------------------------------------------
     19. stick collaborate
     -------------------------------------------------
     20. target id
     -------------------------------------------------
     21. team horizontal move
     -------------------------------------------------
     22. space gallery horizontal move
     -------------------------------------------------
     23. fade up animation
     -------------------------------------------------
     24. story image
     -------------------------------------------------
     25. related space horizontal move
     -------------------------------------------------
     26. circle scale
     -------------------------------------------------
     27. create space horizontal move
     -------------------------------------------------
     28. title anim
     -------------------------------------------------
     29. paragraph animation

    ==================================================
============== */

(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    $(document).on("readystatechange", function () {
      if (document.readyState === "complete")
        $(document).trigger("fontfaceapplied");
    });

    let device_width = window.innerWidth;

    // 01. banner two slider
    $(".banner-two__slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 800,
      arrows: true,
      prevArrow: $(".prev-ban-two"),
      nextArrow: $(".next-ban-two"),
      dots: false,
      pauseOnHover: true,
    });

    var totalSlides = $(".banner-two__slider").slick("getSlick").slideCount;

    $(".total-slid").text(totalSlides);

    $(".banner-two__slider").on(
      "afterChange",
      function (event, slick, currentSlide) {
        $("#current-slid").text(currentSlide + 1);
      }
    );

    // 02. blog post filter
    function masonryMain() {
      if ($(".masonry-grid").length) {
        var $grid = $(".masonry-grid").isotope({
          itemSelector: ".grid-item-main",
          layoutMode: "fitRows",
        });

        var filterFns = {
          all: function () {
            return true;
          },
        };

        $(".blog-latest__tabs").on("click", "button", function () {
          var filterValue = $(this).attr("data-filter");
          filterValue = filterFns[filterValue] || filterValue;
          $grid.isotope({ filter: filterValue });
        });

        $(".blog-latest__tabs").each(function (i, buttonGroup) {
          var $buttonGroup = $(buttonGroup);
          $buttonGroup.on("click", "button", function () {
            $buttonGroup.find(".active").removeClass("active");
            $(this).addClass("active");
          });
        });
        $grid.isotope({
          transitionDuration: "1200ms",
        });
      }
    }
    masonryMain();

    // 03. follow slider
    $(".follow__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 4,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        centerMode: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },

          {
            breakpoint: 376,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      });

    // 04. normal slider
    $(".normal__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 3,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $(".prev-arrow"),
        nextArrow: $(".next-arrow"),
        dots: false,
        centerMode: true,
        centerPadding: "0px",
        variableWidth: true,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
            },
          },

          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
            },
          },
        ],
      });

    // 05. odometer counter
    $(".odometer").each(function () {
      $(this).isInViewport(function (status) {
        if (status === "entered") {
          for (
            var i = 0;
            i < document.querySelectorAll(".odometer").length;
            i++
          ) {
            var el = document.querySelectorAll(".odometer")[i];
            el.innerHTML = el.getAttribute("data-odometer-final");
          }
        }
      });
    });

    // 06. testimonial slider
    $(".testimonial__slider")
      .not(".slick-initialized")
      .slick({
        infinite: true,
        autoplay: true,
        focusOnSelect: true,
        slidesToShow: 1,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $(".prev-testimonial"),
        nextArrow: $(".next-testimonial"),
        dots: false,
        centerMode: true,
        centerPadding: "0px",
      });

    // 07. select location
    $("#selectLocation").niceSelect();

    // 08. select size
    $("#selectSize").niceSelect();

    // 09. select location two
    $("#selectLocationOne").niceSelect();

    // 10. select size two
    $("#selectSizeOne").niceSelect();

    // 11. select location three
    $("#selectLocationTwo").niceSelect();

    // 12. select size three
    $("#selectSizeTwo").niceSelect();

    // 13. select plan
    $("#selectPlan").niceSelect();

    // 14. client slider
    $(".client-slider").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 8000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },

        {
          breakpoint: 424,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    });

    // 15. client slider two
    $(".client-slider-two").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 0,
      speed: 8000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      cssEase: "linear",
      rtl: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },

        {
          breakpoint: 424,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    });

    // 16. gsap register
    gsap.registerPlugin(
      ScrollTrigger,
      ScrollSmoother,
      ScrollToPlugin,
      SplitText
    );

    // 17. gsap config
    gsap.config({
      nullTargetWarn: false,
      debug: false,
    });

    // 18. smooth scroll
    if (device_width > 576) {
      const smoother = ScrollSmoother.create({
        smooth: 2.2,
        effects: device_width < 992 ? false : true,
        smoothTouch: false,
        normalizeScroll: false,
        ignoreMobileResize: true,
      });
    }

    // 19. stick collaborate
    if (device_width > 992) {
      if ($(".collaborate").length > 0) {
        const stickyElement = document.querySelector(".collaborate__left");

        gsap.to(stickyElement, {
          scrollTrigger: {
            trigger: stickyElement,
            start: "top top",
            endTrigger: ".collaborate",
            end: "bottom top",
            pin: true,
            pinSpacing: true,
            markers: false,
          },
        });
      }
    }

    // 20. target id
    $('a[href^="#"]').on("click", function (event) {
      event.preventDefault();

      var target = $(this).attr("href");

      gsap.to(window, {
        scrollTo: {
          y: target,
          offsetY: 50,
        },
        duration: 0.5,
        ease: "power3.inOut",
      });
    });

    // 21. team horizontal move
    if ($(".team-hr").length > 0) {
      let sections = gsap.utils.toArray(".team-hr");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".team-pr",
          pin: true,
          invalidateOnRefresh: true,
          start: "center center",
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + $(".team-pr").innerWidth(),
        },
      });
    }

    // 22. space gallery horizontal move
    if ($(".space-gallery__items").length > 0) {
      let sectionsTwo = gsap.utils.toArray(".space-gallery-single");

      gsap.to(sectionsTwo, {
        xPercent: -100 * (sectionsTwo.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".space-gallery__items",
          pin: true,
          invalidateOnRefresh: true,
          start: "center center",
          scrub: 1,
          snap: 1 / (sectionsTwo.length - 1),
          end: () => "+=" + $(".space-gallery__items").innerWidth(),
        },
      });
    }

    // 23. fade up animation
    if (device_width > 576) {
      gsap.set(".bdFadeUp", { y: 30, opacity: 0 });
      const fadeUpArray = gsap.utils.toArray(".bdFadeUp");
      fadeUpArray.forEach((item, i) => {
        let fadeTl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top bottom-=150",
          },
        });
        fadeTl.to(item, {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1.3,
        });
      });
    }

    // 24. story image
    gsap.to(".image-one", {
      scrollTrigger: {
        trigger: ".image-one",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      x: +180,
      y: +250,
    });

    gsap.to(".image-two", {
      scrollTrigger: {
        trigger: ".image-two",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      x: +250,
      y: +60,
    });

    gsap.to(".image-three", {
      scrollTrigger: {
        trigger: ".image-three",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      x: -120,
      y: +160,
    });

    gsap.to(".image-four", {
      scrollTrigger: {
        trigger: ".image-four",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
      x: -90,
      y: +90,
    });

    // 25. related space horizontal move
    if ($(".related-pr").length > 0) {
      let sectionsRelated = gsap.utils.toArray(".related-hr");

      gsap.to(sectionsRelated, {
        xPercent: -100 * (sectionsRelated.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".related-pr",
          pin: true,
          invalidateOnRefresh: true,
          start: "center center",
          scrub: 1,
          snap: 1 / (sectionsRelated.length - 1),
          end: () => "+=" + $(".related-pr").innerWidth(),
        },
      });
    }

    // 26. circle scale
    if ($(".cir-wrap").length > 0) {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".cir-wrap",
          start: "center center",
          end: "+=100%",
          scrub: true,
          pin: true,
        },
      });
      tl.to(".arrows-container", {
        opacity: 1,
        scale: 1,
        duration: 2,
      });
      tl.to(".cir-anime", {
        scale: 7,
        duration: 12,
      });
    }

    // 27. create space horizontal move
    if ($(".cr-space").length > 0) {
      let sectionsRelated = gsap.utils.toArray(
        ".cr-space-slider .case-main__single"
      );

      gsap.to(sectionsRelated, {
        xPercent: -100 * (sectionsRelated.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".cr-space-slider",
          pin: true,
          invalidateOnRefresh: true,
          start: "center center",
          scrub: 1,
          snap: 1 / (sectionsRelated.length - 1),
          end: () => "+=" + $(".cr-space-slider").innerWidth(),
        },
      });
    }

    // 28. title anim
    if (device_width > 576) {
      let splitTitleLines = gsap.utils.toArray(".title-anim");

      splitTitleLines.forEach((splitTextLine) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: splitTextLine,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
            markers: false,
            toggleActions: "play none none none",
          },
        });

        const itemSplitted = new SplitText(splitTextLine, {
          type: "words, lines",
        });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" });
        tl.from(itemSplitted.lines, {
          duration: 1,
          delay: 0.3,
          opacity: 0,
          rotationX: -80,
          force3D: true,
          transformOrigin: "top center -50",
          stagger: 0.3,
        });
      });
    }

    // 29. paragraph animation
    if (device_width > 576) {
      const splitPArray = gsap.utils.toArray(".p-anim");
      splitPArray.forEach((P) => {
        const splitP = new SplitText(P, { type: ["lines"] });
        const splitPParent = new SplitText(P, {
          type: ["lines"],
          linesClass: "lineParent",
        });
        gsap.set(".lineParent", { overflow: "hidden" });
        gsap.from(splitP.lines, {
          yPercent: 100,
          stagger: 0.2,
          scrollTrigger: {
            trigger: splitP.lines,
            start: "top 80%",
            markers: false,
          },
        });
      });
    }
  });
})(jQuery);
