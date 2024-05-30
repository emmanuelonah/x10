import { useState } from 'react';
import { useLiveQuery } from 'dexie-react-hooks';

import { IHistory } from 'HistoryTypes';

import { HistoryModel } from './index.model';

export function useGetHistoriesPresenter() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Array<IHistory> | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useLiveQuery(async () => {
    setIsLoading(true);

    try {
      const data = await HistoryModel.all();
      setData(data);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  });

  return { isLoading, data, error, setData };
}
