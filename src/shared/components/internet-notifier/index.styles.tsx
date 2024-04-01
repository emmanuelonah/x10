import * as Dialog from '@radix-ui/react-dialog';

import { styled } from 'styled-components';

import { designTokens } from 'design-system';

const Content = styled(Dialog.Content)`
  background-color: ${({ theme }) => theme.colors.white400};
  border-radius: ${({ theme }) => theme.typography.borderRadius.lg};
  box-shadow: 3px 3px 10px 0px #dee2eb;
  color: ${({ theme }) => theme.colors.dark500};
  width: 98%;
  max-width: 500px;
  height: 120px;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 5px;
  right: 5px;
  z-index: ${designTokens.typography.zIndexes.max};
`;

const Close = styled(Dialog.Close)`
  background-color: transparent;
  border: 0;
  outline: none;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const Title = styled(Dialog.Title)`
  font-size: ${({ theme }) => theme.typography.boldBody.fontSize};
  font-weight: ${({ theme }) => theme.typography.boldBody.fontWeight};
  padding-bottom: 0.5rem;
`;

const Description = styled(Dialog.Description)`
  padding-top: 0.5rem;
`;

export { Content, Close, Title, Description };
