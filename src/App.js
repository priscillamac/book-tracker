import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './utils/books_api';
import './styles/app.css';
import SearchPage from './scenes/search/search_page';
import ListBooks from './scenes/books/list_books';

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={ListBooks} />
        <Route path="/search" component={SearchPage} />
      </div>
    )
  }
}

export default BooksApp;
