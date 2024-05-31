import { useState, useCallback } from 'react';

import { HistoryModel } from './index.model';

export function useDeleteAllHistoriesPresenter() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const deleteAllHistories = useCallback(async () => {
    setIsLoading(true);

    try {
      await HistoryModel.deleteAll();
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { deleteAllHistories, isLoading, error };
}
