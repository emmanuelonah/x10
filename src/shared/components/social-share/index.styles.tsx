import styled from 'styled-components';

const ShareButton = styled.button`
  background-color: ${({ theme }) => theme.colors.grey400};
  color: ${({ theme }) => theme.colors.white400};
  border: none;
  align-items: center;
  border-radius: 36px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  min-height: 30px;
  min-width: 150px;
  padding: 1rem;

  & span {
    padding-left: 0.5rem;
  }
`;

const Heading = styled.div`
  color: ${({ theme }) => theme.colors.white400};
  border-bottom: 1px solid rgb(60, 64, 67);
`;

const HeadingRow1 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem 0 1rem;
`;

const Subtitle = styled.p`
  font-size: 12px;
  padding: 0 1rem 0.5rem 1rem;
`;

const CloseButton = styled.button`
  color: ${({ theme }) => theme.colors.white400};
  background-color: transparent;
  border: none;
`;

const Body = styled.div`
  padding: 1rem;
  display: flex;

  & > * {
    margin-right: 1rem;
  }
`;

const Footer = styled.div`
  cursor: pointer;
  border-top: 1px solid rgb(60, 64, 67);
  color: rgb(154, 160, 166);
  font-size: 12px;
  padding: 1rem;
`;

const LinkWrapper = styled.div`
  border-bottom: 2px solid rgb(60, 64, 67);
  display: flex;
  align-items: center;
  padding-bottom: 0.5rem;

  & span {
    text-overflow: ellipsis;
    padding-right: 0.5rem;
  }
`;

const NeutralStatus = styled.p`
  color: ${({ theme }) => theme.colors.white400};
`;

const SuccessStatus = styled.p`
  color: green;
`;

const FailedStatus = styled.p`
  color: red;
`;

export {
  ShareButton,
  Heading,
  Body,
  Subtitle,
  CloseButton,
  HeadingRow1,
  Footer,
  LinkWrapper,
  NeutralStatus,
  SuccessStatus,
  FailedStatus,
};
