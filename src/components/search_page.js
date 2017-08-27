import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../utils/books_api';
import Book from './book';

class SearchPage extends Component {
  state = {
    query: '', // what the user types in input
    searchResults: [],
    books: []
  };

  updateQuery = (query) => {
    this.setState({ query });

    if (query === '') {
      this.setState({ searchResults: [] })
    } else {
      BooksAPI.search(query).then((searchResults) => {
        this.setState({ searchResults });
      });
    }

  }
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
    const { query, searchResults } = this.state;
    const hasSearchResults = searchResults.length;

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
            <p>
              Showing results for: "{query}"
            </p>}
          <ol className="books-grid">
            {hasSearchResults && searchResults.map((book) =>
              <li key={book.id}>
                <Book book={book} onMoveBook={this.updateBook} value="none"/>
              </li>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
