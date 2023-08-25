import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/bookSlice.js';
import categoriesReducer from './categories/categoriesSlice.js';

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
