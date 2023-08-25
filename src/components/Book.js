import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, deleteBook } from '../redux/books/bookSlice';
import './styles/Books.css';

function Book() {
  const dispatch = useDispatch();
  const booksData = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const books = Object.entries(booksData).flatMap(
    ([key, value]) => value.map((item) => ({ ...item, id: key })),
  );

  async function handleDelete(id) {
    await dispatch(deleteBook(id));
    dispatch(fetchData());
  }

  return (
    <div className="Book-C">
      {books.map((item) => (
        <div className="Single-B" key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.author}</p>
          <p>{item.category}</p>
          <button
            className="RemoveBook"
            type="button"
            onClick={() => handleDelete(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Book;
