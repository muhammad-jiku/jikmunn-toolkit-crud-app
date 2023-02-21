//  external import
import { configureStore } from '@reduxjs/toolkit';

//  internal import
import booksReducer from '../features/Books/BooksSlice';

const store = configureStore({
  reducer: {
    booksReducer: booksReducer,
  },
});

export default store;
