import React from 'react';

import { useSearchWidgetContext, Heading1 } from 'shared/components';

export function ImageEngineView() {
  const { searchQuery } = useSearchWidgetContext();

  return (
    <div data-testid="imageEngineView">
      <Heading1>{searchQuery}</Heading1>
    </div>
  );
}
