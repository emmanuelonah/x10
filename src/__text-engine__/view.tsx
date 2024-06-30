import React from 'react';

import { useSearchWidgetContext, Heading3 } from 'shared/components';

export function TextEngineView() {
  const { searchQuery } = useSearchWidgetContext();

  return (
    <div data-testid="textEngineView">
      <Heading3>{searchQuery}</Heading3>
    </div>
  );
}
