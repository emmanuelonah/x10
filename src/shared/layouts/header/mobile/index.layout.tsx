import React from 'react';

import { ROUTES } from 'routes/routes';

import { useClassName } from './useClassName';
import { MoreWidget } from './widgets/more-widget';
import { ProfileWidget } from './widgets/profile-widget';
import { HistoryWidget } from './widgets/history-widget';
import { MenuWidget } from './widgets/menu-widget.widget';
import { Header, NavItem, Tab, TabItem } from './index.styles';

export function MobileHeader() {
  const className = useClassName();

  return (
    <Header>
      <nav>
        <NavItem>
          <div>
            <MoreWidget />
          </div>
          <div>
            <HistoryWidget />
            <MenuWidget />
            <ProfileWidget />
          </div>
        </NavItem>

        <Tab>
          <TabItem to={ROUTES.textSearch} className={className('textSearch')}>
            Text
          </TabItem>
          <TabItem to={ROUTES.imageSearch} className={className('imageSearch')}>
            Image
          </TabItem>
          <TabItem to={ROUTES.videoSearch} className={className('videoSearch')}>
            Video
          </TabItem>
        </Tab>
      </nav>
    </Header>
  );
}
