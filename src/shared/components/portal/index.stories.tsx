import React from 'react';

import { Meta } from '@storybook/react';

import { Portal } from './index.component';

export default {
  title: 'Components/Portal',
  component: Portal,
} as Meta<typeof Portal>;

export const Primary = () => <Portal>Don't show me 👀</Portal>;
