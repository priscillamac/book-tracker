import React, { Component } from 'react';
import * as BooksAPI from '../../utils/books_api';
// import BookList from './book_list';

class BookShelf extends Component {
  state = {
    books: [],
    bookStatuses: ['currentlyReading', 'wantToRead', 'read']
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    });
  }

  render() {
    return (
      <div>
        {this.state.bookStatuses.map((bookStatus) => (
          <div className="bookshelf">
            <h2 className="bookshelf-title">{bookStatus}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {this.state.books.map((book) => (
                    book.shelf === bookStatus && (
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${book.imageLinks.smallThumbnail}")` }}></div>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div>{book.shelf}</div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">
                            {book.authors.map((author) => (
                              <p key={author}>{author}</p>
                            ))}
                          </div>
                        </div>
                      </li>
                    )
                  ))}
                </ol>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default BookShelf;
