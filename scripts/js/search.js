"use strict";
window.addEventListener("DOMContentLoaded", function () {
  const showButton = document.querySelector(".search-open");
  const hideButton = document.querySelector(".search-form__clean");
  const menu = document.querySelector(".header-submenu");
  const place = document.querySelector(".search-form__text");

  if (window.innerWidth < 1224) {
    menu.inert = true;
    showButton.addEventListener("click", show);
    menu.addEventListener("click", hideOnClick);
    document.addEventListener("keydown", hideOnPress);
  } else {
    menu.inert = false;
    place.setAttribute("placeholder", "Поиск по сайту");
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth < 1224) {
      menu.inert = true;
      showButton.addEventListener("click", show);
      menu.addEventListener("click", hideOnClick);
      document.addEventListener("keydown", hideOnPress);
    } else {
      menu.inert = false;
      showButton.removeEventListener("click", show);
      menu.removeEventListener("click", hideOnClick);
      document.removeEventListener("keydown", hideOnPress);
      place.setAttribute("placeholder", "Поиск по сайту");
    }
  });

  function show() {
    showMenu(menu, "header-submenu_show", showButton);
  }

  function hideOnClick(ev) {
    if (
      ev.target == hideButton ||
      ev.target.tagName == "A" ||
      ev.target.tagName == "SPAN"
    ) {
      hideMenu(menu, "header-submenu_show", showButton);
    }
  }

  function hideOnPress(ev) {
    if (ev.code == "Escape") {
      hideMenu(menu, "header-submenu_show", showButton);
    }
  }

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
