import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'Laws of Human Nature',
      author: 'Robert Greene',
      category: 'Personal Development',
    },
    {
      item_id: 'item2',
      title: 'Personal Development',
      author: 'Jim Rohn',
      category: 'Personal Development',
    },
    {
      item_id: 'item3',
      title: '48 Laws of Power',
      author: 'Robert Greene',
      category: 'Personal  Development',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      state.books = state.books.filter(
        (book) => book.item_id !== action.payload,
      );
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
