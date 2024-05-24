import React from 'react';

import { ClockIcon } from '@radix-ui/react-icons';

export function HistoryWidget() {
  return (
    <button type="button" title="Click to view search history">
      <ClockIcon width="20px" height="20px" />
    </button>
  );
}
