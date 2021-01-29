import sayHello from './lib/sayHello';
import './lib/slick';

const $prev = document.querySelector('.testimonials__btns-prev');
const $next = document.querySelector('.testimonials__btns-next');

sayHello();

$('.testimonials__slider').slick({
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  variableWidth: true,
  dots: true,
  nextArrow: $next,
  prevArrow: $prev
});

