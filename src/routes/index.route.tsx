import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from 'views';
import { Header, Main } from 'shared/layouts';

import { ROUTES } from './routes';

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.searchResult} element={<Home />} />
          <Route path={ROUTES.notFound} element={<Home />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}
