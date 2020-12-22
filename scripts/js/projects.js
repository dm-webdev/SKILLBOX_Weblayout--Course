"use strict";

window.addEventListener("DOMContentLoaded", function () {
  let projectsSwiper;

  projectsSwiperInit();

  window.addEventListener("resize", projectsSwiperInit);

  function projectsSwiperInit() {
    projectsSwiper = new Swiper(".swiper-container_projects", {
      slidesPerView: 1,
      
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 34,
        },        
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1224: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    
      navigation: {
        nextEl: ".swiper-button-next_projects",
        prevEl: ".swiper-button-prev_projects",
      },
    });
  };
});