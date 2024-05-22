import React, { useId } from 'react';
import Draggable from 'react-draggable';

import { ArrowRightIcon, ImageIcon } from '@radix-ui/react-icons';

import { useSearchWidgetPresenter } from './useSearchWidget.presenter';
import { Form, ChatBox, ImageInput, ImageInputLabel, SubmitButton } from './index.styles';

type PrimitiveFormPropTypes = React.ComponentPropsWithoutRef<'form'>;
type SearchWidgetElement = React.ElementRef<'form'>;
interface SearchWidgetPropTypes extends PrimitiveFormPropTypes {}

export const SearchWidget = React.forwardRef<SearchWidgetElement, SearchWidgetPropTypes>(
  function SearchWidget(props, forwardedRef) {
    const imgSearchId = useId();
    const formSubmitHandler = useSearchWidgetPresenter();

    return (
      <Draggable>
        <Form {...props} ref={forwardedRef} onSubmit={formSubmitHandler}>
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
          ></ChatBox>
          <ImageInputLabel htmlFor={imgSearchId}>
            <ImageIcon height="30px" width="30px" />
          </ImageInputLabel>
          <ImageInput
            id={imgSearchId}
            type="file"
            name="imgSearch"
            accept="image/*"
            aria-label="Ask question by image"
          />
          <SubmitButton type="submit" aria-label="Submit">
            <ArrowRightIcon />
          </SubmitButton>
        </Form>
      </Draggable>
    );
  }
);
