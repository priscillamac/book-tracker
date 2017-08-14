import React, { Component } from 'react';
import * as BooksAPI from '../../utils/books_api';
import Book from './book';

class BookShelf extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  render() {
    const { shelfLabel, shelf } = this.props;
    const { books } = this.state;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {shelfLabel}
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(
              book =>
                book.shelf === shelf &&
                <li key={book.id}>
                  <Book book={book} />
                </li>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
