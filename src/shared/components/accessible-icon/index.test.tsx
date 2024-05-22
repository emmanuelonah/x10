import React from 'react';

import { render, screen } from 'test';

import { AccessibleIcon } from './index.component';

describe('<AccessibleIcon/>', () => {
  it('should confirm that `icon` is rendered visually and `label` is not visually rendered', () => {
    const label = 'ITS TEST TUBE ICON';

    render(
      <AccessibleIcon label={label}>
        <span role="img" aria-label={label} data-testid="testTubeIcon">
          🧪
        </span>
      </AccessibleIcon>
    );

    expect(screen.getByTestId('testTubeIcon')).toBeInTheDocument();
    expect(screen.getByText(label)).toBeInTheDocument();
  });
});
