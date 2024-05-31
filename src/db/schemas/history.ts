import { Entity } from 'dexie';

import type X10DB from '../x10db';

export class HistorySchema extends Entity<X10DB> {
  id!: number;
  date!: string;
  searchedTerm!: string;
}

const historiesTable = {
  histories: '++id, date',
};

const history = {
  name: 'histories',
  schema: HistorySchema,
  table: historiesTable,
};

export default history;
