import styled from 'styled-components';

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.dark400};
  height: 100px;
  padding: 1.5rem;

  & nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    & svg {
      color: ${({ theme }) => theme.colors.neutral200};
    }

    & button {
      background-color: transparent;
      border: none;
    }

    & > div {
      &:first-child {
        width: 30%;
      }

      &:last-child {
        display: flex;
        justify-content: flex-end;
        width: 70%;

        & > button {
          margin: 0 12px;
        }
      }
    }
  }
`;

export { Header };