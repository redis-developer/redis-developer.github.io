/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/ban-ts-comment */
import useIsBrowser from '@docusaurus/useIsBrowser';
import { useMemo } from 'react';

export default function useQueryParams() {
  const isBrowser = useIsBrowser();
  return useMemo(() => {
    if (!isBrowser) {
      return;
    }

    return Object.fromEntries(new URLSearchParams(window.location.search));
  }, [isBrowser]);
}
