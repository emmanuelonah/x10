import { ROUTES } from './routes';

describe('ROUTES', () => {
  it('should match the routes', () => {
    expect(ROUTES).toEqual({
      home: '/',
      notFound: '*',
    });
  });
});
