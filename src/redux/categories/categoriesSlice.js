import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      id: 1,
      title: '48 Laws of Power',
      author: 'Robert Greene',
      category: 'Personal Development',
    },
    {
      id: 2,
      title: 'Personal Development',
      author: 'Jim Rohn',
      category: 'Personal Development',
    },
  ],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: () => 'Under construction',
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
