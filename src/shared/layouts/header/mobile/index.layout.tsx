import React from 'react';

import { Header } from './index.styles';
import { MenuWidget } from './widgets/menu-widget.widget';
import { ProfileWidget } from './widgets/profile-widget';
import { HistoryWidget } from './widgets/history-widget';
import { MoreWidget } from './widgets/more-widget';

export function MobileHeader() {
  return (
    <Header>
      <nav>
        <div>
          <MoreWidget />
        </div>
        <div>
          <HistoryWidget />
          <MenuWidget />
          <ProfileWidget />
        </div>
      </nav>
    </Header>
  );
}
