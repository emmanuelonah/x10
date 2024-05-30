import React from 'react';

import { ClockIcon } from '@radix-ui/react-icons';

import { useBoolean } from 'shared/hooks';

import { Content, Button } from './history-widget.styles';

export function HistoryWidget() {
  const [open, { toggle }] = useBoolean();

  return (
    <>
      <Button type="button" title="Click to view search history" onClick={toggle}>
        <ClockIcon width="20px" height="20px" />
      </Button>
      <Content open={open} onClose={toggle} className="content" />
    </>
  );
}
