import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './styles/app.css';
import SearchPage from './components/search_page';
import BooksPage from './components/books_page';

class BooksApp extends Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" component={BooksPage} />
        <Route path="/search" component={SearchPage} />
      </div>
    );
  }
}

export default BooksApp;
