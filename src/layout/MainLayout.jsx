import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
  
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='container grow mx-auto p-10 max-w-3xl'>
        <Outlet />
        {/* Placeholder for the injected Component from Router */}
      </main>

      <Footer  />
    </div>
  );
};

export default MainLayout;
