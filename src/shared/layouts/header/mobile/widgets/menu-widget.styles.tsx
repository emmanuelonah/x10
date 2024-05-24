import styled from 'styled-components';

import { ModalWrapper } from 'shared/components';

const Button = styled.button`
  position: relative;
`;

const Content = styled(ModalWrapper)`
  background-color: white;
  border: solid 3px #eee;
  width: 80%;
  position: fixed;
  z-index: ${({ theme }) => theme.typography.zIndexes.modal};
  top: 100px;
  right: 0;
  height: 100%;
  border-top-left-radius: 10px;
  padding: 1.5rem;
`;

const RunningGiphy = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  height: 150px;
  z-index: ${({ theme }) => theme.typography.zIndexes.max};
  background-size: cover;
`;

export { Button, Content, RunningGiphy };
