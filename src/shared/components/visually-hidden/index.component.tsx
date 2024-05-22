import React from 'react';

function useVisuallyHidden(props?: React.CSSProperties): { style: React.CSSProperties } {
  return {
    style: {
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      height: '1px',
      overflow: 'hidden',
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: '1px',
      ...(props ?? {}),
    },
  };
}

type PrimitiveSpanTypes = React.ComponentPropsWithoutRef<'span'>;
type VisuallyHiddenElement = React.ElementRef<'span'>;
interface VisuallyHiddenPropTypes extends PrimitiveSpanTypes {}

const VisuallyHidden = React.forwardRef<VisuallyHiddenElement, VisuallyHiddenPropTypes>(
  function VisuallyHidden({ style, ...restProps }, forwardedRef) {
    return (
      <span
        {...restProps}
        {...useVisuallyHidden(style)}
        data-testid="visuallyHidden"
        ref={forwardedRef}
      />
    );
  }
);

export type { PrimitiveSpanTypes, VisuallyHiddenElement, VisuallyHiddenPropTypes };

export { useVisuallyHidden, VisuallyHidden };
