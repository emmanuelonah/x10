'use client';

import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { useId } from '@radix-ui/react-id';
import { CrossCircledIcon } from '@radix-ui/react-icons';

import { designTokens } from 'design-system';

import { useInternetNotifier } from './useInternetNotifier.presenter';
import { Content, Close, Title, Description } from './index.styles';

export function InternetNotifier() {
  const closeBtnId = useId('closeBtn');
  const data = useInternetNotifier();

  return (
    <Dialog.Root open={data.open} modal>
      <Dialog.Portal>
        <Content>
          <Close type="button" id={closeBtnId} onClick={data.onHideNotifier}>
            <CrossCircledIcon
              color={designTokens.colors.dark500}
              width="35px"
              height="25px"
              aria-label="Click to close modal"
            />
          </Close>
          <Title>{data.title} 🛜</Title>
          <Description>{data.message}</Description>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
