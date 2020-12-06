"use strict";
window.addEventListener("DOMContentLoaded", function () {

  const showButton = document.querySelector(".search-form__open");
  const hideButton = document.querySelector(".search-form__clean");
  const menu = document.querySelector(".header-submenu");

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
      menu.inert = true;
      showButton.addEventListener("click", show);
      menu.addEventListener("click", hideOnClick);
      document.addEventListener("keydown", hideOnPress);
    } else {
      menu.inert = false;
      showButton.removeEventListener("click", show);
      menu.removeEventListener("click", hideOnClick);
      document.removeEventListener("keydown", hideOnPress);
    }
  });

  function show() {
    showMenu(menu, "header-submenu_show", showButton);
  };

  function hideOnClick(ev) {
    if (
      ev.target == hideButton ||
      ev.target.tagName == "A" ||
      ev.target.tagName == "SPAN"
    ) {
      hideMenu(menu, "header-submenu_show", showButton);
    };
  };

  function hideOnPress(ev) {
    if (ev.code == "Escape") {
      hideMenu(menu, "header-submenu_show", showButton);
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

  // search_logic

  const originalHtml = document.querySelector("main").innerHTML;

  function canceling() {
    document.querySelector("main").innerHTML = originalHtml;
  }

  const cleanBtn = document.querySelector(".search-form__clean");
  const searchForm = document.querySelector(".search-form");
  const searchInput = document.querySelector(".search-form__text");

  cleanBtn.addEventListener("click", (ev) => {
    ev.preventDefault();
    canceling();
    searchInput.value = "";
  });

  searchForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    selectSearchPhrase(searchInput);
    searchInput.value = "";
  });

  function selectSearchPhrase(inputElement) {
    const searchPhrase = inputElement.value.trim();
    if (searchPhrase.length < 4) {
      canceling();
      return alert("it's to shot");
    }
    canceling();

    let replacingHtml = document.querySelector("main").innerHTML;
    const searchArea = replacingHtml.match(/>(.*?)</g);
    const searchRegex = new RegExp(`${searchPhrase}`, "gi");

    let isAlert = true;
    for (let phrase of searchArea) {
      if (phrase.match(searchRegex) !== null) {
        isAlert = false;
      }
    }

    if (isAlert) {
      canceling();
      return alert("Не найдено ни одного совпадения");
    }

    let resultArr = [];
    for (let i = 0; i < searchArea.length; i++) {
      resultArr[i] = searchArea[i].replace(
        searchRegex,
        `<span style="background-color: yellow" class="result">${searchPhrase}</span>`
      );
    }

    for (let i = 0; i < searchArea.length; i++) {
      replacingHtml = replacingHtml.replace(searchArea[i], resultArr[i]);
    }
    
    document.querySelector("main").innerHTML = replacingHtml;
    document.querySelector(".result").scrollIntoView({block: "center", behavior: "smooth"});
  }
});
