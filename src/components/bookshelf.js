import React from 'react';
import Book from './book';

const Bookshelf = ({ books, bookshelfTitle, bookshelf, onMoveBook }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {bookshelfTitle}
      </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.filter(book => book.shelf === bookshelf).map(book =>
            <li key={book.id}>
              <Book book={book} value={book.shelf} onMoveBook={onMoveBook} />
            </li>
          )}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
