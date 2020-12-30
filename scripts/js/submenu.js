"use strict";

window.addEventListener("DOMContentLoaded", function () {
  const showList = document.querySelectorAll(".header-submenu__btn");
  const list = document.querySelectorAll(".header-submenu__wrap");

  const arrayElements = Array.from(showList);

  showList.forEach(function (element) {
    element.addEventListener("click", function (ev) {
      element.classList.toggle("header-submenu__btn_active");
      let key = arrayElements.indexOf(ev.target);
      let targetList = list[key];

      targetList.classList.toggle("display");
      targetList.addEventListener("click", (ev) => {
        if (ev.target.tagName == "A") {
          targetList.classList.add("display");
        };
      });
    });
  });
});
