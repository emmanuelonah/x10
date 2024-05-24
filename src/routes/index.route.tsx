import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, NotFound } from 'views';
import { Header, Main } from 'shared/layouts';

import { ROUTES } from './routes';

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.notFound} element={<NotFound />} />
        </Routes>
      </Main>
    </BrowserRouter>
  );
}
