import React from 'react';

import { Meta } from '@storybook/react';

import { AccessibleIcon } from './index.component';

export default {
  title: 'Components/AccessibleIcon',
  component: AccessibleIcon,
} as Meta<typeof AccessibleIcon>;

export const Primary = () => (
  <AccessibleIcon label="Clerical staff">
    <>🧑‍💻</>
  </AccessibleIcon>
);
