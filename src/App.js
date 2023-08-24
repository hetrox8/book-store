import React from 'react'; // Make sure to import React
import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/Store';
import Book from './components/Books';
import Navbar from './components/Navbar';
import Categories from './components/Categories'; // Update component name to uppercase

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Book />} />
        <Route path="/categories" element={<Categories />} />
        {' '}
        {/* Use uppercase component name */}
      </Routes>
    </Provider>
  );
}

export default App;
