import React from 'react';
import Draggable from 'react-draggable';

import { ModalWrapper } from 'shared/components';

import { Content } from './index.styles';
import { useDocumentRightClick } from './useDocumentRightclick';

export function DocumentRightClick() {
  const { open, ref } = useDocumentRightClick();

  return (
    <ModalWrapper ref={ref} open={open}>
      <Draggable>
        <Content>Right Clicked Items Coming soon</Content>
      </Draggable>
    </ModalWrapper>
  );
}
