import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import css from './Layout.module.css';
import Header from '../Header/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <main className={css.container}>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
          <ToastContainer />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
