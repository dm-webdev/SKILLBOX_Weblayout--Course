"use strict";

window.addEventListener("DOMContentLoaded", function () {
  const showList = document.querySelectorAll(".header-submenu__btn");
  const list = document.querySelectorAll(".header-submenu__wrap");

  const arrayElements = Array.from(showList);

  showList.forEach(function (element) {
    element.addEventListener("click", function (ev) {
      let key = arrayElements.indexOf(ev.target);
      let targetList = list[key];

      list.forEach((el) => {
        if (targetList != el) {
          el.classList.add("display");
        };
      });

      showList.forEach((el) => {
        if (ev.target != el) {
          el.classList.remove("header-submenu__btn_active");
        };
      });

      element.classList.toggle("header-submenu__btn_active");
      targetList.classList.toggle("display");
      targetList.addEventListener("click", (ev) => {
        if (ev.target.tagName == "A") {
          targetList.classList.add("display");
          element.classList.toggle("header-submenu__btn_active");
        };
      });
    });
  });
});
