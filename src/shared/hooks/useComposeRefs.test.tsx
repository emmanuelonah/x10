import React, { useRef } from 'react';
import { render, screen, renderHook } from 'test';

import { useComposeRefs } from './useComposeRefs';

describe('useComposeRefs', () => {
  it('should compose refs', () => {
    const { result: ref1 } = renderHook(() => useRef<HTMLDivElement>(null));
    const { result: ref2 } = renderHook(() => useRef<HTMLDivElement>(null));
    const { result: composedRef } = renderHook(() => useComposeRefs(ref1.current, ref2.current));

    render(<div ref={composedRef.current}>Test</div>);

    expect(ref1.current.current).toBeInstanceOf(HTMLDivElement);
    expect(ref2.current.current).toBeInstanceOf(HTMLDivElement);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });
});
