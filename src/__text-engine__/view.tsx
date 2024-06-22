import React from 'react';

import { useSearchWidgetContext } from 'shared/components';

export function TextEngineView() {
  const { searchQuery, searchImage } = useSearchWidgetContext();

  return (
    <div data-testid="textEngineView">
      This is Text Search engine {searchQuery} {searchImage}
    </div>
  );
}
