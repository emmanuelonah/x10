import React from 'react';

import { Preview } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

import { GlobalStore } from '../src/global-store';
import { theme, GlobalStyles } from '../src/design-system';

const preview: Preview = {
  decorators: [
    (Story) => (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles theme={theme} />
          <QueryClientProvider client={new QueryClient()}>
            <GlobalStore>
              <div style={{ width: '95vw', height: '100vh', backgroundColor: '#fff' }}>
                <Story />
              </div>
            </GlobalStore>
          </QueryClientProvider>
        </ThemeProvider>
      </BrowserRouter>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
