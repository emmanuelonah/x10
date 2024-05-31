import React from 'react';

import { Meta } from '@storybook/react';

import { DocumentRightClick } from './index.component';

export default {
  title: 'Components/DocumentRightClick',
  component: DocumentRightClick,
} as Meta<typeof DocumentRightClick>;

export const Primary = () => <DocumentRightClick />;
