import React from 'react';

import { AvatarIcon } from '@radix-ui/react-icons';

export function ProfileWidget() {
  return (
    <button type="button" title="Click to view your personal details">
      <AvatarIcon width="20px" height="20px" />
    </button>
  );
}
