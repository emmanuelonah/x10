import styled from 'styled-components';

import { ModalWrapper } from 'shared/components/modal-wrapper/index.component';

/**
 * Styles for searchbox.component.tsx
 */
const SearchInput = styled.input`
  border: 0;
  border-radius: 5px;
  padding: 1rem;
  margin-bottom: 1rem;
  width: 100%;
`;

/**
 * Styles for history-item.component.tsx
 */
const HistoryItemWrapper = styled.div`
  & * {
    display: block;
  }

  & time {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.grey400};
  }

  & a {
    color: #e8eaec;
    padding: 1rem 0;
  }

  & button {
    border: 0;
    background-color: transparent;
    color: #e8eaec;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    margin-top: 0.5rem;
  }
`;

/**
 * Styles for index.component.tsx
 */
const HistoryWrapper = styled(ModalWrapper)`
  border: solid 2px ${({ theme }) => theme.colors.grey400};
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  color: #e8eaec;
  background-color: #171719;
  height: 500px;
`;

const Row1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  & h4 {
    color: #e8eaec;
  }
`;

const CloseButton = styled.button`
  border: 0;
  background-color: transparent;
  color: #e8eaec;
`;

const HistoriesList = styled.ul`
  overflow: scroll;
  height: 320px;

  & li {
    background-color: #303133;
    margin-bottom: 1rem;
    padding: 1rem;
  }
`;

const DeleteAllButton = styled.button`
  color: ${({ theme }) => theme.colors.error400};
  background-color: transparent;
  text-align: center;
  border: 0;
  width: 100%;
`;

export {
  SearchInput,
  HistoryWrapper,
  CloseButton,
  HistoriesList,
  Row1,
  HistoryItemWrapper,
  DeleteAllButton,
};
