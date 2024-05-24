import * as React from 'react';

import { Portal } from 'shared/components';

type PrimitiveDivProps = React.ComponentPropsWithoutRef<'div'>;
type ModalWrapperElement = React.ElementRef<'div'>;
interface ModalWrapperPropTypes extends PrimitiveDivProps {
  open: boolean;
  elementType?: string;
}

export const ModalWrapper = React.forwardRef<ModalWrapperElement, ModalWrapperPropTypes>(
  function ModalWrapper({ open, elementType, ...restProps }, forwardedRef) {
    return (
      <>
        {open && (
          <Portal elementType={elementType}>
            <div ref={forwardedRef} role="dialog" aria-modal="true" {...restProps} />
          </Portal>
        )}
      </>
    );
  }
);
