import React from 'react';

import { Text } from './index.style';
import { Base, LoaderElement, BasePropTypes } from '../base/index.component';

export const TextLoader = React.forwardRef<LoaderElement, BasePropTypes>(
  function TextLoader(props, forwardedRef) {
    return (
      <Base {...props} ref={forwardedRef}>
        <Text>Loading...</Text>
      </Base>
    );
  }
);
