import React from 'react';

import { Cross1Icon } from '@radix-ui/react-icons';

import { Heading4, AsyncRenderer } from 'shared/components';

import { useHistories } from './useHistories';
import { SearchBox } from './searchbox.component';
import { HistoryItem } from './history-item.component';
import { HistoryWrapper, CloseButton, HistoriesList, Row1 } from './index.styles';

type HistoryPropTypes = {
  open: boolean;
  onClose(): void;
  className?: string;
};

export function History({ open, onClose, className }: HistoryPropTypes) {
  const { search, ...historiesRequest } = useHistories();

  return (
    <HistoryWrapper open={open} closeOnClickOutside onClose={onClose} className={className}>
      <Row1>
        <Heading4>History</Heading4>
        <CloseButton type="button" aria-label="Close" onClick={onClose}>
          <Cross1Icon />
        </CloseButton>
      </Row1>
      <SearchBox onSearch={search} />
      <HistoriesList>
        <AsyncRenderer {...historiesRequest}>
          {historiesRequest.data?.map((history) => (
            <li key={history.id}>
              <HistoryItem {...history} />
            </li>
          ))}
        </AsyncRenderer>
      </HistoriesList>
    </HistoryWrapper>
  );
}
