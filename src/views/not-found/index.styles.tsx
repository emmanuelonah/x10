import styled from 'styled-components';

import { Heading1 } from 'shared/components';

const Container = styled.div`
  color: ${({ theme }) => theme.colors.neutral200};
  text-align: center;
`;

const Heading = styled(Heading1)`
  color: ${({ theme }) => theme.colors.neutral400};
`;

const Paragraph1 = styled.p`
  color: ${({ theme }) => theme.colors.warning200};
  font-size: ${({ theme }) => theme.typography.title3.fontSize};
  font-family: 'Shadows Into Light', cursive;
  padding: 1rem 0;
`;

const Paragraph2 = styled.p`
  padding-bottom: 1rem;
`;

const GoHome = styled.button`
  margin: 1rem auto;
  background-color: transparent;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.neutral200};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  & span {
    display: inline-block;
    padding-left: 0.5rem;
  }
`;

const ImgWorry = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
`;

export { Container, Heading, Paragraph1, Paragraph2, GoHome, ImgWorry };
