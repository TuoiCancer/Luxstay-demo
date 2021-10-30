const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuBar = $(".menu__bars");
const menuClose = $(".menu__close");
const menuItems = $(".menu__items");
// const navbar_items = $$(".")
const visitorEl = $(".navbar__item-visitor");
const addBtn = $(".booking-btn--add");
const subBtn = $(".booking-btn--sub");
const bookEl = $(".booking");
// const bookingBlock = $(".booking");
var count = 0;

window.onscroll = () => {
  bookEl.classList.remove("active");
};

menuBar.onclick = function (e) {
  menuItems.classList.add("active");
};

menuClose.onclick = function (e) {
  menuItems.classList.remove("active");
};
visitorEl.onclick = function (e) {
  bookEl.classList.add("active");
};

var slideHeader = new Swiper(".mySlider", {
  spaceBetween: 20,
  loop: true, // tạo cảm giác như chuyẻn động theo vòng tròn
  autoplay: {
    delay: 4000,
    disableOnInteraction: false, // khi người dùng click vào nút thì sau đó nó vẫn sẽ tự động chuyển
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var categorySwiper = new Swiper(".swiper__category", {
  slidesPerView: 5,
  direction: getDirection(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

  return direction;
}

var saleSwiper = new Swiper(".saleSwiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.5,
    },
    991: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});

var suggestSwiper = new Swiper(".suggestSwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

var helpSwiper = new Swiper(".helpSwiper", {
  slidesPerView: 5,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2.5,
    },
    991: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});
