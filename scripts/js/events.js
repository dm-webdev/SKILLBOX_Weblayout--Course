window.addEventListener("DOMContentLoaded", function () {
  let eventsSwiper;
  const cards = document.querySelectorAll(".events-card");
  const swiperContainer = document.querySelector(".swiper-container_events");
  const swiperWrapper = document.querySelector(".swiper-wrapper_events");
  const swiperSlide = document.querySelectorAll(".swiper-slide_events");
  const btn = document.querySelector(".events__btn");

  const eventSliderInit = () => {
    swiperContainer.classList.add("swiper-container");
    swiperWrapper.classList.add("swiper-wrapper");
    swiperSlide.forEach((item) => item.classList.add("swiper-slide"));

    eventsSwiper = new Swiper(".swiper-container_events", {
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination_events",
        clickable: true,
      },
    });
  };

  const eventSliderDestroy = () => {
    if (eventsSwiper) {
      eventsSwiper.destroy();
    }
    swiperContainer.classList.remove("swiper-container");
    swiperWrapper.classList.remove("swiper-wrapper");
    swiperSlide.forEach((item) => item.classList.remove("swiper-slide"));
  };

  const resizeHandlerSlider = () => {
    if (window.innerWidth <= 767) {
      cards.forEach((card) => card.classList.remove("none"));
      eventSliderInit();
    } else if ((window.innerWidth > 767) && (window.innerWidth <= 1023)) {
      cards.forEach((card) => card.classList.remove("none"));
      for (let card of cards.keys()) {
        if (card > 1) {
          cards[card].classList.add("none");
        }
      };
      eventSliderDestroy();
      btn.classList.remove("none");
    } else if (window.innerWidth > 1023) {
      cards.forEach((card) => card.classList.remove("none"));
      for (let card of cards.keys()) {
        if (card > 2) {
          cards[card].classList.add("none");
        }
      };
      eventSliderDestroy();
      btn.classList.remove("none");
    }
  };

  resizeHandlerSlider();
  window.addEventListener("resize", resizeHandlerSlider);

  btn.addEventListener("click", () => {
    swiperSlide.forEach((card) => {card.classList.remove("none")});
    btn.classList.add("none");
  })
});
