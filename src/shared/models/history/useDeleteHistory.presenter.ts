import { useState, useCallback } from 'react';

import { HistoryModel } from './index.model';

export function useDeleteHistoryPresenter() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const deleteHistory = useCallback(async (id: number) => {
    setIsLoading(true);

    try {
      await HistoryModel.delete(id);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { deleteHistory, isLoading, error };
}
