import styled from 'styled-components';

export const ErrorNode = styled.p`
  color: ${(props) => props.theme.colors.error400};
  font-weight: ${(props) => props.theme.typography.smallText.fontWeight};
  font-size: ${(props) => props.theme.typography.smallText.fontSize};
`;
