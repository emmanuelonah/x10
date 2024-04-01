import React from 'react';

import { Meta } from '@storybook/react';

import * as Loaders from './index.component';

export default {
  title: 'Components/Loaders',
  component: Loaders.Base,
} as Meta<typeof Loaders.Base>;

export const TextLoader = () => <Loaders.TextLoader isLoading />;

export const GifLoader = () => <Loaders.GifLoader isLoading />;
