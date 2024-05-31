import React from 'react';

import { renderWithOptions, fireEvent, screen } from 'test';

import { DocumentRightClick } from './index.component';

describe('<DocumentRightClick/>', () => {
  it('should toggle open state when right clicked', () => {
    renderWithOptions(<DocumentRightClick />);

    fireEvent.contextMenu(document);
    const element = screen.getByText('Right Clicked Items Coming soon');
    expect(element).toBeInTheDocument();

    fireEvent.contextMenu(document);
    expect(element).not.toBeInTheDocument();
  });

  it('should toggle open state when clicked outside', () => {
    renderWithOptions(<DocumentRightClick />);

    fireEvent.contextMenu(document);
    const element = screen.getByText('Right Clicked Items Coming soon');
    expect(element).toBeInTheDocument();

    fireEvent.mouseDown(document);
    expect(element).not.toBeInTheDocument();
  });
});
