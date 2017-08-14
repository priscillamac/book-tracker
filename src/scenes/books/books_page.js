import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './book_shelf';
import * as BooksAPI from '../../utils/books_api';

class BooksPage extends Component {
  state = {
    books: ''
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  renderBookShelves() {
    return (
      <div>
        <BookShelf shelfLabel="Currently Reading" shelf="currentlyReading" />
        <BookShelf shelfLabel="Want To Read" shelf="wantToRead" />
        <BookShelf shelfLabel="Read" shelf="read" />
      </div>
    );
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {this.renderBookShelves()}
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
