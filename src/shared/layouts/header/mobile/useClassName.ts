import { useSearchType, Type } from 'views/home/useSearchType';

export function useClassName() {
  const searchType = useSearchType();

  return function (type: Type) {
    return type === searchType ? 'active' : 'inactive';
  };
}
