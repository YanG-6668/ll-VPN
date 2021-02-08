import './lib/slick';

const slider = () => {
  const $prev = $('.slider__btns-prev');
  const $next = $('.slider__btns-next');
  
  $('.slider__slides').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    variableWidth: true,
    dots: true,
    nextArrow: $next,
    prevArrow: $prev,
    responsive: [
      {
        breakpoint: 445,
        settings: {
          dots: false
        }
      }
    ]
  });
}

export default slider;
