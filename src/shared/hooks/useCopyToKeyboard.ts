import { useCallback, useState, useEffect } from 'react';

enum COPY_STATUS {
  NOT_COPIED = 'NOT_COPIED',
  COPIED = 'COPIED',
  FAILED = 'FAILED',
}

type CopyStatus = keyof typeof COPY_STATUS;

enum COPY_TEXT {
  NOT_COPIED = 'Tap to copy link',
  COPIED = 'Link copied',
  FAILED = 'Failed to copy link. Retry?',
}

function useCopyToKeyboard(text: string) {
  const [status, setStatus] = useState<CopyStatus>(COPY_STATUS.NOT_COPIED);

  const statusText: string = COPY_TEXT[status];

  const copyText = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus(COPY_STATUS.COPIED);
    } catch (err) {
      setStatus(COPY_STATUS.FAILED);
    }
  }, [text]);

  const handleKeyDown = useCallback(
    (event: globalThis.KeyboardEvent) => {
      const isCopyKey = event.ctrlKey || event.metaKey;
      const isAlphabetC = event.key === 'c';

      if (isCopyKey && isAlphabetC) copyText();
    },
    [copyText]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return { copyText, status, statusText };
}

export { COPY_STATUS, useCopyToKeyboard };
