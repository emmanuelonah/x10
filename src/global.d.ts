import { Println } from 'shared/proxies/println/index.proxy';

export {};

declare global {
  interface Window {
    x10: {
      println: Println;
    };
  }
}
