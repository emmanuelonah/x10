import { setupWorker } from 'msw/browser';

import { handlers } from './resources';

export const worker = setupWorker(...handlers);
