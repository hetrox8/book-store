import React from 'react';
import AddingBooks from './AddingBooks';
import Book from './Book';
import './Styles/Books.css';

function Books() {
  const AllBooks = [
    {
      id: 1,
      title: '48 Laws of Power',
      author: 'Robert Greene',
      category: 'Personal Development',
    },
    {
      id: 2,
      title: 'Personal Development',
      author: 'Jim Rohn',
      category: 'Personal Development',
    },
  ];
  return (
    <div className="All-B">
      <div className="Book-C">
        {
                      AllBooks.map((item) => (
                        <Book
                          key={item.id}
                          title={item.title}
                          author={item.author}
                          category={item.category}
                        />
                      ))
                  }
      </div>
      <AddingBooks />
    </div>
  );
}

export default Books;
