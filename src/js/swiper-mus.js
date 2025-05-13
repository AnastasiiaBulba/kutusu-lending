import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let swiperReviews = new Swiper('.musteriSwiper', {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: '.musteri-btn-right',
    prevEl: '.musteri-btn-left',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  allowTouchMove: true,
  breakpoints: {
    1440: {
      // Тут змінюй, якщо потрібно інше
    },
  },
});
