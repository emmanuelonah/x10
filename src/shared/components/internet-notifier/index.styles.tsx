import * as Dialog from '@radix-ui/react-dialog';

import { styled } from 'styled-components';

const Content = styled(Dialog.Content)`
  background-color: ${({ theme }) => theme.colors.dark400};
  border-radius: ${({ theme }) => theme.typography.borderRadius.md};
  border: solid 2px ${({ theme }) => theme.colors.dark300};
  width: 98%;
  max-width: 400px;
  height: 90px;
  padding: 0.5rem 0.8rem;
  position: fixed;
  top: 5px;
  right: 5px;
  z-index: ${({ theme }) => theme.typography.zIndexes.max};
`;

const Close = styled(Dialog.Close)`
  background-color: transparent;
  border: 0;
  outline: none;
  display: flex;
  width: 25px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
`;

const Title = styled(Dialog.Title)`
  font-size: ${({ theme }) => theme.typography.boldBody.fontSize};
  font-weight: ${({ theme }) => theme.typography.bodyText.fontWeight};
`;

const Description = styled(Dialog.Description)`
  font-size: ${({ theme }) => theme.typography.smallText.fontSize};
  font-weight: ${({ theme }) => theme.typography.smallText.fontWeight};
`;

export { Header, Content, Close, Title, Description };
