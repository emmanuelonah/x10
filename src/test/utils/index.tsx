import React from 'react';

import { ThemeProvider } from 'styled-components';
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
    <ThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      <QueryClientProvider client={new QueryClient()}>
        <GlobalStore>{children}</GlobalStore>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

/**
 * @renderWithOptions use this function when you want your test
 * component to access our design system
 * @param {children:React.ReactNode}
 * @returns a transpiled reactNode object
 */
export function renderWithOptions(ui: React.ReactElement, opts?: RenderOptions) {
  return render(ui, {
    wrapper: Wrapper as React.JSXElementConstructor<{ children: React.ReactElement }>,
    ...opts,
  });
}
