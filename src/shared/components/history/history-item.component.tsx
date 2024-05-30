import React from 'react';

import { Link } from 'react-router-dom';
import { TrashIcon } from '@radix-ui/react-icons';

import { IHistory } from 'HistoryTypes';

import { HistoryItemWrapper } from './index.styles';

export function HistoryItem(props: IHistory) {
  return (
    <HistoryItemWrapper>
      <time>{new Date(props.date).toLocaleDateString()}</time>
      <Link to="#">{props.searchedTerm}</Link>
      <button type="button" aria-label="Click to delete">
        <TrashIcon /> <span>Clear</span>
      </button>
    </HistoryItemWrapper>
  );
}
