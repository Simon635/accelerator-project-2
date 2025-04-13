import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';

export const initSlider = () => {
  document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.hero__swiper', {
      loop: true,
      slidesPerView: 1,
      pagination: {
        el: '.hero__swiper-pagination',
        bulletClass: 'hero__pagination-control',
        bulletActiveClass: 'hero__pagination-control-active',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        1440: {
          allowTouchMove: false,
        }
      }
    });
  });
};
