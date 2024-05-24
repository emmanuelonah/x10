import Dexie, { type EntityTable } from 'dexie';

import { __PROD__ } from 'shared/utils';

import history, { HistorySchema } from './schemas/history';

export default class X10DB extends Dexie {
  histories!: EntityTable<HistorySchema, 'id'>;

  constructor() {
    const dbName = __PROD__ ? 'x10DB' : 'x10DB-dev';

    super(dbName);
    this.version(1).stores(Object.assign({}, history.table));
    this.histories.mapToClass(history.schema);
  }
}
