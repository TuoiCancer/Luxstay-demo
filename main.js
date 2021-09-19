const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuBar = $(".menu__bars");
const menuClose = $(".menu__close");
const menuItems = $(".menu__items");
menuBar.onclick = function (e) {
  menuItems.classList.add("active");
};

menuClose.onclick = function (e) {
  menuItems.classList.remove("active");
};
