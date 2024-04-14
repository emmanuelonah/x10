import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { ErrorText } from './index.component';

export default {
  title: 'Components/ErrorText',
  component: ErrorText,
} as Meta<typeof ErrorText>;

export const Primary: StoryFn<typeof ErrorText> = () => (
  <ErrorText>Error connecting to the server</ErrorText>
);
