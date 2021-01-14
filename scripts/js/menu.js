"use strict";

window.addEventListener("DOMContentLoaded", function () {
  const showButton = document.querySelector(".header__burger");
  const hideButton = document.querySelector(".header-nav__hide-btn");
  const menu = document.querySelector(".header-nav");

  if (window.innerWidth < 1224) {
    menu.inert = true;
      showButton.addEventListener("click", show);
      menu.addEventListener("click", hideOnClick);
      document.addEventListener("keydown", hideOnPress);
  } else {
    menu.inert = false;
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1224) {
      if (!menu.classList.contains("header-nav_show")) {
        menu.inert = true;
        showButton.addEventListener("click", show);
        menu.addEventListener("click", hideOnClick);
        document.addEventListener("keydown", hideOnPress);
      }
    } else {
      menu.inert = false;
      showButton.removeEventListener("click", show);
      menu.removeEventListener("click", hideOnClick);
      document.removeEventListener("keydown", hideOnPress);
    }
  });

  function show() {
    showMenu(menu, "header-nav_show", showButton);
  };

  function hideOnClick(ev) {
    if (
      ev.target == hideButton ||
      ev.target.tagName == "A" ||
      ev.target.tagName == "SPAN"
    ) {
      hideMenu(menu, "header-nav_show", showButton);
    };
  };

  function hideOnPress(ev) {
    if (ev.code == "Escape") {
      hideMenu(menu, "header-nav_show", showButton);
    }
  };

  function hideMenu(element, showClass, showButton) {
    element.classList.remove(showClass);
    element.inert = true;
    showButton.inert = false;
  }

  function showMenu(element, showClass, showButton) {
    element.classList.add(showClass);
    element.inert = false;
    showButton.inert = true;
  }
});
