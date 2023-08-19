import React from 'react';
import PropTypes from 'prop-types';
import './Styles/Books.css';

function Book({ title, category, author }) {
  return (
    <div className="Single-B">
      <h3>{title}</h3>
      <p>{author}</p>
      <p>{category}</p>
      <button className="RemoveBook" type="button">Remove</button>
    </div>
  );
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
