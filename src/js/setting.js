// import $ from 'jquery';

// $(document).ready(() => {
//   $(() => {
//     // Запускаем инициализацию tooltip
//     $('[data-toggle="tooltip"]').tooltip();
//   });
//
//   $(() => {
//     $('[data-toggle="popover"]').popover();
//   });
// });


// core version + navigation, pagination modules:
import Swiper, { Pagination }  from 'swiper';
// import Swiper and modules styles
// import 'swiper/css';

// init Swiper:
const swiper = new Swiper(".mySwiper", {
  modules: [Pagination],
  cssMode: true,
  mousewheel: true,
  keyboard: true,
  slidesPerView: 1,
  spaceBetween: 12,
  // loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
