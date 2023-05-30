import React from 'react';
import css from './Layout.module.css';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={css.container}>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
