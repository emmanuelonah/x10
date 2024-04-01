import React from 'react';

import { OuterRing, InnerRing } from './index.style';
import { Base, LoaderElement, BasePropTypes } from '../base/index.component';

export const GifLoader = React.forwardRef<LoaderElement, BasePropTypes>(
  function GifLoader(props, forwardedRef) {
    return (
      <Base {...props} ref={forwardedRef}>
        <OuterRing />
        <InnerRing />
      </Base>
    );
  }
);
