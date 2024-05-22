import React from 'react';

import { Meta } from '@storybook/react';

import { VisuallyHidden } from './index.component';

export default {
  title: 'Components/VisuallyHidden',
  component: VisuallyHidden,
} as Meta<typeof VisuallyHidden>;

export const Primary = () => <VisuallyHidden>Don't show me 👀</VisuallyHidden>;
