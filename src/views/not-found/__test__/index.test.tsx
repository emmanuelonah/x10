import React from 'react';

import { ROUTES } from 'routes/routes';
import { renderWithOptions, screen, userEvent } from 'test';

import { NotFound } from '../index.view';

const mockedNavigate = jest.fn().mockImplementation((path) => path);
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

describe('<NotFound/>', () => {
  it('should render correctly', () => {
    renderWithOptions(<NotFound />);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('You seem Lost')).toBeInTheDocument();
    expect(screen.getByText(/Yeah, we're as confused as you are,/)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Go Home/ })).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      expect.stringContaining('icn-running.gif')
    );
  });

  it('should navigate to home on "Go Home" button click', () => {
    renderWithOptions(<NotFound />);

    const goHomeButton = screen.getByRole('button', { name: /Go Home/ });
    userEvent.click(goHomeButton);

    expect(mockedNavigate).toHaveBeenCalledWith(ROUTES.home, { replace: true });
  });
});
