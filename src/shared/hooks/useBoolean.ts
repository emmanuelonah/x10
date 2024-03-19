import { useCallback, useState } from 'react';

type Returnee = [boolean, { setToTrue(): void; setToFalse(): void; toggle(): void }];

export function useBoolean(initial: boolean | (() => boolean) = false): Returnee {
  const [state, setState] = useState(initial);

  const setToTrue = useCallback(() => setState(true), []);
  const setToFalse = useCallback(() => setState(false), []);
  const toggle = useCallback(() => setState((prevState) => !prevState), []);

  return [state, { setToTrue, setToFalse, toggle }];
}
