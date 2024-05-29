import React from 'react';

import { Helmet } from 'react-helmet';

import icnTruckLoading from './icn-truck-loading.gif';

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
  const { isDoneLoading, loading } = useBaseLogic({ isLoading, benefitOf });

  return (
    <div {...restProps} ref={forwardedRef} aria-live="polite" aria-busy={loading}>
      {loading && (
        <>
          <div>{children}</div>
          <Helmet>
            <title>Loading...</title>
            <link rel="icon" type="image/png" href={icnTruckLoading} />
            <link rel="apple-touch-icon" type="image/png" href={icnTruckLoading} />
          </Helmet>
        </>
      )}
      {isDoneLoading && <p>Done Loading</p>}
    </div>
  );
});
