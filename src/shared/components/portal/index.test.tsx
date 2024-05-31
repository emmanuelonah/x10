import React from 'react';

import { renderWithOptions, screen } from 'test';

import { Portal } from './index.component';

describe('<Portal/>', () => {
  it('should render component', () => {
    renderWithOptions(<Portal>Hello world</Portal>);

    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });
});
