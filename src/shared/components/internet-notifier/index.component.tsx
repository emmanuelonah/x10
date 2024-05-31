import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { useId } from '@radix-ui/react-id';
import { CrossCircledIcon } from '@radix-ui/react-icons';

import { designTokens } from 'design-system';

import { useInternetNotifier } from './useInternetNotifier.presenter';
import { Content, Close, Header, Title, Description } from './index.styles';

export function InternetNotifier() {
  const closeBtnId = useId('closeBtn');
  const data = useInternetNotifier();

  return (
    <Dialog.Root open={data.open} modal>
      <Dialog.Portal>
        <Content>
          <Header>
            <Title>{data.title}</Title>
            <Close type="button" id={closeBtnId} onClick={data.onHideNotifier}>
              <CrossCircledIcon
                width="25px"
                height="20px"
                aria-label="Close modal"
                color={designTokens.colors.dark500}
              />
            </Close>
          </Header>
          <Description>{data.message}</Description>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
