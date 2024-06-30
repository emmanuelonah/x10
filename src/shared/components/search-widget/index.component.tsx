import React, { useId, useRef } from 'react';
import { ArrowRightIcon, ImageIcon } from '@radix-ui/react-icons';

import { useComposeRefs } from 'shared/hooks';

import { useSearchWidgetContext } from '.';
import { useSearchWidgetPresenter } from './useSearchWidget.presenter';
import { Form, ChatBox, ImageInput, ImageInputLabel, SubmitButton } from './index.styles';

type PrimitiveFormPropTypes = React.ComponentPropsWithoutRef<'form'>;
type SearchWidgetElement = React.ElementRef<'form'>;
interface SearchWidgetPropTypes extends Omit<PrimitiveFormPropTypes, 'onSubmit'> {
  onSubmit?<P>(formData: Record<string, FormDataEntryValue>): Promise<P>;
}

export const SearchWidget = React.forwardRef<SearchWidgetElement, SearchWidgetPropTypes>(
  function SearchWidget(props, forwardedRef) {
    const imgSearchId = useId();
    const formRef = useRef<HTMLFormElement>(null);
    const composedRefs = useComposeRefs<HTMLFormElement>(formRef, forwardedRef);
    const formSubmitHandler = useSearchWidgetPresenter(formRef, props.onSubmit);
    const { searchQuery, handleImageChange, handleSearchQueryChange } = useSearchWidgetContext();

    return (
      <Form {...props} ref={composedRefs} onSubmit={formSubmitHandler}>
        <ChatBox
          name="textSearch"
          autoCorrect="on"
          spellCheck="false"
          autoComplete="off"
          autoCapitalize="off"
          aria-label="Ask a question"
          placeholder="Ask a question"
          tabIndex={0}
          rows={1}
          value={searchQuery}
          onChange={handleSearchQueryChange}
        ></ChatBox>
        <ImageInputLabel htmlFor={imgSearchId}>
          <ImageIcon height="25px" width="25px" />
        </ImageInputLabel>
        <ImageInput
          id={imgSearchId}
          type="file"
          name="imgSearch"
          accept="image/*"
          aria-label="Ask question by image"
          onChange={handleImageChange}
        />
        <SubmitButton type="submit" aria-label="Submit">
          <ArrowRightIcon height="25px" width="25px" />
        </SubmitButton>
      </Form>
    );
  }
);
