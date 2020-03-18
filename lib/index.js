"use strict";

var n = 20;

var add = function add(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  return a + b;
};

var _loop = function _loop(i) {
  setTimeout(function () {
    console.log(i);
  }, 1000 * i);
};

for (var i = 0; i < 20; i++) {
  _loop(i);
}