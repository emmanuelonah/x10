import { useState, useMemo, useCallback } from 'react';

import { createContext } from 'shared/utils';

type SearchWidgetContextType = {
  searchQuery: string;
  searchImage: string;
  resetSearch(): void;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchQueryChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const [SearchWidgetProvider, useSearchWidgetContext] =
  createContext<SearchWidgetContextType>('SearchWidgetContext');

type SearchWidgetPropTypes = {
  children: React.ReactNode;
};

function SearchWidgetStore(props: SearchWidgetPropTypes) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchImage, setSearchImage] = useState<string>('');

  const resetSearch = useCallback(() => {
    setSearchQuery('');
    setSearchImage('');
  }, []);

  const handleSearchQueryChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSearchQuery(event.target.value);
  }, []);

  const handleImageChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = function () {
        setSearchImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const values = useMemo<SearchWidgetContextType>(
    () => ({
      searchQuery,
      searchImage,
      resetSearch,
      handleImageChange,
      handleSearchQueryChange,
    }),
    [searchQuery, searchImage, resetSearch, handleImageChange, handleSearchQueryChange]
  );

  return <SearchWidgetProvider value={values}>{props.children}</SearchWidgetProvider>;
}

export { SearchWidgetStore, useSearchWidgetContext };
