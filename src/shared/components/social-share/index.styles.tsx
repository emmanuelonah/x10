import styled from 'styled-components';

import { ModalWrapper } from 'shared/components';

const ShareButton = styled.button`
  background-color: #394457;
  color: white;
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

const Modal = styled(ModalWrapper)`
  position: fix;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 auto;
  background-color: #303134;
  border-radius: 10px 10px 0 0;
  min-height: 300px;
  width: 100%;
`;

const Heading = styled.div`
  color: rgb(232, 234, 237);
  border-bottom: 1px solid rgb(60, 64, 67);
`;

const HeadingRow1 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem 0 1rem;
`;

const Subtitle = styled.p`
  color: rgb(154, 160, 166);
  font-size: 12px;
  padding: 0 1rem 0.5rem 1rem;
`;

const CloseButton = styled.button`
  color: rgb(232, 234, 237);
  background-color: transparent;
  border: none;
`;

const Body = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
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
  color: white;
`;

const SuccessStatus = styled.p`
  color: green;
`;

const FailedStatus = styled.p`
  color: red;
`;

export {
  ShareButton,
  Modal,
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
