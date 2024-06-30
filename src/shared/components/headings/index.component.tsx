import styled, { css } from 'styled-components';

const sharedHeadingStyles = css`
  white-space: pre-wrap;
  word-break: break-all;
`;

const Heading1 = styled.h1`
  color: ${({ theme }) => theme.colors.secondary400};
  font-weight: ${({ theme }) => theme.typography.title1.fontWeight};
  font-size: ${({ theme }) => theme.typography.title1.fontSize};
  line-height: ${({ theme }) => theme.typography.lineHeight.xxs};
  ${sharedHeadingStyles}
`;

const Heading2 = styled.h2`
  color: ${({ theme }) => theme.colors.secondary400};
  font-weight: ${({ theme }) => theme.typography.title2.fontWeight};
  font-size: ${({ theme }) => theme.typography.title2.fontSize};
  line-height: ${({ theme }) => theme.typography.lineHeight.xxs};
  ${sharedHeadingStyles}
`;

const Heading3 = styled.h3`
  color: ${({ theme }) => theme.colors.secondary400};
  font-weight: ${({ theme }) => theme.typography.title3.fontWeight};
  font-size: ${({ theme }) => theme.typography.title3.fontSize};
  line-height: ${({ theme }) => theme.typography.lineHeight.xxs};
  ${sharedHeadingStyles}
`;

const Heading4 = styled.h4`
  color: ${({ theme }) => theme.colors.secondary400};
  font-weight: ${({ theme }) => theme.typography.bodyText.fontWeight};
  font-size: ${({ theme }) => theme.typography.bodyText.fontSize};
  line-height: ${({ theme }) => theme.typography.lineHeight.xxs};
  ${sharedHeadingStyles}
`;

export { Heading1, Heading2, Heading3, Heading4 };
