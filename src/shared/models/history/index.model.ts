import { db } from 'db';

export class HistoryModel {
  public static async save(searchedTerm: string) {
    const date = new Date().toISOString();

    await db.histories.add({ searchedTerm, date });
  }

  public static async all() {
    return await db.histories.toArray();
  }

  public static async find(id: number) {
    return await db.histories.get(id);
  }

  public static async delete(id: number) {
    await db.histories.delete(id);
  }

  public static async deleteAll() {
    await db.histories.clear();
  }
}
