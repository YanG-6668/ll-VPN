"use strict";

var _sayHello = _interopRequireDefault(require("./lib/sayHello"));

require("./lib/slick");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _sayHello["default"])();
$('.testimonials__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  speed: 300
});