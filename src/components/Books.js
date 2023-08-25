import React from 'react';
import Book from './Book';
import AddBook from './AddBook';
import './styles/Books.css';

function Books() {
  return (
    <div className="All-B">
      <Book />
      <AddBook />
    </div>
  );
}

export default Books;
