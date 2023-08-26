import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { deleteBook, fetchData } from '../redux/books/bookSlice';
import 'react-circular-progressbar/dist/styles.css'; // Note the lowercase 'styles' here

import './Styles/Books.css';

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
    <div className="book-card">
      {books.map((item) => {
        const randomProgress = Math.floor(Math.random() * 101);
        return (
          <div className="single-book" key={item.id}>
            <div className="book-details-container">
              <div className="details">
                <p className="category">{item.category}</p>
                <h3 className="title">{item.title}</h3>
                <p className="author">{item.author}</p>
              </div>
              <div className="button-container">
                <p>comments</p>
                <div className="Line" />
                <button type="button" className="remove-button" onClick={() => handleDelete(item.id)}>
                  Remove
                </button>
                <div className="line" />
                <p>edit</p>
              </div>
            </div>
            <div className="progress-bar-container">
              <CircularProgressbar
                className="progress-result"
                value={randomProgress}
                styles={buildStyles({
                  textColor: '#000',
                  trailColor: '#d6d6d6',
                })}
              />
              <div className="progress-bar">
                <p className="percent">
                  {randomProgress}
                  %
                </p>
                <p className="text">completed</p>
              </div>
            </div>
            <div className="SecondLine" />
            <div className="chapter">
              <p className="current-chapter">Current Chapter</p>
              <p className="chapter-number">Chapter 17</p>
              <button type="submit">Update Progress</button>
            </div>
          </div>
        );
      })}

    </div>
  );
}

export default Book;
