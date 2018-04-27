import { CSSL } from '../index';

const registerScrollToView = (element, callback, allowNext, delay) => {
  if (!CSSL.g.scrollListners) {
    CSSL.g.scrollListners = [];
  }

  CSSL.g.scrollListners.push({ element, callback });

  if (!CSSL.g.scrollInitialized) {
    let scrolled = null;
    window.onscroll = () => {
      if (!scrolled) {
        scrolled = setTimeout(() => {
          const doneIndexes = [];
          CSSL.g.scrollListners.forEach((scrollListner, index) => {
            const { element: elem, callback: cb } = scrollListner;

            if (CSSL.isScrollIntoView(elem)) {
              if (!allowNext) {
                doneIndexes.push(index);
              }
              cb(window.pageYOffset);
            }

            cb(window.pageYOffset);
          });

          doneIndexes.forEach((index, doneIndex) => {
            CSSL.g.scrollListners.splice(doneIndex, 1);
          });

          scrolled = null;
        }, delay);
      }
    };
    CSSL.g.scrollInitialized = true;
  }
};

const unregisterScrollToView = (element, callback) => {
  CSSL.g.scrollListners = CSSL.g.scrollListners.filter(scrollListner => scrollListner.element !== element);
  return callback();
};

const isScrollIntoView = element => {
  const { top, right, bottom, left } = element.getBoundingClientRect();
  const html = document.documentElement;

  return top >= 0 && left >= 0 && bottom <= (window.innerHeight || html.clientHeight) && right <= (window.innerWidth || html.clientWidth);
};

export { registerScrollToView, unregisterScrollToView, isScrollIntoView };
