import React from 'react';

import { Link } from 'react-router-dom';
import { TrashIcon } from '@radix-ui/react-icons';

import { IHistory } from 'HistoryTypes';

import { HistoryItemWrapper } from './index.styles';

interface HistoryItemPropTypes extends IHistory {
  onDelete(id: number): void;
}
export function HistoryItem({ id, date, searchedTerm, onDelete }: HistoryItemPropTypes) {
  return (
    <HistoryItemWrapper>
      <time>{new Date(date).toLocaleDateString()}</time>
      <Link to="#">{searchedTerm}</Link>
      <button type="button" aria-label="Delete" onClick={() => onDelete(id)}>
        <TrashIcon /> <span>Clear</span>
      </button>
    </HistoryItemWrapper>
  );
}
