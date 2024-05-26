import React from 'react';

import { config } from './config';
import { useSearchType } from './useSearchType';

export function Home() {
  const searchType = useSearchType();

  const Page = config[searchType].page;

  return (
    <>
      Welcome Home
      <Page />
    </>
  );
}
