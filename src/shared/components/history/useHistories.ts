import { useCallback, useState } from 'react';

import { IHistory } from 'HistoryTypes';

import {
  useGetHistoriesPresenter,
  useDeleteHistoryPresenter,
  useDeleteAllHistoriesPresenter,
} from 'shared/models';

export function useHistories() {
  const getAllHistoriesPresenter = useGetHistoriesPresenter();
  const deleteAllPresenter = useDeleteAllHistoriesPresenter();
  const deleteHistoryPresenter = useDeleteHistoryPresenter();
  const [data, setData] = useState<IHistory[]>(getAllHistoriesPresenter.data!);

  const $data = data || getAllHistoriesPresenter.data;

  const search = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const histories = getAllHistoriesPresenter.data?.filter((history) =>
        history.searchedTerm.toLowerCase().includes(ev.target.value.toLocaleLowerCase())
      );

      setData(histories!);
    },
    [getAllHistoriesPresenter.data]
  );

  const deleteAHistory = useCallback(
    (id: number) => {
      window.confirm('Are you sure you want to permanently delete this history?') &&
        deleteHistoryPresenter.deleteHistory(id);
    },
    [deleteHistoryPresenter]
  );

  const deleteAll = useCallback(() => {
    window.confirm('Are you sure you want to permanently delete all histories?') &&
      deleteAllPresenter.deleteAllHistories();
  }, [deleteAllPresenter]);

  return { ...getAllHistoriesPresenter, data: $data, search, deleteAHistory, deleteAll };
}
