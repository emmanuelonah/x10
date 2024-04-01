import { __DEV__, __TEST__ } from 'shared/utils';

export async function startMockServer() {
  if (__DEV__ || __TEST__) return;

  const { worker } = await import('./browser');
  /**
   * `worker.start()` returns a Promise that resolves
   * once the Service Worker is up and ready to intercept requests.
   */
  return worker.start();
}
