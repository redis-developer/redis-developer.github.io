import { RefObject } from 'react';
import useFormListener from './useFormListener';

export interface FormEmailValidatorOptions {
  form: RefObject<HTMLFormElement>;
  invalid: () => any;
  valid: () => any;
}

export default function useFormEmailValidator({
  form,
  invalid,
  valid,
}: FormEmailValidatorOptions) {
  useFormListener({
    form,
    listener: (ev: SubmitEvent) => {
      const emailField = document.querySelector(
        'input[type="email"]',
      ) as HTMLInputElement;

      if (!emailField) {
        return;
      }

      const value = emailField.value;

      if (/@(gmail|yahoo|aol|outlook)\.com/g.test(value)) {
        ev.preventDefault();
        ev.stopImmediatePropagation();
        ev.stopPropagation();
        invalid();

        return;
      }

      valid();
    },
  });
}
