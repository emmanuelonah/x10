import React from 'react';

import { renderWithOptions, screen } from 'test';

import { Empty } from './index.component';

describe('<Empty/>', () => {
  it('should render component', () => {
    renderWithOptions(<Empty />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
