import { __DEV__ } from 'shared/utils';

type ConsoleMethodName = keyof Console;

export type Println = Record<ConsoleMethodName, (...args: unknown[]) => void>;

const PRINTERS = {
  log: 'log',
  info: 'info',
  warn: 'warn',
  error: 'error',
  debug: 'debug',
  trace: 'trace',
  table: 'table',
} as Record<ConsoleMethodName, ConsoleMethodName>;

const PRINTERS_PREFIX = {
  log: '✅',
  info: 'ℹ️',
  warn: '⚠️',
  error: '⛔️',
  debug: '🛠️',
  trace: '🔎',
  table: '📋',
} as Record<ConsoleMethodName, string>;

export const println = new Proxy({} as Println, {
  get(_target: Println, prop: ConsoleMethodName) {
    if (__DEV__ && Object.values(PRINTERS).includes(prop)) {
      return function (...args: unknown[]) {
        const method = console[prop] as (...data: unknown[]) => void;

        return method(`${PRINTERS_PREFIX[prop]}`, ...args);
      };
    }

    return function () {
      return {};
    };
  },
});
