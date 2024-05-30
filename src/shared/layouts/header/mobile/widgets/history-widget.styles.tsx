import styled from 'styled-components';

import { History } from 'shared/components';

const Button = styled.button`
  position: relative;
`;

const Content = styled(History)`
  &.content {
    position: fixed;
    z-index: ${({ theme }) => theme.typography.zIndexes.modal};
    top: 100px;
    right: 0;
    left: 0;
    width: 100%;
  }
`;

export { Button, Content };
