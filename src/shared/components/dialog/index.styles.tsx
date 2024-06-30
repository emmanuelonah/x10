import styled from 'styled-components';

import { ModalWrapper } from 'shared/components/modal-wrapper/index.component';

const DialogWrapper = styled(ModalWrapper)`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  padding: 1.5rem 1rem;
  color: ${({ theme }) => theme.colors.white50};
  background-color: ${({ theme }) => theme.colors.dark400};
  box-shadow: 0 0 10px rgba(125, 124, 124, 0.2);
  height: 500px;
  position: fixed;
  z-index: ${({ theme }) => theme.typography.zIndexes.modal};
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
`;

const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  & h4 {
    color: ${({ theme }) => theme.colors.white50};
  }
`;

const CloseButton = styled.button`
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.white50};
`;

export { DialogWrapper, CloseButton, Row1 };
