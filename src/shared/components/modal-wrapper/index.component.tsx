import React, { useRef } from 'react';

import { Portal } from 'shared/components';
import { useComposeRefs } from 'shared/hooks';

import { useAction } from './useAction';

type PrimitiveDivProps = React.ComponentPropsWithoutRef<'div'>;
type ModalWrapperElement = React.ElementRef<'div'>;
interface ModalWrapperPropTypes extends PrimitiveDivProps {
  open: boolean;
  elementType?: string;
  closeOnClickOutside?: boolean;
  onClose?(): void;
}

export const ModalWrapper = React.forwardRef<ModalWrapperElement, ModalWrapperPropTypes>(
  function ModalWrapper(
    { open, elementType, closeOnClickOutside, onClose, ...restProps },
    forwardedRef
  ) {
    const modalRef = useRef<HTMLDivElement>(null);
    const composedRefs = useComposeRefs<HTMLDivElement>(modalRef, forwardedRef);
    useAction({
      open,
      closeOnClickOutside,
      onClose,
      modalRef,
    });

    return (
      <>
        {open && (
          <Portal elementType={elementType}>
            <div {...restProps} role="dialog" aria-modal="true" ref={composedRefs} />
          </Portal>
        )}
      </>
    );
  }
);
