import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './styles/app.css';
import SearchPage from './components/search_page';
import BooksPage from './components/books_page';
import * as BooksAPI from './utils/books_api';

class BooksApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };

    this.updateBook = this.updateBook.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  updateBook = (book, newShelf) => {
    book.shelf = newShelf;
    BooksAPI.update(book, newShelf);
    this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      })
    );
  };

  render() {
    const { books} = this.state;

    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() =>
            <BooksPage updateBook={this.updateBook} books={books} />}
        />

        <Route
          path="/search"
          render={() =>
            <SearchPage
              updateBook={this.updateBook}
            />}
        />
      </div>
    );
  }
}

export default BooksApp;
