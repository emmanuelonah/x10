import { renderWithOptions, screen } from '.';

describe('renderWithOptions', () => {
  it('should render children', () => {
    renderWithOptions(<p>Foo Bar Baz</p>);

    expect(screen.getByText('Foo Bar Baz')).toBeInTheDocument();
  });
});
