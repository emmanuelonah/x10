import styled from 'styled-components';

export const Container = styled.div`
  /**
   * @mobileStyle
   */
  padding: 1rem 1.5rem;
  /**
   * @desktopStyle
   */
  @media (min-width: ${({ theme }) => theme.typography.pageWidth.desktopStartWidth}) {
    padding: 1rem 6rem;
  }
`;
