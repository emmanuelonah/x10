import React from 'react';

import { Meta } from '@storybook/react';

import { SearchWidget } from './index.component';

export default {
  title: 'Components/SearchWidget',
  component: SearchWidget,
} as Meta<typeof SearchWidget>;

export const Primary = () => <SearchWidget />;
