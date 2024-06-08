import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { SocialShare } from './index.component';

export default {
  title: 'Components/SocialShare',
  component: SocialShare,
} as Meta<typeof SocialShare>;

export const Primary: StoryFn<typeof SocialShare> = () => (
  <SocialShare title="View Emmanuel Onah Page" url="https://emmanuelonah.com" />
);
