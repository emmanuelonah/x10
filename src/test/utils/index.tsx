import React from 'react';

import userEvent from '@testing-library/user-event';

import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { render, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { GlobalStore } from 'global-store';
import { theme, GlobalStyles } from 'design-system';

export * from '@testing-library/react';

/**
 * @Wrapper provides to the children then Style-Theme, Global-state,
 * and QueryClient for react-query-lib
 */
function Wrapper({ children }: { children: React.ReactElement }) {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <QueryClientProvider client={new QueryClient()}>
          <GlobalStore>{children}</GlobalStore>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

/**
 * @renderWithOptions use this function when you want your test
 * component to access our design system
 * @param {children:React.ReactNode}
 * @returns a transpiled reactNode object
 */
function renderWithOptions(ui: React.ReactElement, opts?: RenderOptions) {
  return render(ui, {
    wrapper: Wrapper as React.JSXElementConstructor<{ children: React.ReactElement }>,
    ...opts,
  });
}

export { userEvent, renderWithOptions };
