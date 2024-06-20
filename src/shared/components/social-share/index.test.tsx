import React from 'react';

import { renderWithOptions, fireEvent, screen } from 'test';

import { SocialShare } from './index.component';
import * as useCopyToKeyboardModule from 'shared/hooks/useCopyToKeyboard';

describe('<SocialShare/>', () => {
  const url = 'https://example.com';
  const title = 'Example Title';

  beforeEach(() => {
    jest.spyOn(useCopyToKeyboardModule, 'useCopyToKeyboard').mockReturnValue({
      copyText: jest.fn(),
      status: 'NOT_COPIED',
      statusText: 'Tap to copy link',
    });
  });

  it('renders correctly', () => {
    renderWithOptions(<SocialShare url={url} title={title} />);
    expect(screen.getByText('Share')).toBeInTheDocument();
  });

  it('toggles modal on share button click', () => {
    renderWithOptions(<SocialShare url={url} title={title} />);
    fireEvent.click(screen.getByText('Share'));
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  it('displays the correct status text', () => {
    renderWithOptions(<SocialShare url={url} title={title} />);
    fireEvent.click(screen.getByText('Share'));
    expect(screen.getByText('Tap to copy link')).toBeInTheDocument();
  });

  it('calls copyText function on footer click', () => {
    const { copyText } = useCopyToKeyboardModule.useCopyToKeyboard(url);
    renderWithOptions(<SocialShare url={url} title={title} />);
    fireEvent.click(screen.getByText('Share'));
    fireEvent.click(screen.getByText('Tap to copy link'));
    expect(copyText).toHaveBeenCalled();
  });

  it('renders all share buttons', () => {
    renderWithOptions(<SocialShare url={url} title={title} />);

    fireEvent.click(screen.getByText('Share'));

    expect(screen.getByTestId('facebook')).toBeInTheDocument();
    expect(screen.getByTestId('whatsApp')).toBeInTheDocument();
    expect(screen.getByTestId('twitter')).toBeInTheDocument();
    expect(screen.getByTestId('email')).toBeInTheDocument();
  });
});
