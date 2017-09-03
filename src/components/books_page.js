import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './bookshelf';

class BooksPage extends Component {
  render() {
    const { books, updateBook } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              books={books.filter(book => book.shelf === 'currentlyReading')}
              onMoveBook={updateBook}
              bookshelfTitle="Currently Reading"
            />
            <Bookshelf
              books={books.filter(book => book.shelf === 'wantToRead')}
              onMoveBook={updateBook}
              bookshelfTitle="Want To Read"
            />
            <Bookshelf
              books={books.filter(book => book.shelf === 'read')}
              onMoveBook={updateBook}
              bookshelfTitle="Read"
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default BooksPage;
