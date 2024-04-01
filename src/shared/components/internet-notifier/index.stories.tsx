import React from 'react';

import { Meta } from '@storybook/react';

import { InternetNotifier } from './index.component';

export default {
  title: 'Components/InternetNotifier',
  component: InternetNotifier,
} as Meta<typeof InternetNotifier>;

export const TurnOnAndOffYourWifiToSee = () => <InternetNotifier />;
