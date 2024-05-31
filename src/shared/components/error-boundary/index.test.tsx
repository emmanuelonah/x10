import React from 'react';

import { renderWithOptions, screen } from 'test';

import { ErrorBoundary } from './index.component';

const Bomb = () => {
  throw new Error('💣');
};

const Safe = () => <div>Everything is safe.</div>;

let originalX10: any;

describe('<ErrorBoundary/>', () => {
  beforeEach(() => {
    originalX10 = window.x10;

    window.x10 = {
      println: {
        group: jest.fn(),
        error: jest.fn(),
        groupEnd: jest.fn(),
      } as any,
    };
  });

  afterEach(() => {
    window.x10 = originalX10;
  });

  it('should display an error message when a child component throws', () => {
    jest.spyOn(console, 'error');

    const { container } = renderWithOptions(
      <ErrorBoundary>
        <Bomb />
      </ErrorBoundary>
    );

    expect(container).toHaveTextContent('Oops, compilation error');
    expect(screen.getByText('Try again?')).toBeInTheDocument();
  });

  it('should not display an error message when a child component does not throw', () => {
    renderWithOptions(
      <ErrorBoundary>
        <Safe />
      </ErrorBoundary>
    );

    expect(screen.getByText('Everything is safe.')).toBeInTheDocument();
    expect(screen.queryByText('Oops, compilation error')).not.toBeInTheDocument();
  });
});
