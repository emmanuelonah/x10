import React from 'react';

import { renderWithOptions, screen, act } from 'test';

import * as Loader from './index.component';

describe('<Loaders/>', () => {
  describe('<TextLoader/>', () => {
    it('should render component', async () => {
      renderWithOptions(<Loader.TextLoader isLoading />);

      await act(async () => {
        await new Promise((r) => setTimeout(r, 2000));
      });

      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });

  describe('<GifLoader/>', () => {
    it('should render component', async () => {
      const { container } = renderWithOptions(<Loader.GifLoader isLoading />);

      await act(async () => {
        await new Promise((r) => setTimeout(r, 2000));
      });

      expect(container).not.toBeEmptyDOMElement();
    });
  });
});
