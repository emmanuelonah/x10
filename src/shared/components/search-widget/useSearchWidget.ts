import { useCallback, useEffect } from 'react';

type OnSubmit = <P>(formData: Record<string, FormDataEntryValue>) => Promise<P>;
export function useSearchWidget(formRef: React.RefObject<HTMLFormElement>, onSubmit?: OnSubmit) {
  useEffect(() => {
    if (formRef.current?.scrollIntoView) formRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [formRef]);

  return useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const form = new FormData(event.currentTarget);
      const formData = Object.fromEntries(form.entries());

      await onSubmit?.(formData);
      formRef.current?.reset();
    },
    [formRef, onSubmit]
  );
}
