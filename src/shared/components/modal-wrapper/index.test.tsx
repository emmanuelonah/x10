import React from 'react';

import { renderWithOptions, screen, fireEvent } from 'test';

import { ModalWrapper } from './index.component';

describe('<ModalWrapper/>', () => {
  it('should render component', () => {
    const mockedOnClose = jest.fn();

    renderWithOptions(
      <ModalWrapper open closeOnClickOutside onClose={mockedOnClose}>
        Hello World
      </ModalWrapper>
    );

    expect(screen.getByText('Hello World')).toBeInTheDocument();

    fireEvent.mouseDown(document);

    expect(mockedOnClose).toHaveBeenCalled();
  });
});
