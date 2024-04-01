import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { AsyncRenderer } from './index.component';

export default {
  title: 'Components/AsyncRenderer',
  component: AsyncRenderer,
} as Meta<typeof AsyncRenderer>;

export const IsLoading: StoryFn<typeof AsyncRenderer> = () => <AsyncRenderer isLoading />;

export const WithError: StoryFn<typeof AsyncRenderer> = () => (
  <AsyncRenderer error={new Error('Not authorized!')} />
);

export const WithJsxData: StoryFn<typeof AsyncRenderer> = () => (
  <AsyncRenderer>Hello, World!</AsyncRenderer>
);

export const WithFCCData: StoryFn<typeof AsyncRenderer> = () => (
  <AsyncRenderer data={{ name: 'Foo Bar Baz' }}>{(data) => data.name}</AsyncRenderer>
);
