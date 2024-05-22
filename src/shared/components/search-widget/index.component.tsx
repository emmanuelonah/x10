import React from 'react';

import Draggable from 'react-draggable';

import { ArrowRightIcon } from '@radix-ui/react-icons';

import { Form, ChatBox, /* ImageInput, */ SubmitButton } from './index.styles';

type PrimitiveFormPropTypes = React.ComponentPropsWithoutRef<'form'>;
type SearchWidgetElement = React.ElementRef<'form'>;
interface SearchWidgetPropTypes extends PrimitiveFormPropTypes {}

export const SearchWidget = React.forwardRef<SearchWidgetElement, SearchWidgetPropTypes>(
  function SearchWidget(props, forwardedRef) {
    return (
      <Draggable>
        <Form {...props} ref={forwardedRef}>
          <ChatBox
            name="textSearch"
            aria-label="Ask a question"
            placeholder="Ask a question"
            autoCapitalize="off"
            autoCorrect="on"
            spellCheck="false"
            autoComplete="off"
            tabIndex={0}
            rows={1}
          ></ChatBox>
          {/*         <ImageInput
          type="file"
          name="imgSearch"
          aria-label="Ask question by image"
          accept="image/*"
        /> */}
          <SubmitButton type="submit" aria-label="Submit">
            <ArrowRightIcon />
          </SubmitButton>
        </Form>
      </Draggable>
    );
  }
);
