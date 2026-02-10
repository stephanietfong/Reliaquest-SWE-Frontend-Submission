import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { PokemonListPage } from './screens/PokemonListPage';
import { LayoutWrapper } from './LayoutWrapper';
import { HomePage } from './screens/HomePage';
import { DetailsPage } from './screens/DetailsPage';

export const App = () => {
  const location = useLocation();
  const state = location.state as { background?: Location };

  return (
    <>
      <Routes location={state?.background || location}>
        <Route path="/" element={<LayoutWrapper />}>
          <Route index element={<HomePage />} />
          <Route path="list" element={<PokemonListPage />} />
          <Route path="list/:id" element={<DetailsPage />} />
        </Route>
      </Routes>

      {state?.background && (
        <Routes>
          <Route path="list/:id" element={<DetailsPage />} />
        </Routes>
      )}
    </>
  );
};

export default App;
