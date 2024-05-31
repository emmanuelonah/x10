import React from 'react';

import { Meta } from '@storybook/react';

import { ModalWrapper } from './index.component';

export default {
  title: 'Components/ModalWrapper',
  component: ModalWrapper,
} as Meta<typeof ModalWrapper>;

export const Primary = () => <ModalWrapper open>Don't show me 👀</ModalWrapper>;
