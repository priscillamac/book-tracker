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

  updateBook = (book, newShelf) => {
    book.shelf = newShelf;
    BooksAPI.update(book, newShelf).then(
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }))
    );
  };

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
            {books.filter(book => book.shelf === shelf).map(book =>
              <li key={book.id}>
                <Book book={book} onMoveBook={this.updateBook} />
              </li>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
