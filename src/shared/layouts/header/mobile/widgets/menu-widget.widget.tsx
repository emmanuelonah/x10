import React from 'react';

import { HamburgerMenuIcon } from '@radix-ui/react-icons';

import { useBoolean } from 'shared/hooks';
import { Dialog } from 'shared/components';

export function MenuWidget() {
  const [open, { toggle }] = useBoolean();

  return (
    <>
      <button type="button" title="View menu items" onClick={toggle}>
        <HamburgerMenuIcon width="20px" height="20px" />
      </button>
      <Dialog open={open} onClose={toggle} title="Menus">
        <p>Menu Items Coming soon</p>
      </Dialog>
    </>
  );
}
