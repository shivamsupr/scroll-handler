"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var sg = {};

var registerScrollToView = function registerScrollToView(element, callback) {
  var allowNext = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var delay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

  if (!sg.scrollListners) {
    sg.scrollListners = [];
  }

  sg.scrollListners.push({ element: element, callback: callback });

  if (!sg.scrollInitialized) {
    var scrolled = null;
    window.onscroll = function () {
      if (!scrolled) {
        scrolled = setTimeout(function () {
          var doneIndexes = [];
          sg.scrollListners.forEach(function (scrollListner, index) {
            var elem = scrollListner.element,
                cb = scrollListner.callback;


            if (isScrollIntoView(elem)) {
              if (!allowNext) {
                doneIndexes.push(index);
              }
              cb(window.pageYOffset);
            }

            cb(window.pageYOffset);
          });

          doneIndexes.forEach(function (index, doneIndex) {
            sg.scrollListners.splice(doneIndex, 1);
          });

          scrolled = null;
        }, delay);
      }
    };
    sg.scrollInitialized = true;
  }
};

var unregisterScrollToView = function unregisterScrollToView(element, callback) {
  sg.scrollListners = sg.scrollListners.filter(function (scrollListner) {
    return scrollListner.element !== element;
  });
  return callback();
};

var isScrollIntoView = function isScrollIntoView(element) {
  var _element$getBoundingC = element.getBoundingClientRect(),
      top = _element$getBoundingC.top,
      right = _element$getBoundingC.right,
      bottom = _element$getBoundingC.bottom,
      left = _element$getBoundingC.left;

  var html = document.documentElement;

  return top >= 0 && left >= 0 && bottom <= (window.innerHeight || html.clientHeight) && right <= (window.innerWidth || html.clientWidth);
};

exports.registerScrollToView = registerScrollToView;
exports.unregisterScrollToView = unregisterScrollToView;
exports.isScrollIntoView = isScrollIntoView;