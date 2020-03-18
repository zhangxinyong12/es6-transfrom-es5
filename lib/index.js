"use strict";

var n = 20;

var add = function add(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
  return a + b;
};

for (var i = 0; i < 20; i++) {
  (function (n) {
    setTimeout(function () {
      console.log(n);
    }, 1000 * n);
  })(i);
}