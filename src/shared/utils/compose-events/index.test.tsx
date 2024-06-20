import React from 'react';

import { fireEvent, render } from 'test';

import { composeEvents } from './index.util';

describe('composeEvents', () => {
  it('should call all handlers on event trigger', () => {
    const handler1 = jest.fn();
    const handler2 = jest.fn();
    const { getByTestId } = render(
      <button data-testid="test-button" onClick={composeEvents(handler1, handler2)}>
        Click
      </button>
    );

    fireEvent.click(getByTestId('test-button'));

    expect(handler1).toHaveBeenCalled();
    expect(handler2).toHaveBeenCalled();
  });

  it('should not call handlers if event defaultPrevented is true', () => {
    const handler = jest.fn();
    const { getByTestId } = render(
      <button
        data-testid="test-button"
        onClick={(e) => {
          e.preventDefault();
          composeEvents(handler)(e);
        }}
      >
        Click
      </button>
    );

    fireEvent.click(getByTestId('test-button'));

    expect(handler).not.toHaveBeenCalled();
  });
});
