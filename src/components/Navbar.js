import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>BookStore</h1>
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/Categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
