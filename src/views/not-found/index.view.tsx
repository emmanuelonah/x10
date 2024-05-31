import React from 'react';

import { useNavigate } from 'react-router-dom';
import { HomeIcon } from '@radix-ui/react-icons';

import iconRunning from 'design-system/assets/icn-running.gif';

import { ROUTES } from 'routes/routes';

import { Container, Heading, Paragraph1, Paragraph2, GoHome, ImgWorry } from './index.styles';

export function NotFound() {
  const navigate = useNavigate();

  return (
    <Container>
      <Heading>404</Heading>
      <Paragraph1>You seem Lost</Paragraph1>
      <Paragraph2>
        Yeah, we're as confused as you are, you took
        <br />
        the wrong turn and came here. Luckily unlike
        <br />
        some mistakes, you can fix this
      </Paragraph2>
      <GoHome type="button" onClick={() => navigate(ROUTES.home, { replace: true })}>
        <HomeIcon />
        <span>Go Home</span>
      </GoHome>
      <ImgWorry src={iconRunning} alt="" />
    </Container>
  );
}
