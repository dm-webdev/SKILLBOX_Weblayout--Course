"use strict";

window.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelectorAll(".controls__control");
  element.forEach(item => {
    new Choices(item,
      {
        searchEnabled: false,
        shouldSort: false,
      });
  });
});