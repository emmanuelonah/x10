import React from 'react';

import { SearchInput } from './index.styles';

type SearchBoxPropTypes = {
  onSearch: React.ChangeEventHandler<HTMLInputElement>;
};

export function SearchBox(props: SearchBoxPropTypes) {
  return <SearchInput type="search" placeholder="Search history..." onChange={props.onSearch} />;
}
