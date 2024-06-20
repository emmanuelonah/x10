import * as ReactRouterDom from 'react-router-dom';

import { renderHook } from 'test';

import { useSearchType } from '../useSearchType';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('useSearchType', () => {
  it('should return the searchType from URL parameters if it exists in config', () => {
    jest.spyOn(ReactRouterDom, 'useParams').mockReturnValue({ searchType: 'imageSearch' });

    const { result } = renderHook(() => useSearchType());

    expect(result.current).toBe('imageSearch');
  });

  it('should return "textSearch" if the searchType from URL parameters does not exist in config', () => {
    jest.spyOn(ReactRouterDom, 'useParams').mockReturnValue({ searchType: 'randomSearch' });

    const { result } = renderHook(() => useSearchType());

    expect(result.current).toBe('textSearch');
  });

  it('should return "textSearch" if no searchType is provided in URL parameters', () => {
    jest.spyOn(ReactRouterDom, 'useParams').mockReturnValue({});

    const { result } = renderHook(() => useSearchType());

    expect(result.current).toBe('textSearch');
  });
});
