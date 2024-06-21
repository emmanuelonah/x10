/**
 * @About this folder contains the application global state(state shared across the app)
 *
 * @Usage all global context should be exposed through this store.
 *
 * @Note only global context should be exposed through this file meaning,
 * if a context value is needed in a singular parent, then it should be
 * exposed from here. Mind you, this pattern is modular, meaning each context
 * value is a standalone module.
 *
 * @Sample
 * ```ts
 *   export function GlobalStore(props: GlobalStorePropTypes) {
 *   const a = useAPresenter(); // this is a separate logical module in its on file
 *   const b = useBPresenter(); // this is a separate logical module in its on file
 *   const c = useCPresenter(); // this is a separate logical module in its on file
 *   const values = React.useMemo<GlobalStoreContextType>(() => ({ a,b,c }), [a,b,c ]);
 *
 *     return (
 *             <GlobalStoreProvider value={values}>{props.children}</GlobalStoreProvider>;
 *         )
 *     }
 * ```
 */
import React from 'react';

import { createContext } from 'shared/utils';
import { SearchWidgetStore } from 'shared/components';

/**
 * Context
 */
type GlobalStoreContextType = {};

const [GlobalStoreProvider, useGlobalStore] =
  createContext<GlobalStoreContextType>('GlobalStoreContext');

/**
 * Component
 */
type GlobalStorePropTypes = {
  children: React.ReactNode;
};

function GlobalStore(props: GlobalStorePropTypes) {
  const values = React.useMemo<GlobalStoreContextType>(() => ({}), []);

  return (
    <GlobalStoreProvider value={values}>
      <SearchWidgetStore>{props.children}</SearchWidgetStore>
    </GlobalStoreProvider>
  );
}

export { GlobalStore, useGlobalStore };
