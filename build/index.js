'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CSSL = exports.CSSupportLib = undefined;

var _events = require('./addons/events');

var CSSupportLib = function CSSupportLib() {};

var CSSL = new CSSupportLib();

CSSL.g = {};

CSSupportLib.prototype.registerScrollToView = _events.registerScrollToView;
CSSupportLib.prototype.unregisterScrollToView = _events.unregisterScrollToView;
CSSupportLib.prototype.isScrollIntoView = _events.isScrollIntoView;

exports.CSSupportLib = CSSupportLib;
exports.CSSL = CSSL;