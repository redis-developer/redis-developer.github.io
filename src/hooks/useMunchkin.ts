/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/ban-ts-comment */
import { useLayoutEffect } from 'react';

declare const Munchkin: any;

export interface MunchkinOptions {
  skip?: boolean;
}

export default function useMunchkin({ skip = false }: MunchkinOptions) {
  useLayoutEffect(() => {
    if (skip) {
      return;
    }

    let didInit = false;
    function initMunchkin() {
      if (didInit === false) {
        didInit = true;
        Munchkin.init('915-NFD-128');
      }
    }

    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = '//munchkin.marketo.net/munchkin.js';
    // @ts-ignore
    s.onreadystatechange = function () {
      // @ts-ignore
      if (this.readyState == 'complete' || this.readyState == 'loaded') {
        initMunchkin();
      }
    };
    s.onload = initMunchkin;
    document.getElementsByTagName('head')[0].appendChild(s);
  }, [skip]);
}
