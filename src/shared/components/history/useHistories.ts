import { useCallback, useState } from 'react';

import { IHistory } from 'HistoryTypes';

import { useGetHistoriesPresenter } from 'shared/models';

export function useHistories() {
  const presenter = useGetHistoriesPresenter();
  const [data, setData] = useState<IHistory[]>(presenter.data!);

  const $data = data || presenter.data;

  const search = useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      const histories = presenter.data?.filter((history) =>
        history.searchedTerm.toLowerCase().includes(ev.target.value.toLocaleLowerCase())
      );

      setData(histories!);
    },
    [presenter.data]
  );

  return { ...presenter, data: $data, search };
}
