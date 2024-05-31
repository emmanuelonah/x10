import React from 'react';

import { renderWithOptions, fireEvent, screen, userEvent } from 'test';

import { SearchWidget } from './index.component';

describe('<SearchWidget/>', () => {
  it('should search by text', () => {
    renderWithOptions(<SearchWidget />);

    const chatBox = screen.getByRole('textbox', { name: /Ask a question/i });
    fireEvent.change(chatBox, { target: { value: 'Things fall apart' } });

    expect(chatBox).toHaveValue('Things fall apart');
  });

  it('should search by file', () => {
    renderWithOptions(<SearchWidget />);

    const fileInput = screen.getByLabelText('Ask question by image') as HTMLInputElement;
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });

    userEvent.upload(fileInput, file);

    expect(fileInput.files![0]).toStrictEqual(file);
    expect(fileInput.files!.item(0)).toStrictEqual(file);
    expect(fileInput.files).toHaveLength(1);
  });
});
