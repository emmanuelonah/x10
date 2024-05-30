import { renderHook, act } from 'test';

import { useBoolean } from './useBoolean';

describe('useBoolean', () => {
  it('should return the initial value', () => {
    const { result } = renderHook(() => useBoolean(true));

    expect(result.current[0]).toBe(true);
  });

  it('should toggle the boolean value', () => {
    const { result } = renderHook(() => useBoolean(false));

    act(() => {
      result.current[1].toggle();
    });
    expect(result.current[0]).toBe(true);

    act(() => {
      result.current[1].toggle();
    });
    expect(result.current[0]).toBe(false);
  });

  it('should set the value to true', () => {
    const { result } = renderHook(() => useBoolean(false));

    act(() => {
      result.current[1].setToTrue();
    });
    expect(result.current[0]).toBe(true);
  });

  it('should set the value to false', () => {
    const { result } = renderHook(() => useBoolean(true));

    act(() => {
      result.current[1].setToFalse();
    });
    expect(result.current[0]).toBe(false);
  });
});
