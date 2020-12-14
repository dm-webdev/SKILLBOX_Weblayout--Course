"use strict";

window.addEventListener("DOMContentLoaded", function () {
  const mySwiper = new Swiper(".swiper-container", {
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

  window.addEventListener("resize", () => {
    mySwiper.update();
  });

  const controlAuthor = document.querySelector(".controls__author");
  const controlArtdirection = document.querySelector(".controls__artdirection");
  const controlArttechnique = document.querySelector(".controls__arttechnique");
  const gallery = Array.from(document.querySelectorAll(".swiper-slide"));

  controlAuthor.addEventListener("change", () => {
    sortGallery(
      controlAuthor.value,
      controlArtdirection.value,
      controlArttechnique.value,
      gallery
    );
    mySwiper.update();
    mySwiper.updateSlides();
  });

  controlArtdirection.addEventListener("change", () => {
    sortGallery(
      controlAuthor.value,
      controlArtdirection.value,
      controlArttechnique.value,
      gallery
    );
    mySwiper.update();
    mySwiper.updateSlides();
  });

  controlArttechnique.addEventListener("change", () => {
    sortGallery(
      controlAuthor.value,
      controlArtdirection.value,
      controlArttechnique.value,
      gallery
    );
    mySwiper.update();
    mySwiper.updateSlides();
  });

  function sortGallery(author_name, art_direction, art_technique, base) {
    let baseGallery = base;
    baseGallery.forEach((item) => item.classList.remove("display"));
    baseGallery.forEach((item) => item.classList.add("display"));
    if (author_name != "") {
      baseGallery = baseGallery.filter(
        (item) => item.attributes.author.value === author_name
      );
    }
    if (art_direction != "") {
      baseGallery = baseGallery.filter(
        (item) => item.attributes.artdirection.value === art_direction
      );
    }
    if (art_technique != "") {
      baseGallery = baseGallery.filter(
        (item) => item.attributes.arttechnique.value === art_technique
      );
    }
    baseGallery.forEach((item) => item.classList.remove("display"));
    if (baseGallery.length === 0) {
      alert("совпадений не обнаружено");
      cleanSelect();
      base.forEach((item) => item.classList.remove("display"));
    }
    mySwiper.update();
    mySwiper.updateSlides();
  }

  function cleanSelect() {
    controlAuthor.value = "";
    controlArtdirection.value = "";
    controlArttechnique.value = "";
  }
});
