import { ROUTES } from './routes';

describe('ROUTES', () => {
  it('should match the routes', () => {
    expect(ROUTES).toEqual({
      home: '/',
      searchResult: '/search-result/:searchType',
      textSearch: '/search-result/textSearch',
      imageSearch: '/search-result/imageSearch',
      videoSearch: '/search-result/videoSearch',
      notFound: '*',
    });
  });
});
