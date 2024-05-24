import React from 'react';

import { throwError } from 'shared/utils';

import { ErrorBoundary } from './index.component';
import { renderWithOptions, screen, fireEvent, waitFor } from '../../../test';

function ThrowError() {
  throwError('ErrorBoundarySimulationError', 'Lets simulate our ErrorBoundary Abilities 🛠️');

  return <p>This can never be rendered, are you checking it in the DOM ☕️</p>;
}

const originalWindow = { ...window };
const windowSpy = jest.spyOn(global, 'window', 'get');

describe.skip('<ErrorBoundary/>', () => {
  beforeAll(() => {
    windowSpy.mockImplementation(
      () =>
        ({
          ...originalWindow,
          x10: {
            println: {
              group: jest.fn(),
              error: jest.fn(),
              groupEnd: jest.fn(),
            },
          },
        }) as any
    );
  });

  afterAll(() => {
    windowSpy.mockRestore();
  });

  it('should render child component when its error free', () => {
    renderWithOptions(
      <ErrorBoundary>
        <p>Foo Bar Baz</p>
      </ErrorBoundary>
    );

    expect(screen.getByText('Foo Bar Baz')).toBeInTheDocument();
  });

  it('should render ErrorBoundary component when child component is not error free', async () => {
    renderWithOptions(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByText('Oops, compilation error </>')).toBeInTheDocument();

    await waitFor(() => {
      fireEvent.click(screen.getByText('Try again?'));
    });
  });
});
