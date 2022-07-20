import { useLayoutEffect } from 'react';

export default function useMunchkin() {
  useLayoutEffect(() => {
    var didInit = false;
    function initMunchkin() {
      if (didInit === false) {
        didInit = true;
        Munchkin.init('915-NFD-128');
      }
    }
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '//munchkin.marketo.net/munchkin.js';
    s.onreadystatechange = function () {
      if (this.readyState == 'complete' || this.readyState == 'loaded') {
        initMunchkin();
      }
    };
    s.onload = initMunchkin;
    document.getElementsByTagName('head')[0].appendChild(s);
  }, []);
}
