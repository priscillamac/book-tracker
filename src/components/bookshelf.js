import React, { Component } from 'react';
import Book from './book';

class Bookshelf extends Component {
  render() {
    const { books, onMoveBook, bookshelf, bookshelfTitle} = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{bookshelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books
              .filter(book => book.shelf === bookshelf)
              .map(book =>
                <li key={book.id}>
                  <Book
                    book={book}
                    value={book.shelf}
                    onMoveBook={onMoveBook}
                  />
                </li>
              )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf;
