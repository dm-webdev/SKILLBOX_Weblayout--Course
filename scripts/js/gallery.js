"use strict";

window.addEventListener("DOMContentLoaded", function () {

  let gallerySwiper;

  gallerySwiperInit();

  window.addEventListener("resize", gallerySwiperInit);

  function gallerySwiperInit() {
    gallerySwiper = new Swiper(".swiper-container_gallery", {
      slidesPerView: 1,
      
      breakpoints: {
        768: {
          slidesPerView: 2,
          slidesPerColumn: 2,
          spaceBetween: 34,
        },
        1696: {
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 50,
        },
      },
  
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        clickable: true,
      },
  
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  };
});
