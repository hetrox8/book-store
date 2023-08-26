import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookToApi, fetchData } from '../redux/books/bookSlice';
import './Styles/Books.css';

function AddBook() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Category');
  const dispatch = useDispatch();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && category) {
      const newBook = {
        item_id: Date.now(),
        author: 'J.K Rolling',
        title,
        category,
      };
      dispatch(addBookToApi(newBook)).then(() => {
        dispatch(fetchData());
      });
      setTitle('');
      setCategory('Category');
    }
  };

  return (
    <div className="book-form">
      <h3 className="book-title">Add New Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Book Name"
          value={title}
          onChange={handleTitleChange}
        />
        <select className="category-list" value={category} onChange={handleCategoryChange}>
          <option value="Category">Category</option>
          <option value="fictional">Fictional</option>
          <option value="horror">Horror</option>
          <option value="adventure">Adventure</option>
        </select>
        <button className="add-book" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;
