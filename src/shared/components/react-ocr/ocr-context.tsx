import React from 'react';

import { createContext } from 'shared/utils';

import { useOcrContextValues, Logger, ContextType } from './useOcrContextValues';

const [OCRProvider, useOcr] = createContext<ContextType>('OCRContext');

type OCRRootPropTypes = {
  lang?: string;
  logger?: Logger;
  children: React.ReactNode;
};

function OCRRoot({ lang = 'eng', logger, children }: OCRRootPropTypes) {
  const values = useOcrContextValues(lang, logger);

  return <OCRProvider value={values}>{children}</OCRProvider>;
}

export { OCRRoot, useOcr };
