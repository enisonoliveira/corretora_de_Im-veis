/*=============== MENU TOPO ===============*/
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const menuClose = document.getElementById("menu-close");

menuToggle.addEventListener("click", () => {
  navMenu.classList.add("show");
});

menuClose.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

document.querySelectorAll(".header_menu a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

/*=============== SWIPERJS BANNER INDEX===============*/
const swiper = new Swiper(".bannerSwiper", {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
});

/*=============== BUSCA IMÓVEIS ===============*/
const tabs = document.querySelectorAll(".search-tabs .tab");
const negociacaoInput = document.getElementById("negociacao");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    negociacaoInput.value = tab.dataset.tab;
  });
});
