import React from 'react';

import { HamburgerMenuIcon } from '@radix-ui/react-icons';

import iconRunning from 'design-system/assets/icn-running.gif';

import { useBoolean } from 'shared/hooks';

import { Button, Content, RunningGiphy } from './menu-widget.styles';

type MenuWidgetPropTypes = {
  open?: boolean;
};

export function MenuWidget(props: MenuWidgetPropTypes) {
  const [open, { toggle }] = useBoolean(props.open || false);

  return (
    <>
      <Button type="button" title="View menu items" onClick={toggle}>
        <HamburgerMenuIcon width="20px" height="20px" />
      </Button>
      <Content open={open} closeOnClickOutside onClose={toggle}>
        <h3>Menu Items Coming soon</h3>
        <RunningGiphy src={iconRunning} alt="Super fast search" />
      </Content>
    </>
  );
}
