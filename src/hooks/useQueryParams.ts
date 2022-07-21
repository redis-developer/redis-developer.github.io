/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/ban-ts-comment */
import { useMemo } from 'react';

export default function useQueryParams() {
  return useMemo(() => {
    return Object.fromEntries(new URLSearchParams(window.location.search));
  }, []);
}
