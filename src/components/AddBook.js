import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookToApi, fetchData } from '../redux/books/bookSlice';
import './styles/Books.css';

function AddBook() {
  // ... (rest of your component code)

  return (
    <div className="BookForm">
      <h3>Add New Book</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Book Name"
          value={title}
          onChange={handleTitleChange}
        />
        <input
          type="text"
          placeholder="Enter Author Name"
          value={author}
          onChange={handleAuthorChange}
        />
        <button className="AddBook" type="submit">
          Add Book
        </button>
      </form>
    </div>
  );
}

export default AddBook;

// Newline at the end of the file
