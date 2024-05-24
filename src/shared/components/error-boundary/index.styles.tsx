import styled from 'styled-components';

import { Container } from 'shared/layouts/container/index.layout';

const Wrapper = styled(Container)`
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  & > img {
    width: 300px;
  }
`;

const Refresh = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  & span {
    padding-left: 0.5rem;
  }

  & img {
    width: 25px;
  }
`;

export { Wrapper, Refresh };
