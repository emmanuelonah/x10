import React from 'react';

import { MainNode, SearchWidgetNode } from './index.styles';

type PrimitiveMainPropTypes = React.ComponentPropsWithoutRef<'main'>;
type MainElement = React.ElementRef<'main'>;

export const Main = React.forwardRef<MainElement, PrimitiveMainPropTypes>(function Main(
  { children, ...restProps },
  forwardedRef
) {
  return (
    <MainNode {...restProps} ref={forwardedRef} id="main" as="main">
      {children}
      <SearchWidgetNode />
    </MainNode>
  );
});
