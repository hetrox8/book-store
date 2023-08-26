import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="book-store">BookStore</h1>
      <ul>
        <li className="link">
          <Link to="/">Books</Link>
        </li>
        <li className="link">
          <Link className="category-li" to="/Categories">Categories</Link>
        </li>
      </ul>
      <div className="profile-container">
        <img src="https://img.icons8.com/ios-filled/0290ff/20/user.png" alt="user" />
      </div>
    </nav>
  );
}

export default Navbar;
