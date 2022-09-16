import useIsBrowser from '@docusaurus/useIsBrowser';
import { RefObject, useLayoutEffect } from 'react';

export interface FormListenerOptions {
  form: RefObject<HTMLFormElement>;
  listener: (this: HTMLFormElement, ev: SubmitEvent) => any;
}

export default function useFormListener({
  form,
  listener,
}: FormListenerOptions) {
  const isBrowser = useIsBrowser();

  useLayoutEffect(() => {
    if (!isBrowser) {
      return;
    }

    const formEl = form.current;

    if (!formEl) {
      return;
    }

    formEl.addEventListener('submit', listener);

    return () => {
      formEl.removeEventListener('submit', listener);
    };
  }, [isBrowser, form.current]);
}
