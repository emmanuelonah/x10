/**
 * We use RadixUI and Styled-components together.
 * In a situation where we need to style a Radix primitive,
 * we then integrate it with the styled component like shown below:
 * ```ts
 * import styled from 'styled-components';
 * import * as Accordion from '@radix-ui/react-accordion';
 *
 * const AccordionRoot = styled(Accordion.Root)`
 *  background-color: red;
 * `;
 * const AccordionItem = styled(Accordion.Item)`
 *  background-color: pink;
 * `;
 * const AccordionTrigger = styled(Accordion.Trigger)`
 *  background-color: green;
 * `;
 * const AccordionContent = styled(Accordion.Content)`
 *   color: orange;
 * `;
 *
 * export default function Home() {
 *   return (
 *     <AccordionRoot type="single" defaultValue="item-1" collapsible>
 *      <AccordionItem value="item-1">
 *        <AccordionTrigger>Is it accessible?</AccordionTrigger>
 *        <AccordionContent>
 *          Yes. It adheres to the WAI-ARIA design pattern.
 *        </AccordionContent>
 *      </AccordionItem>
 *    </AccordionRoot>
 *  );
 *}
 *
 * ```
 */

import styled, { createGlobalStyle } from 'styled-components';

import { designTokens } from './design-tokens';

const theme = {
  colors: designTokens.colors,
  typography: designTokens.typography,
};

export type Theme = Record<'theme', typeof theme>;

const SkipToMainContent = styled.a`
  background-color: ${({ theme }) => theme.colors.warning400};
  border: solid 0.0625rem ${({ theme }) => theme.colors.dark400};
  border-radius: ${({ theme }) => theme.typography.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.bodyText.fontSize};
  padding: 0.5rem;
  position: absolute;
  left: 0;
  top: -300px;
  z-index: ${({ theme }) => theme.typography.zIndexes.max};
  transition: top 0.5s ease-out;
  outline: none;

  &:focus {
    position: absolute;
    left: 0;
    top: 0;
    transition: top 0.3s ease-out;
  }
`;

const GlobalStyles = createGlobalStyle<Theme>`
    *, 
    *::before, 
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body {
        color: ${({ theme }) => theme.colors.neutral200};
        font-family: ${({ theme }) => theme.typography.fontFamilies.primary};
        font-size: ${({ theme }) => theme.typography.bodyText.fontSize};
        font-weight: ${({ theme }) => theme.typography.bodyText.fontWeight};
        line-height: ${({ theme }) => theme.typography.lineHeight.xs};
        text-rendering: optimizeLegibility;
        scroll-behavior: smooth;
        width: 100%;
        height: 100%;
        position: relative;
    }

    body {
        background-color: ${({ theme }) => theme.colors.dark400};
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
    }

    body main#main {
        flex-grow: 1;
    }

    h1, h2, h3, h4, h5, h6 {
        margin-bottom: ${({ theme }) => theme.typography.lineHeight.md};
    }

    img {
        max-width: 100%;
        display: block;
        height: auto;
    }

    ul, ol {
        list-style: none;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    select,
    button,
    [type="submit"],
    [type="reset"],
    [type="button"]{
        cursor: pointer;
        &:disabled{
            opacity: 0.5;
            cursor: not-allowed;
        }
    }

    input[type='color'],
    input[type='date'],
    input[type='datetime'],
    input[type='datetime-local'],
    input[type='email'],
    input[type='month'],
    input[type='number'],
    input[type='password'],
    input[type='search'],
    input[type='tel'],
    input[type='text'],
    input[type='time'],
    input[type='url'],
    input[type='week'],
    select:focus,
    textarea {
        font-size: 1rem;
    }


    /**
     * Override the default style of storybook tool
     */
    .sb-show-main.sb-main-padded {
        padding:0 !important;
   
    }
`;

export { SkipToMainContent, GlobalStyles, theme };
