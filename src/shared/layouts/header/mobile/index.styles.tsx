import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.dark400};
  min-height: 100px;
  padding: 1.5rem;
`;

const Logo = styled.img`
  width: 25px;
  height: 25px;
`;

const NavItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  & svg {
    color: ${({ theme }) => theme.colors.white400};
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
`;

const Tab = styled.div`
  background-color: ${({ theme }) => theme.colors.dark200};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.smallText.fontSize};
  margin-top: 2rem;
  padding: 0.3rem 0rem;
`;

const TabItem = styled(NavLink)`
  border-radius: 5px;
  margin: 0 0.5rem;
  padding: 0.5rem;
  display: inline-block;
  width: calc(100% / 3);
  text-align: center;

  &.active {
    background-color: ${({ theme }) => theme.colors.grey400};
  }
`;

export { Header, NavItem, Tab, TabItem, Logo };
