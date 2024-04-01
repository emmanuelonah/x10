import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    0% {
        transform:rotate(0deg);
    }

    100% {
        transform:rotate(360deg);
    }
`;

const OuterRing = styled.div`
  position: absolute;
  left: calc(50% - 150px);
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background-image: linear-gradient(
    135deg,
    #feed07 0%,
    #fe6a50 5%,
    #ed00aa 15%,
    #2fe3fe 50%,
    #8900ff 100%
  );
  animation-duration: 2s;
  animation-name: ${rotate};
  animation-iteration-count: infinite;
`;

const InnerRing = styled.div`
  position: absolute;
  left: calc(50% - 140px);
  height: 140px;
  width: 140px;
  border-radius: 50%;
  background-image: linear-gradient(0deg, #36295e, #1c1045);
`;

export { OuterRing, InnerRing };
