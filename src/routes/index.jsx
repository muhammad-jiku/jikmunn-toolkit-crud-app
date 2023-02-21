import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Shared/Footer';
import Navbar from '../components/Shared/Navbar';
import ErrorPage from '../pages/Error';
import Home from '../pages/Home';

const PageIndex = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default PageIndex;
