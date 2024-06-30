import React from 'react';

import { ClockIcon } from '@radix-ui/react-icons';

import { useBoolean } from 'shared/hooks';
import { History, Dialog } from 'shared/components';

export function HistoryWidget() {
  const [open, { toggle }] = useBoolean();

  return (
    <>
      <button type="button" title="View search history" onClick={toggle}>
        <ClockIcon width="20px" height="20px" />
      </button>
      <Dialog open={open} title="Histories" onClose={toggle}>
        <History />
      </Dialog>
    </>
  );
}
