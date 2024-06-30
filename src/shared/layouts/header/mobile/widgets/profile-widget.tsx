import React from 'react';

import { AvatarIcon } from '@radix-ui/react-icons';

import { useBoolean } from 'shared/hooks';
import { Dialog, SocialShare } from 'shared/components';

export function ProfileWidget() {
  const [open, { toggle }] = useBoolean();

  return (
    <>
      <button type="button" title="View your personal details" onClick={toggle}>
        <AvatarIcon width="20px" height="20px" />
      </button>

      <Dialog open={open} onClose={toggle} title="Profile">
        <SocialShare url="https://x10.com" title="x10 best result search engine" />
      </Dialog>
    </>
  );
}
