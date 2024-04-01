import { SyntheticEvent } from 'react';

export function composeEvents<E = Element>(...handlers: Array<(ev: SyntheticEvent<E>) => void>) {
  return function onEvent(ev: SyntheticEvent<E>) {
    if (ev.defaultPrevented) return;

    handlers.forEach((handler) => handler(ev));
  };
}
