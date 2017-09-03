import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from './book';
import * as BooksAPI from '../utils/books_api';

class SearchPage extends Component {
  state = {
    query: '',
    searchResults: [],
    showNoResultsMessage: false
  }

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
    const { query, searchResults, showNoResultsMessage } = this.state;
    const { updateBook } = this.props;
    const hasSearchResults = searchResults.length > 0;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              value={query}
              placeholder="Search by title or author"
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {query &&
            <p className="text-center">
              Showing results for: "{query}"
            </p>}
          <ol className="books-grid">
            {hasSearchResults &&
              searchResults.map(book =>
                <li key={book.id}>
                  <Book
                    book={book}
                    value={book.shelf}
                    onMoveBook={updateBook}
                  />
                </li>
              )}
            {!hasSearchResults &&
              showNoResultsMessage &&
              <p>No results found</p>}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
