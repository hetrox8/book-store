import AddBook from './AddBook';
import BooksList from './BooksList';

function BooksPage() {
  return (
    <div className="books-page">
      <BooksList />
      <hr />
      <AddBook />
    </div>
  );
}

export default BooksPage;
