import { useState, useCallback } from 'react';

import { HistoryModel } from './index.model';

export function useDeleteAllHistoryPresenter() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const deleteHistory = useCallback(async () => {
    setIsLoading(true);

    try {
      await HistoryModel.deleteAll();
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { deleteHistory, isLoading, error };
}
