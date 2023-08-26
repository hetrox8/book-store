import React from 'react';
import Book from './Book';
import AddBook from './AddBook';
import './Styles/Books.css';

function Books() {
  return (
    <div className="AllBooks">
      <Book />
      <div className="ThirdLine" />
      <AddBook />
    </div>
  );
}

export default Books;
