import React from 'react';
import './Styles/Books.css'

const AddBook = () => (
  <div className="Book-F">
    <h3>Add New Book</h3>
    <form>
      <input
        type="text"
        placeholder="Enter Book Name"
      />
      <input
        type="text"
        placeholder="Enter Author Name"
      />
      <button className="Add-Book" type="submit"> Add Book </button>
    </form>
  </div>
);

export default AddBook;