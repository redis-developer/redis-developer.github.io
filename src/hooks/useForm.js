import { useLayoutEffect } from 'react';

export default function useForm(thankYou) {
  useLayoutEffect(() => {
    const interval = setInterval(() => {
      if (typeof MktoForms2 === 'undefined') {
        return;
      }

      clearInterval(interval);
      document.querySelectorAll('.m-form').forEach(async (el) => {
        const id = el.id.split('_')[1];
        MktoForms2.setOptions({
          formXDPath: 'https://lp.redis.com/rs/915-NFD-128/images/marketo-xdframe-relative.html',
        });

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
          '//lp.redis.com',
          '915-NFD-128',
          Number(id),
          (form) => {
            if (Object.keys(prefills).length > 0) {
              form.vals(prefills);
            }

            if (!thankYou) {
                return;
            }

            form.onSuccess(() => {
                form.getFormElem().hide();

            });
          },
        );
      });
    }, 100);

    return () => {
      clearInterval(interval);
    };
  });
}
