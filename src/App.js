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
      books: [],
      query: '', // what the user types in input
      searchResults: [],
      showNoResultsMessage: false
    };

    this.updateBook = this.updateBook.bind(this);
    this.updateQuery = this.updateQuery.bind(this);
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

  updateQuery = query => {
    this.setState({ query });

    if (query === '') {
      this.setState({ searchResults: [], showNoResultsMessage: false });
    } else {
      BooksAPI.search(query).then(searchResults => {
        this.setState({ searchResults, showNoResultsMessage: true });
      });
    }
  };

  render() {
    const { books, query, searchResults, showNoResultsMessage } = this.state;

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
              onSearchChange={this.handleSearchChange}
              updateBook={this.updateBook}
              query={query}
              onUpdateQuery={this.updateQuery}
              searchResults={searchResults}
              showNoResultsMessage={showNoResultsMessage}
            />}
        />
      </div>
    );
  }
}

export default BooksApp;
