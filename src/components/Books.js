import React from 'react';
import Book from './Book';
import AddBook from './AddBook';
import './Styles/Books.css';

function Books() {
  return (
    <div className="All-B">
      <Book />
      <AddBook />
    </div>
  );
}

export default Books;
