import { useParams } from 'react-router-dom';

import { config } from './config';

export type Type = keyof typeof config;

type Params = { searchType: Type };

export function useSearchType() {
  const params = useParams<Params>();

  return config[params.searchType as Type] ? (params.searchType as Type) : 'textSearch';
}
