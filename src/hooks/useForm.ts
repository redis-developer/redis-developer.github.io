/* eslint-disable @typescript-eslint/no-unsafe-call, @typescript-eslint/no-misused-promises */
import useIsBrowser from '@docusaurus/useIsBrowser';
import { useLayoutEffect } from 'react';

declare const MktoForms2: any;

export interface FormOptions {
  skip?: boolean;
}

export default function useForm({ skip = false }: FormOptions) {
  const isBrowser = useIsBrowser();

  useLayoutEffect(() => {
    if (skip || !isBrowser) {
      return;
    }

    const interval = setInterval(() => {
      if (typeof MktoForms2 === 'undefined') {
        return;
      }

      clearInterval(interval);
      document.querySelectorAll('.m-form').forEach(async (el) => {
        const id = el.id.split('_')[1];

        let prefills = {};
        try {
          const response = await fetch(
            'https://redis.com/wp-content/themes/wpx/partials/forms/mkto_lead.php',
          );

          if (response.ok) {
            const data = await response.json();
            if (!!data) {
              prefills = {
                Email: data.email,
              };
            }
          }
        } catch (e) {}

        MktoForms2.loadForm(
          'https://lp.redis.com',
          '915-NFD-128',
          Number(id),
          (form: any) => {
            if (Object.keys(prefills).length > 0) {
              form.vals(prefills);
            }
          },
        );
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [skip, isBrowser]);
}
