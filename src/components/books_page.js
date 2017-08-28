import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../utils/books_api';
import Bookshelf from './bookshelf';

class BooksPage extends Component {
  state = {
    books: [],
    showSuccessMessage: false
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
    const { books } = this.state;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf
              books={books}
              onMoveBook={this.updateBook}
              bookshelfTitle="Currently Reading"
              bookshelf="currentlyReading"
            />
            <Bookshelf
              books={books}
              onMoveBook={this.updateBook}
              bookshelfTitle="Want To Read"
              bookshelf="wantToRead"
            />
            <Bookshelf
              books={books}
              onMoveBook={this.updateBook}
              bookshelfTitle="Read"
              bookshelf="read"
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
