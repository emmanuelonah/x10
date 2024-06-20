import styled from 'styled-components';

import { ModalWrapper } from 'shared/components';

const Button = styled.button`
  position: relative;
`;

const Content = styled(ModalWrapper)`
  border-top-left-radius: 1rem;
  border-top: solid 2px ${({ theme }) => theme.colors.grey400};
  border-left: solid 2px ${({ theme }) => theme.colors.grey400};
  border-bottom: solid 2px ${({ theme }) => theme.colors.grey400};
  padding: 1.5rem 1rem;
  color: #e8eaec;
  background-color: #171719;
  width: 80%;
  position: fixed;
  z-index: ${({ theme }) => theme.typography.zIndexes.modal};
  top: 100px;
  right: 0;
  height: 100%;
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
