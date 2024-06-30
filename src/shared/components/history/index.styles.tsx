import styled from 'styled-components';

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
    color: ${({ theme }) => theme.colors.white50};
    padding: 1rem 0;
  }

  & button {
    border: 0;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.white50};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    margin-top: 0.5rem;
  }
`;

const HistoriesList = styled.ul`
  overflow: scroll;
  height: 320px;

  & li {
    background-color: ${({ theme }) => theme.colors.dark200};
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

export { SearchInput, HistoriesList, HistoryItemWrapper, DeleteAllButton };
