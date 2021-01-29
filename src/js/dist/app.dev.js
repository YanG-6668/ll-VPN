"use strict";

var _sayHello = _interopRequireDefault(require("./lib/sayHello"));

require("./lib/slick");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var $prev = document.querySelector('.testimonials__btns-prev');
var $next = document.querySelector('.testimonials__btns-next');
(0, _sayHello["default"])();
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