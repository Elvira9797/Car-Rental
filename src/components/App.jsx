import { lazy } from 'react';
import NotFoundPage from 'pages/NotFoundPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import { MantineProvider } from '@mantine/core';
import theme from 'theme';
import '@mantine/core/styles.css';

const HomePage = lazy(() => import('pages/HomePage'));
const CatalogCarsPage = lazy(() => import('pages/CatalogCarsPage'));
const FavoriteCarsPage = lazy(() => import('pages/FavoriteCarsPage'));

export const App = () => {
  return (
    <MantineProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogCarsPage />} />
          <Route path="favorites" element={<FavoriteCarsPage />}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MantineProvider>
  );
};
