import { Entity } from 'dexie';

import type X10DB from '../x10db';

export default class HistorySchema extends Entity<X10DB> {
  id!: number;
  date!: string;
  searchedTerm!: string;
}
