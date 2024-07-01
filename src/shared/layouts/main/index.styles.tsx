import styled from 'styled-components';

import { SearchWidget } from 'shared/components';

import { Container } from '../container/index.layout';

const MainNode = styled(Container)`
  padding: 3rem 1.5rem;
  position: relative;
  margin-top: 120px;
  margin-bottom: 50px;
`;

const SearchWidgetNode = styled(SearchWidget)`
  position: fixed;
  bottom: 1rem;
  right: 0;
  left: 0;
  margin: 0 auto;
`;

export { MainNode, SearchWidgetNode };
