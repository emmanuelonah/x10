import React, { useState } from 'react';

import { HamburgerMenuIcon } from '@radix-ui/react-icons';

import iconRunning from './icon-running.gif';

import { Button, Content, RunningGiphy } from './menu-widget.styles';

type MenuWidgetPropTypes = {
  open?: boolean;
};

export function MenuWidget(props: MenuWidgetPropTypes) {
  const [open, setOpen] = useState(props.open || false);

  return (
    <>
      <Button
        type="button"
        title="Click to view menu items"
        onClick={() => setOpen((prev) => !prev)}
      >
        <HamburgerMenuIcon width="20px" height="20px" />
      </Button>
      <Content open={open}>
        <h3>Menu Items Coming soon</h3>
        <RunningGiphy src={iconRunning} alt="Super fast search" />
      </Content>
    </>
  );
}
