import Swiper from 'swiper';
import 'swiper/css';

// const swiperSignature = new Swiper('.nedenSwiper', {
//   loop: true,
//   slidesPerView: 0.5,
//   spaceBetween: 4,
//   allowTouchMove: true,
//   breakpoints: {
//     1440: {
//       slidesPerView: 2.5,
//       spaceBetween: 4,
//     },
//   },
// });

const swiperSignature = new Swiper('.nedenSwiper', {
  loop: false,
  slidesPerView: 'auto',
  spaceBetween: 8,
  allowTouchMove: true,
  freeMode: true,
});
