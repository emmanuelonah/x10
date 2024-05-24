import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from 'shared/layouts';
import { Home, NotFound } from 'views';

import { ROUTES } from './routes';

export function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.notFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
