import { useState, useCallback } from 'react';

import { HistoryModel } from './index.model';

export function usePostHistoryPresenter() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const deleteHistory = useCallback(async (searchedTerm: string) => {
    setIsLoading(true);

    try {
      await HistoryModel.save(searchedTerm);
    } catch (error) {
      setError(error as Error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return { deleteHistory, isLoading, error };
}
