import React from 'react';

//  external imports
import { Route, Routes } from 'react-router-dom';

//  internal imports
import Home from '../pages/Home';
import ErrorPage from '../pages/Error';
import Navbar from '../components/Shared/Navbar';
import Footer from '../components/Shared/Footer';
import AddBook from '../components/Books/AddBook';
import EditBook from '../components/Books/EditBook';
import BooksView from '../components/Books/BooksView';

const PageIndex = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/show-books" element={<BooksView />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/edit-book" element={<EditBook />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default PageIndex;
