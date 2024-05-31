import React from 'react';

import { renderWithOptions } from 'test';

import { Header } from './index.layout';

describe('<Header/>', () => {
  it('should render layout', () => {
    const { container } = renderWithOptions(<Header />);

    expect(container).not.toBeEmptyDOMElement();
  });
});
