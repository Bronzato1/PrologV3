// main script
(function () {
  "use strict";

  // ####################### Testimonial Slider #########################
  new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".testimonial-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  // ####################### Blogposts Slider #########################
  new Swiper(".blogpost-slider", {
    slidesPerView: 'auto',
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".blogpost-slider-pagination",
      type: "bullets",
      clickable: true,
    },
  });

})();
