import React from 'react';

import { useSearchWidgetContext } from 'shared/components';

import { QuestionWidget, QuestionWrapper, AnswerWrapper, AnswerWidget } from './view.style';

export function TextEngineView() {
  const { searchQuery } = useSearchWidgetContext();

  const isValidQuery = !!searchQuery.trim().length;

  return (
    <div data-testid="textEngineView">
      {isValidQuery && (
        <QuestionWrapper>
          <QuestionWidget>{searchQuery}</QuestionWidget>
        </QuestionWrapper>
      )}
      {isValidQuery && (
        <AnswerWrapper>
          <AnswerWidget>Realtime answer coming soon</AnswerWidget>
        </AnswerWrapper>
      )}
    </div>
  );
}
