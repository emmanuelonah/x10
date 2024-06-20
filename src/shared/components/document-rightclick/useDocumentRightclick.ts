import { useCallback, useEffect, useRef } from 'react';

import { useBoolean } from 'shared/hooks';

export function useDocumentRightClick() {
  const [open, { toggle }] = useBoolean();
  const ref = useRef<HTMLDivElement>(null);

  /**
   * Handle right click event
   */
  const handleRightClick = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      toggle();
    },
    [toggle]
  );

  useEffect(() => {
    document.addEventListener('contextmenu', handleRightClick);
    return () => {
      document.removeEventListener('contextmenu', handleRightClick);
    };
  }, [handleRightClick]);

  /**
   * Handle click outside event
   */
  const handleClickOutside = useCallback(
    (ev: React.SyntheticEvent | Event) => {
      if (ref.current && !ref.current.contains(ev.target as Node)) toggle();
    },
    [toggle]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return { open, ref };
}
