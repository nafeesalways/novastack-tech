import React from 'react';

import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/shared/Footer';

// Layout wrapper to ensure Navbar and Footer are present on all pages
const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        {/* Outlet renders the current child route */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;