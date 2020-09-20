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
