window.addEventListener("DOMContentLoaded", function () {
  const publicationBtn = document.querySelector(".publication__category__heading");
  const categoryList = document.querySelectorAll(".category");

  let publicationSwiper;
  const swiperContainer = document.querySelector(".publication__swiper");
  const swiperWrapper = document.querySelector(".publication__wrapper");
  const swiperSlide = document.querySelectorAll(".publication__slide");

  resizeHandler();

  window.addEventListener("resize", resizeHandler);

  function resizeHandler() {
    if (window.innerWidth > 767) {
      publicationSwiperInit();
      removeCategoryDropdown();
    } else if (window.innerWidth <= 767) {
      initCategoryDropdown();
      publicationSliderDestroy();
    }
  };

  function handleCategoryClick() {
    publicationBtn.classList.toggle("publication__category_active");
    if (publicationBtn.classList.contains("publication__category_active")) {
      categoryList.forEach((item) => {
        item.classList.remove("none");
      });
    } else {
      categoryList.forEach((item) => {
        if (!item.firstElementChild.checked) {
          item.classList.add("none");
        }
      });
    }
  };

  function removeCategoryDropdown() {
    publicationBtn.removeAttribute("tabindex");
    publicationBtn.classList.remove("publication__category_btn");
    publicationBtn.removeEventListener("click", handleCategoryClick);
    categoryList.forEach((item) => {
      item.classList.remove("none");
    });
  }

  function initCategoryDropdown() {
    publicationBtn.setAttribute("tabindex", "0");
    publicationBtn.classList.add("publication__category_btn");
    publicationBtn.addEventListener("click", handleCategoryClick);
    categoryList.forEach((item) => {
      if (!item.firstElementChild.checked) {
        item.classList.add("none");
      }
    });
  }

  function publicationSwiperInit() {
    // swiperContainer.classList.add("swiper-container");
    swiperWrapper.classList.add("swiper-wrapper");
    swiperSlide.forEach((item) => item.classList.add("swiper-slide"));
    document.querySelector(".swiper-controls_publication").classList.remove("none");

    publicationSwiper = new Swiper(".publication__swiper", {
      slidesPerView: 2,
      spaceBetween: 34,

      breakpoints: {
        1023: {
          slidesPerView: 2,
          spaceBetween: 49,
        },
        1696: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },



      pagination: {
        el: ".swiper-pagination_publication",
        type: "fraction",
        clickable: true,
      },

      navigation: {
        nextEl: ".swiper-button-next_publication",
        prevEl: ".swiper-button-prev_publication",
      },
    });
  };

  function publicationSliderDestroy() {
    if (publicationSwiper) {
      publicationSwiper.destroy();
    }
    // swiperContainer.classList.remove("swiper-container");
    swiperWrapper.classList.remove("swiper-wrapper");
    swiperSlide.forEach((item) => item.classList.remove("swiper-slide"));
    document.querySelector(".swiper-controls_publication").classList.add("none");
  };
});


