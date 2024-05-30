import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

const Header = styled.header`
  background-color: ${({ theme }) => theme.colors.dark400};
  min-height: 100px;
  padding: 1.5rem;
`;

const Logo = styled.img`
  width: 40px;
`;

const NavItem = styled.div`
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
`;

const Tab = styled.div`
  border-bottom: solid 2px ${({ theme }) => theme.colors.neutral400};
  border-radius: 1px;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.typography.smallText.fontSize};
  margin-top: 2rem;
  padding-bottom: 0.7rem;
`;

const TabItem = styled(NavLink)`
  margin: 0 0.5rem;
  padding: 0.5rem;
  display: block;

  &:nth-child(3) {
    display: flex;
    justify-content: flex-end;
  }

  &.active {
    background-color: #3a3f50;
    border-radius: 30px;
  }
`;

export { Header, NavItem, Tab, TabItem, Logo };
