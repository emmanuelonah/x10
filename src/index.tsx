import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from 'app';
import { startMockServer } from 'test';
import { reportWebVitals, Natives } from 'configs';
import { unregisterServiceWorker } from 'service-worker-registration';

Natives.bind();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

startMockServer().finally(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});

unregisterServiceWorker();

reportWebVitals(window.x10.println?.info);

window.x10.println?.log('x10 APP STARTED');
