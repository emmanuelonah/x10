import Dexie, { type EntityTable } from 'dexie';

import HistorySchema from './schemas/history';

export default class X10DB extends Dexie {
  histories!: EntityTable<HistorySchema, 'id'>;

  constructor() {
    super('x10DB');

    this.version(1).stores({
      histories: '++id, date',
    });

    this.histories.mapToClass(HistorySchema);
  }
}
