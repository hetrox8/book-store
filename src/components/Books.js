import React from 'react';
import Book from './Book';
import AddBook from './AddBook';
import './Styles/Books.css';

function Books() {
  return (
    <div className="all-books">
      <Book />
      <div className="third-line" />
      <AddBook />
    </div>
  );
}

export default Books;
