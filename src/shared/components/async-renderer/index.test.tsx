import { render, screen } from 'test';

import { AsyncRenderer } from './index.component';

describe('<AsyncRenderer/>', () => {
  it('should render loader when isLoading is true', () => {
    render(
      <AsyncRenderer
        isLoading={true}
        error={null}
        data={null}
        loader="Loading..."
        children={() => null}
      />
    );
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should render error message when error is not null', () => {
    render(
      <AsyncRenderer
        isLoading={false}
        error={new Error('Error message')}
        data={null}
        children={() => null}
      />
    );
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('should render children when isLoading is false and error is null', () => {
    render(
      <AsyncRenderer
        isLoading={false}
        error={null}
        data={{ name: 'Foo Bar Baz' }}
        children={(data) => data.name}
      />
    );
    expect(screen.getByText('Foo Bar Baz')).toBeInTheDocument();
  });

  it('should render children when isLoading is false and error is null', () => {
    render(
      <AsyncRenderer isLoading={false} error={null} data={null}>
        Children
      </AsyncRenderer>
    );
    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});