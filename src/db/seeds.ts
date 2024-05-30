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
      {
        date: '2021-10-10',
        searchedTerm: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci error sapiente
        excepturi assumenda architecto voluptatum sequi debitis, sit libero!`,
      },
      {
        date: '2021-10-11',
        searchedTerm: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci error sapiente
        excepturi assumenda architecto voluptatum sequi debitis, sit libero!`,
      },
      {
        date: '2021-10-12',
        searchedTerm: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci error sapiente
        excepturi assumenda architecto voluptatum sequi debitis, sit libero!`,
      },
      {
        date: '2021-10-13',
        searchedTerm: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci error sapiente
        excepturi assumenda architecto voluptatum sequi debitis, sit libero!`,
      },
      {
        date: '2021-10-14',
        searchedTerm: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci error sapiente
        excepturi assumenda architecto voluptatum sequi debitis, sit libero!`,
      },
      {
        date: '2021-10-15',
        searchedTerm: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis adipisci error sapiente
        excepturi assumenda architecto voluptatum sequi debitis, sit libero!`,
      },
    ]);
  }

  /**
   * @run seeds the database for development
   */
  public static async run() {
    if (__DEV__) {
      window.x10.println?.group('DATA SEEDING STARTED🛒');
      await Seeder.seedHistory();
      window.x10.println?.info('Database seeded successfully');
      window.x10.println?.groupEnd();
    }
  }
}
