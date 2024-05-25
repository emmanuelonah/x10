import styled from 'styled-components';

const Content = styled.div`
  padding: 1.5rem;
  border: solid 1px ${({ theme }) => theme.colors.neutral400};
  border-radius: 10px;
  bottom: 0;
  color: ${({ theme }) => theme.colors.neutral100};
  right: 0;
  height: 300px;
  width: 80%;
`;

export { Content };
