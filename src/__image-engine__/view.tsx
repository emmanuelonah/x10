import React from 'react';

import { useSearchWidgetContext } from 'shared/components';

export function ImageEngineView() {
  const { searchQuery, searchImage } = useSearchWidgetContext();

  return (
    <div data-testid="imageEngineView">
      This is Image Search engine {searchQuery} {searchImage}
    </div>
  );
}
