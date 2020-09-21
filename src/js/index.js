import mobileMenu from './mobileMenu';
import { Swiper, Navigation } from 'swiper';

mobileMenu();

Swiper.use(Navigation);

const swiperFirstScreen = new Swiper('.slider-promo', {
  loop: true,
  navigation: {
    nextEl: '.slider-promo__button-next',
    prevEl: '.slider-promo__button-prev',
  },
});

const swiperBig = new Swiper('.slider-big', {
  loop: true,
  slidesPerView: 'auto',
  loopedSlides: 3,
  spaceBetween: 90,
  centeredSlides: true,
  initialSlide: 1,
});
