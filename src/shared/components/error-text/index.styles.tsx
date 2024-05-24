import styled from 'styled-components';

export const ErrorNode = styled.p`
  color: ${({ theme }) => theme.colors.error400};
  font-weight: ${({ theme }) => theme.typography.smallText.fontWeight};
  font-size: ${({ theme }) => theme.typography.smallText.fontSize};
`;
