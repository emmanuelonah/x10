import React from 'react';

import { useBaseLogic } from './useBaseLogic';

type PrimitiveDivPropTypes = React.ComponentPropsWithoutRef<'div'>;
export type LoaderElement = React.ElementRef<'div'>;
export interface BasePropTypes extends PrimitiveDivPropTypes {
  isLoading: boolean;
  benefitOf?: number;
}

export const Base = React.forwardRef<LoaderElement, BasePropTypes>(function Base(
  { isLoading, benefitOf, children, ...restProps },
  forwardedRef
) {
  const { isDoneLoading } = useBaseLogic({ isLoading, benefitOf });

  return (
    <div {...restProps} ref={forwardedRef} aria-live="polite" aria-busy={isLoading}>
      <div>{children}</div>
      {isDoneLoading && <p>Done Loading</p>}
    </div>
  );
});
