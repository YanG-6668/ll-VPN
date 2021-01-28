import sayHello from './lib/sayHello';
import './lib/slick';

sayHello();
$('.testimonials__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 300
});

