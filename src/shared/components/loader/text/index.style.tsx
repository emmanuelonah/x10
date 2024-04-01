import styled, { keyframes } from 'styled-components';

const dim = keyframes`
  0% {
    color: inherit;
  }

  100% {
    color: hsl(200, 20%, 95%);
  }
`;

export const Text = styled.p`
  opacity: 0.7;
  animation: ${dim} 1s linear infinite alternate;
`;
