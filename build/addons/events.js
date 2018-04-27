'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isScrollIntoView = exports.unregisterScrollToView = exports.registerScrollToView = undefined;

var _index = require('../index');

var registerScrollToView = function registerScrollToView(element, callback, allowNext, delay) {
  if (!_index.CSSL.g.scrollListners) {
    _index.CSSL.g.scrollListners = [];
  }

  _index.CSSL.g.scrollListners.push({ element: element, callback: callback });

  if (!_index.CSSL.g.scrollInitialized) {
    var scrolled = null;
    window.onscroll = function () {
      if (!scrolled) {
        scrolled = setTimeout(function () {
          var doneIndexes = [];
          _index.CSSL.g.scrollListners.forEach(function (scrollListner, index) {
            var elem = scrollListner.element,
                cb = scrollListner.callback;


            if (_index.CSSL.isScrollIntoView(elem)) {
              if (!allowNext) {
                doneIndexes.push(index);
              }
              cb(window.pageYOffset);
            }

            cb(window.pageYOffset);
          });

          doneIndexes.forEach(function (index, doneIndex) {
            _index.CSSL.g.scrollListners.splice(doneIndex, 1);
          });

          scrolled = null;
        }, delay);
      }
    };
    _index.CSSL.g.scrollInitialized = true;
  }
};

var unregisterScrollToView = function unregisterScrollToView(element, callback) {
  _index.CSSL.g.scrollListners = _index.CSSL.g.scrollListners.filter(function (scrollListner) {
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