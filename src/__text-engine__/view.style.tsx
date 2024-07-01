import styled, { css } from 'styled-components';

const sharedWidgetStyles = css`
  padding: 10px;
  border-radius: 8px;
  max-width: 80%;
  margin: 5px 0;
`;

const QuestionWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const QuestionWidget = styled.p`
  background-color: ${({ theme }) => theme.colors.neutral400};
  color: ${({ theme }) => theme.colors.white400};
  ${sharedWidgetStyles}
`;

const AnswerWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const AnswerWidget = styled.p`
  background-color: ${({ theme }) => theme.colors.white400};
  color: ${({ theme }) => theme.colors.dark500};
  ${sharedWidgetStyles}
`;

export { QuestionWrapper, QuestionWidget, AnswerWrapper, AnswerWidget };
