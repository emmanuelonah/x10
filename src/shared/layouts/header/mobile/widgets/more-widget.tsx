import React from 'react';

import { DropdownMenuIcon } from '@radix-ui/react-icons';

export function MoreWidget() {
  return (
    <button type="button" title="View more">
      <DropdownMenuIcon width="20px" height="20px" />
    </button>
  );
}
