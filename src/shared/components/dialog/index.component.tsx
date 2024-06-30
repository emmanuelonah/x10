import React from 'react';

import { Cross1Icon } from '@radix-ui/react-icons';

import { Heading4 } from 'shared/components';

import { DialogWrapper, CloseButton, Row1 } from './index.styles';

type DialogPropTypes = {
  open: boolean;
  title: string;
  onClose(): void;
  children: React.ReactNode;
};

export function Dialog({ open, title, children, onClose }: DialogPropTypes) {
  return (
    <DialogWrapper open={open} closeOnClickOutside onClose={onClose}>
      <Row1>
        <Heading4>{title}</Heading4>
        <CloseButton type="button" aria-label="Close" onClick={onClose}>
          <Cross1Icon />
        </CloseButton>
      </Row1>
      {children}
    </DialogWrapper>
  );
}
