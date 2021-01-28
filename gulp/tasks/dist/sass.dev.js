"use strict";

var _gulp = _interopRequireDefault(require("gulp"));

var _gulpSass = _interopRequireDefault(require("gulp-sass"));

var _gulpSourcemaps = _interopRequireDefault(require("gulp-sourcemaps"));

var _gulpPostcss = _interopRequireDefault(require("gulp-postcss"));

var _autoprefixer = _interopRequireDefault(require("autoprefixer"));

var _config = _interopRequireDefault(require("../config"));

var _postcssCsso = _interopRequireDefault(require("postcss-csso"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import mqpacker from 'css-mqpacker';
var isMax = function isMax(mq) {
  return /max-width/.test(mq);
};

var isMin = function isMin(mq) {
  return /min-width/.test(mq);
};

var sortMediaQueries = function sortMediaQueries(a, b) {
  A = a.replace(/\D/g, '');
  B = b.replace(/\D/g, '');

  if (isMax(a) && isMax(b)) {
    return B - A;
  } else if (isMin(a) && isMin(b)) {
    return A - B;
  } else if (isMax(a) && isMin(b)) {
    return 1;
  } else if (isMin(a) && isMax(b)) {
    return -1;
  }

  return 1;
};

var processors = [(0, _autoprefixer["default"])({
  browsers: ['last 4 versions'],
  cascade: false
}), // require('lost'),
// mqpacker({
//   sort: sortMediaQueries
// }),
_postcssCsso["default"]];

_gulp["default"].task('sass', function () {
  return _gulp["default"].src(_config["default"].src.sass + '/*.{sass,scss}').pipe(_gulpSourcemaps["default"].init()).pipe((0, _gulpSass["default"])({
    outputStyle: _config["default"].production ? 'compact' : 'expanded',
    // nested, expanded, compact, compressed
    precision: 5
  })).on('error', _config["default"].errorHandler).pipe((0, _gulpPostcss["default"])(processors)).pipe(_gulpSourcemaps["default"].write('./')).pipe(_gulp["default"].dest(_config["default"].dest.css));
});

var build = function build(gulp) {
  return gulp.parallel('sass');
};

var watch = function watch(gulp) {
  return function () {
    return gulp.watch(_config["default"].src.sass + '/**/*.{sass,scss}', gulp.parallel('sass'));
  };
};

module.exports.build = build;
module.exports.watch = watch;