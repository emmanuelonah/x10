import React from 'react';

import { useSearchWidgetContext } from 'shared/components';

export function VideoEngineView() {
  const { searchQuery, searchImage } = useSearchWidgetContext();

  return (
    <div data-testid="videoEngineView">
      This is Video Search engine {searchQuery} {searchImage}
    </div>
  );
}
