import React, { Component } from 'react';
import { Route } from 'react-router-dom';
// import * as BooksAPI from './utils/books_api';
import './styles/app.css';
import SearchPage from './scenes/search/search_page';
import BooksPage from './scenes/books/books_page';

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={BooksPage} />
        <Route path="/search" component={SearchPage} />
      </div>
    )
  }
}

export default BooksApp;
