import { println } from 'shared/proxies';

/**
 * The `Natives` class in TypeScript contains a static method `bind`
 * that assigns the `println` function to `window.x10.println` if it
 * doesn't already exist.
 */
export class Natives {
  /**
   * The function `bind` assigns the `println` function to
   * `window.x10.println` if it doesn't already exist.
   */
  public static bind() {
    window.x10 = window.x10 || {};

    if (!window.x10.println) {
      window.x10.println = println;
    }
  }
}
