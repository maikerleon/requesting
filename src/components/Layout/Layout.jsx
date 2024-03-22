import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='mt-10 mb-10 flex-grow'>
        <div className='flex max-w-6xl min-h-fit pt-[86px] mx-auto p-8 bg-white rounded-lg'>
          <div className='mx-auto w-full'>{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}