import React from 'react'; // Make sure to import React
import { Routes, Route } from 'react-router-dom';
import Book from './components/Books';
import Navbar from './components/Navbar';
import Categories from './components/Categories'; // Update component name to uppercase

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/categories" element={<Categories />} />
        {' '}
        {/* Use uppercase component name */}
      </Routes>
    </div>
  );
}

export default App;
