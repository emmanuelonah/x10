import { useCallback, useEffect } from 'react';

type ArgType = {
  open: boolean;
  onClose?(): void;
  closeOnClickOutside?: boolean;
  modalRef: React.RefObject<HTMLDivElement>;
};

export function useAction({ open, onClose, closeOnClickOutside, modalRef }: ArgType) {
  const shouldClose = open && closeOnClickOutside && onClose;

  const handleClickOutside = useCallback(
    (ev: React.SyntheticEvent | Event) => {
      const clickedElement = modalRef.current && !modalRef.current.contains(ev.target as Node);

      if (shouldClose && clickedElement) onClose();
    },
    [modalRef, onClose, shouldClose]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return { handleClickOutside };
}
