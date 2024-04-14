import { useRef, useState, useCallback, useEffect } from 'react';

import { useBoolean } from 'shared/hooks';

import { InternetNotifierModel } from './index.model';

enum INTERNET_STATES {
  DEFAULT = 'DEFAULT',
  GONE_OFFLINE = 'GONE_OFFLINE',
  BACK_ONLINE = 'BACK_ONLINE',
}

export function useInternetNotifier() {
  const { current: model } = useRef(new InternetNotifierModel());
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [state, setState] = useState<keyof typeof INTERNET_STATES>(INTERNET_STATES.DEFAULT);
  const [shownNotifier, { setToFalse: onHideNotifier, setToTrue: onShowNotifier }] = useBoolean();

  const automaticallyHideNotifier = useCallback(() => {
    timeoutIdRef.current = setTimeout(() => onHideNotifier(), 10000);
  }, [onHideNotifier]);

  const offlineListener = useCallback(() => {
    setState(INTERNET_STATES.GONE_OFFLINE);
    onShowNotifier();
    automaticallyHideNotifier();
  }, [automaticallyHideNotifier, onShowNotifier]);

  const onlineListener = useCallback(() => {
    setState(INTERNET_STATES.BACK_ONLINE);
    onShowNotifier();
    automaticallyHideNotifier();
  }, [automaticallyHideNotifier, onShowNotifier]);

  useEffect(() => {
    model.offlineListener(offlineListener);
    model.onlineListener(onlineListener);

    return () => {
      model.unsubscribeOffline(offlineListener);
      model.unsubscribeOnline(onlineListener);
      clearTimeout(timeoutIdRef.current!);
    };
  }, [model, offlineListener, onlineListener]);

  const isBackOnline = state === INTERNET_STATES.BACK_ONLINE;

  return {
    open: shownNotifier,
    title: isBackOnline ? '✅ Back online' : '⚠️ Gone offline',
    message: isBackOnline
      ? 'You are now connected to the internet.'
      : 'You are no longer connected to the internet.',
    onHideNotifier,
  };
}
