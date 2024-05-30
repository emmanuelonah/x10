import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { Empty } from './index.component';

export default {
  title: 'Components/Empty',
  component: Empty,
} as Meta<typeof Empty>;

export const Primary: StoryFn<typeof Empty> = () => <Empty />;
