import { useCallback } from 'react';

export function useSearchWidgetPresenter() {
  return useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const formData = Object.fromEntries(form.entries());

    window.x10.println?.info('Form data:', formData);

    event.currentTarget.reset();
  }, []);
}
