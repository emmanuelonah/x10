import React from 'react';

import { MainNode } from './index.styles';

type PrimitiveMainPropTypes = React.ComponentPropsWithoutRef<'main'>;
type MainElement = React.ElementRef<'main'>;

export const Main = React.forwardRef<MainElement, PrimitiveMainPropTypes>(
  function Main(props, forwardedRef) {
    return <MainNode {...props} ref={forwardedRef} id="main" as="main" />;
  }
);
