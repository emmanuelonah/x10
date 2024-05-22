import { __DEV__ } from 'shared/utils';

import { db } from '.';

export class Seeder {
  private static async seedHistory() {
    const historyCount = await db.histories.count();

    if (!!historyCount) return;

    await db.histories.bulkAdd([
      {
        date: '2021-01-01',
        searchedTerm: 'React',
      },
      {
        date: '2021-01-02',
        searchedTerm: 'Vue',
      },
      {
        date: '2021-01-03',
        searchedTerm: 'Angular',
      },
    ]);
  }

  /**
   * @run seeds the database for development
   */
  public static async run() {
    if (__DEV__) {
      await Seeder.seedHistory();
    }
  }
}
