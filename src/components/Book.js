import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/book/bookSlice';
import './Styles/Books.css';

function Book() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books);

  return (
    <div className="Book-C">
      {books.map((item) => (
        <div className="Single-B" key={item.item_id}>
          <h3>{item.title}</h3>
          <p>{item.author}</p>
          <p>{item.category}</p>
          <button
            className="RemoveBook"
            type="button"
            onClick={() => dispatch(removeBook(item.item_id))}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Book;
