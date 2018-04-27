import { isScrollIntoView, registerScrollToView, unregisterScrollToView } from './addons/events';

const CSSupportLib = () => {};

const CSSL = new CSSupportLib();

CSSL.g = {};

CSSupportLib.prototype.registerScrollToView = registerScrollToView;
CSSupportLib.prototype.unregisterScrollToView = unregisterScrollToView;
CSSupportLib.prototype.isScrollIntoView = isScrollIntoView;

export { CSSupportLib, CSSL };
