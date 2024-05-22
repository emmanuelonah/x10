import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { App } from 'app';
import { Seeder } from 'db/seeds';
import { startMockServer } from 'test';
import { GlobalStore } from 'global-store';
import { reportWebVitals, Natives } from 'configs';
import { ErrorBoundary, InternetNotifier } from 'shared/components';
import { unregisterServiceWorker } from 'service-worker-registration';
import { SkipToMainContent, GlobalStyles, theme } from 'design-system';

Natives.bind();

Seeder.run();

const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } });

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

startMockServer().finally(() => {
  root.render(
    <React.StrictMode>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <GlobalStyles theme={theme} />
          <SkipToMainContent href="#main">Skip to main content</SkipToMainContent>
          <QueryClientProvider client={queryClient}>
            <GlobalStore>
              <InternetNotifier />
              <App />
            </GlobalStore>
            <ReactQueryDevtools initialIsOpen={false} />
          </QueryClientProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </React.StrictMode>
  );
});

unregisterServiceWorker();

reportWebVitals(window.x10.println?.info);

window.x10.println?.log('x10 APP STARTED');
