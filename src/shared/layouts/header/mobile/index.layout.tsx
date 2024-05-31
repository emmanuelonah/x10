import React from 'react';

import { ROUTES } from 'routes/routes';

import icnLogo from 'design-system/assets/icn-logo.png';

import { useClassName } from './useClassName';
import { ProfileWidget } from './widgets/profile-widget';
import { HistoryWidget } from './widgets/history-widget';
import { MenuWidget } from './widgets/menu-widget.widget';
import { Header, NavItem, Tab, TabItem, Logo } from './index.styles';

export function MobileHeader() {
  const className = useClassName();

  return (
    <Header>
      <nav>
        <NavItem data-testid="navItems">
          <div>
            <Logo src={icnLogo} alt="Logo" />
          </div>
          <div>
            <HistoryWidget />
            <MenuWidget />
            <ProfileWidget />
          </div>
        </NavItem>

        <Tab data-testid="tabItems">
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
