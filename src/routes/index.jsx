import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BooksView from '../components/Books/BooksView';
import AddBook from '../components/Books/AddBook';
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
          <Route path="/show-books" element={<BooksView />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default PageIndex;
