import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';

function toggleNavButtons(swiper) {
  const sliderWrapper = swiper.el.closest('.tours, .training, .reviews, .galary');
  const prevButton = sliderWrapper?.querySelector('.slider-navigation--prev, .reviews__button--prev, .galary__slider-button--prev');
  const nextButton = sliderWrapper?.querySelector('.slider-navigation--next, .reviews__button--next, .galary__slider-button--next');

  if (!prevButton || !nextButton) {
    return;
  }

  prevButton.disabled = swiper.isBeginning;
  nextButton.disabled = swiper.isEnd;
}

export const initSlider = () => {
  document.addEventListener('DOMContentLoaded', () => {
    // Hero slider
    new Swiper('.hero__swiper', {
      loop: true,
      slidesPerView: 1,
      initialSlide: 0,
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

    // Tours slider
    new Swiper('.tours__swiper', {
      loop: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      navigation: {
        nextEl: '.tours__slider-button--next',
        prevEl: '.tours__slider-button--prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 30,
          allowTouchMove: false,
        }
      },
      on: {
        init: function () {
          toggleNavButtons(this);
        },
        slideChange: function () {
          toggleNavButtons(this);
        },
      }
    });

    // Training slider
    new Swiper('.training__swiper', {
      loop: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      initialSlide: 2,
      navigation: {
        nextEl: '.training__slider-button--next',
        prevEl: '.training__slider-button--prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
          initialSlide: 0,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 20,
          allowTouchMove: false,
          initialSlide: 0,
        }
      },
      on: {
        init: function () {
          toggleNavButtons(this);
        },
        slideChange: function () {
          toggleNavButtons(this);
        },
      }
    });

    // Reviews slider
    new Swiper('.reviews__slider', {
      loop: false,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 40,
      centeredSlides: false,
      navigation: {
        nextEl: '.reviews__slider-button--next',
        prevEl: '.reviews__slider-button--prev',
      },
      breakpoints: {
        768: {
          spaceBetween: 30,
        },
        1440: {
          spaceBetween: 120,
          allowTouchMove: false,
        }
      },
      on: {
        init: function () {
          toggleNavButtons(this);
        },
        slideChange: function () {
          toggleNavButtons(this);
        },
      }
    });

    // Galary slider
    new Swiper('.galary__slider', {
      loop: true,
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 5,
      navigation: {
        nextEl: '.galary__slider-button--next',
        prevEl: '.galary__slider-button--prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1440: {
          slidesPerView: 3,
          spaceBetween: 30,
          allowTouchMove: false,
        }
      },
      on: {
        init: function () {
          toggleNavButtons(this);
        },
        slideChange: function () {
          toggleNavButtons(this);
        },
      }
    });

  });
};

