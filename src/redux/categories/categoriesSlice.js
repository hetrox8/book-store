import { createSlice } from '@reduxjs/toolkit';

const initialState = {
<<<<<<< HEAD
  status: [],
=======
  books: [],
>>>>>>> parent of f4709e6 (fix review changes)
};

const BooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
<<<<<<< HEAD
    getStatus: (state, action) => {
      state.status = !action.payload ? ['Under construction'] : [];
=======
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
>>>>>>> parent of f4709e6 (fix review changes)
    },
  },
});

<<<<<<< HEAD
export const { getStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
=======
export const { addBook, removeBook } = BooksSlice.actions;
export default BooksSlice.reducer;
>>>>>>> parent of f4709e6 (fix review changes)
