import React from 'react';

import { ErrorNode } from './index.styles';
type PrimitivePPropTypes = React.ComponentPropsWithoutRef<'p'>;
type ErrorTextElement = React.ElementRef<'p'>;

export const ErrorText = React.forwardRef<ErrorTextElement, PrimitivePPropTypes>(
  function ErrorText(props, forwardedRef) {
    return <ErrorNode {...props} ref={forwardedRef} />;
  }
);
