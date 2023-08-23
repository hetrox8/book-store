import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

const BooksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    AddBook: (state, action) => {
      state.books.push(action.payload);
    },
    RemoveBook: (state, action) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { AddBook, RemoveBook } = BiquadFilterNodeooksSlice.actions;
export default BooksSlice.reducer;