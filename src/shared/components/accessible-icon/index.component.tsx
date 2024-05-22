import React from 'react';

import {
  VisuallyHidden,
  VisuallyHiddenElement,
  PrimitiveSpanTypes,
} from 'shared/components/visually-hidden/index.component';

interface AccessibleIconPropTypes extends PrimitiveSpanTypes {
  label: React.ReactNode;
  children: React.ReactElement;
}

export const AccessibleIcon = React.forwardRef<VisuallyHiddenElement, AccessibleIconPropTypes>(
  function AccessibleIcon({ label, children, ...restProps }, forwardedRef) {
    return (
      <>
        <VisuallyHidden {...restProps} ref={forwardedRef}>
          {label}
        </VisuallyHidden>
        {React.cloneElement(React.Children.only(children), {
          focusable: 'false',
          'aria-hidden': 'true',
        })}
      </>
    );
  }
);
