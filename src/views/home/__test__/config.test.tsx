import React from 'react';

import { render, screen } from 'test';

import { config } from '../config';

describe('config object', () => {
  it('should have a textSearch property with a page view that renders correctly', () => {
    const Page = config.textSearch.page;

    render(<Page />);

    expect(screen.getByText('Text Search')).toBeInTheDocument();
  });

  it('should have an imageSearch property with a page view that renders correctly', () => {
    const Page = config.imageSearch.page;

    render(<Page />);

    expect(screen.getByText('Image Search')).toBeInTheDocument();
  });

  it('should have a videoSearch property with a page view that renders correctly', () => {
    const Page = config.videoSearch.page;

    render(<Page />);

    expect(screen.getByText('Video Search')).toBeInTheDocument();
  });
});
