import React from 'react';

import { useOcr } from './ocr-context';

type PrimitiveInputProps = React.ComponentPropsWithoutRef<'input'>;
type OCRElement = React.ElementRef<'input'>;
interface OCRFileInputPropTypes extends Omit<PrimitiveInputProps, 'name'> {
  name: string;
}

export const OCRFileInput = React.forwardRef<OCRElement, OCRFileInputPropTypes>(
  function OCRComponent({ name, ...restProps }, forwardedRef) {
    const { onImageChange } = useOcr();

    return <input {...restProps} ref={forwardedRef} type="file" onChange={onImageChange(name)} />;
  }
);
