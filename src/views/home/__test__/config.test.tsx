import React from 'react';

import { renderWithOptions, screen } from 'test';

import { config } from '../config';

describe('config object', () => {
  it('should have a textSearch property with a page view that renders correctly', () => {
    const Page = config.textSearch.page;

    renderWithOptions(<Page />);

    expect(screen.getByTestId('textEngineView')).toBeInTheDocument();
  });

  it('should have an imageSearch property with a page view that renders correctly', () => {
    const Page = config.imageSearch.page;

    renderWithOptions(<Page />);

    expect(screen.getByTestId('imageEngineView')).toBeInTheDocument();
  });

  it('should have a videoSearch property with a page view that renders correctly', () => {
    const Page = config.videoSearch.page;

    renderWithOptions(<Page />);

    expect(screen.getByTestId('videoEngineView')).toBeInTheDocument();
  });
});
