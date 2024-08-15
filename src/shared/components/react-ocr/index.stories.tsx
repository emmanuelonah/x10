import React from 'react';

import { Meta } from '@storybook/react';

import { useOcr } from './ocr-context';
import { OCRFileInput, OCRRoot } from '.';

export default {
  title: 'Components/ReactOCR',
  component: OCRRoot,
} as Meta<typeof OCRRoot>;

const Component = () => {
  const { performOCR, state } = useOcr();
  console.log('OCRFileInput -> state', state);

  return (
    <>
      <label htmlFor="invoiceId">
        Invoice:
        <OCRFileInput id="invoiceId" name="invoice" />
      </label>
      <button
        type="button"
        onClick={() => performOCR('invoice')}
        disabled={!state?.invoice?.selectedImage}
      >
        Perform OCR
      </button>
      ;
    </>
  );
};

export const Primary = () => (
  <OCRRoot>
    <Component />
  </OCRRoot>
);
