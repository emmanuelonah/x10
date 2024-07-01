import React from 'react';

import { AsyncRenderer } from 'shared/components';

import { useHistories } from './useHistories';
import { SearchBox } from './searchbox.component';
import { HistoryItem } from './history-item.component';
import { HistoriesList, DeleteAllButton } from './index.styles';

export function History() {
  const { search, deleteAHistory, deleteAll, ...historiesRequest } = useHistories();

  const hasHistories = !!historiesRequest.data?.length;

  return (
    <>
      <SearchBox onSearch={search} />
      <HistoriesList>
        <AsyncRenderer {...historiesRequest}>
          {historiesRequest.data?.map((history) => (
            <li key={history.id}>
              <HistoryItem {...history} onDelete={deleteAHistory} />
            </li>
          ))}
        </AsyncRenderer>
      </HistoriesList>
      {hasHistories && (
        <DeleteAllButton type="button" onClick={deleteAll}>
          Delete All
        </DeleteAllButton>
      )}
    </>
  );
}
