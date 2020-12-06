"use strict";

window.addEventListener("DOMContentLoaded", function () {
  const showList = document.querySelectorAll(".header-submenu__btn");
  const list = document.querySelectorAll(".header-submenu__sublist");

  const arrayElements = Array.from(showList);

  showList.forEach(function (element) {
    element.addEventListener("click", function (ev) {

      let key = arrayElements.indexOf(ev.target);
      let targetList = list[key];

      targetList.classList.toggle("display");
      targetList.addEventListener("click", (ev) => {
        console.log(ev.target.tagName)
        if (ev.target.tagName == "A") {
          targetList.classList.add("display");
        };
      });
    });
  });
});