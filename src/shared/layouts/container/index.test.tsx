import { renderWithOptions, screen } from '../../../test';

import { Container } from './index.layout';

describe('<Container/>', () => {
  it('should render component', () => {
    renderWithOptions(
      <Container>
        <p>Foo Bar Bax</p>
      </Container>
    );

    expect(screen.getByText('Foo Bar Bax')).toBeInTheDocument();
  });
});
