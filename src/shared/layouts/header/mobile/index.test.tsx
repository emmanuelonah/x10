import React from 'react';

import { renderWithOptions, screen, within } from 'test';

import { MobileHeader } from './index.layout';

describe('<MobileHeader/>', () => {
  it('should render nav items', () => {
    renderWithOptions(<MobileHeader />);

    const navItems = screen.getByTestId('navItems');

    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(within(navItems).getByTitle('View search history')).toBeInTheDocument();
    expect(within(navItems).getByTitle('View menu items')).toBeInTheDocument();
    expect(within(navItems).getByTitle('View your personal details')).toBeInTheDocument();
  });

  it('should render tab items', () => {
    renderWithOptions(<MobileHeader />);

    const tabItems = screen.getByTestId('tabItems');

    const textSearch = within(tabItems).getByRole('link', { name: 'Text' });
    expect(textSearch).toHaveAttribute('href', '/search-result/textSearch');

    const imageSearch = within(tabItems).getByRole('link', { name: 'Image' });
    expect(imageSearch).toHaveAttribute('href', '/search-result/imageSearch');

    const videoSearch = within(tabItems).getByRole('link', { name: 'Video' });
    expect(videoSearch).toHaveAttribute('href', '/search-result/videoSearch');
  });
});
