import React from 'react';

import { Meta } from '@storybook/react';

import { MobileHeader } from './index.layout';

export default {
  title: 'Layouts/MobileHeader',
  component: MobileHeader,
} as Meta<typeof MobileHeader>;

export const Primary = () => <MobileHeader />;
