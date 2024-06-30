import React from 'react';

import { useSearchWidgetContext, Heading1 } from 'shared/components';

export function VideoEngineView() {
  const { searchQuery } = useSearchWidgetContext();

  return (
    <div data-testid="videoEngineView">
      <Heading1>{searchQuery}</Heading1>
    </div>
  );
}
