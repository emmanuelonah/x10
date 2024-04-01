import React from 'react';

import { StoryFn, Meta } from '@storybook/react';

import { Container } from './index.layout';

export default {
  title: 'Layouts/Container',
  component: Container,
} as Meta<typeof Container>;

export const Primary: StoryFn<typeof Container> = () => (
  <Container style={{ border: 'solid 4px dodgerblue' }}>
    Feel free to reduce the screen resolution to notice the padding variation based on resolution
  </Container>
);
