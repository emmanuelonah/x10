import { renderWithOptions, screen } from 'test';

import { Main } from './index.layout';

describe('<Main/>', () => {
  it('should render component', () => {
    renderWithOptions(
      <Main>
        <p>Foo Bar Baz</p>
      </Main>
    );

    expect(screen.getByText('Foo Bar Baz')).toBeInTheDocument();
  });
});
