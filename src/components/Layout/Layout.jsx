import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import ScrollToTopButton from 'components/ScrollToTopButton';

import Footer from 'components/Footer';
import ThemeToggler from 'components/ThemeToggler';

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav id="nav">
          <ul className={css.navList}>
            <li>
              <NavLink
                className={css.link}
                style={({ isActive }) => {
                  return {
                    color: isActive && 'white',
                    backgroundColor: isActive && '#3470ff',
                  };
                }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={css.link}
                style={({ isActive }) => {
                  return {
                    color: isActive && 'white',
                    backgroundColor: isActive && '#3470ff',
                  };
                }}
                to="/catalog"
              >
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink
                className={css.link}
                style={({ isActive }) => {
                  return {
                    color: isActive && 'white',
                    backgroundColor: isActive && '#3470ff',
                  };
                }}
                to="/favorites"
              >
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
        <ThemeToggler />
      </header>
      <main className={css.main}>
        <Suspense>
          <Outlet />
        </Suspense>
        <ScrollToTopButton />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
