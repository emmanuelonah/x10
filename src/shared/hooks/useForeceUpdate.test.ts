import { renderHook } from 'test';

import { useForceUpdate } from './useForceUpdate';

describe('useForceUpdate', () => {
  it('should return a function that forces a re-render', () => {
    const { result } = renderHook(() => useForceUpdate());

    expect(typeof result.current).toBe('function');
  });
});
