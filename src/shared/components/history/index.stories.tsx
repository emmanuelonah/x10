import React from 'react';

import { fn } from '@storybook/test';
import { Meta } from '@storybook/react';

import { History } from './index.component';

export default {
  title: 'Components/History',
  component: History,
} as Meta<typeof History>;

export const Primary = () => <History open={true} onClose={fn()} />;
