import React, { Component } from 'react';

class Book extends Component {
  render() {
    const { book, onMoveBook, value } = this.props;
    const hasThumbnail = book.imageLinks ? book.imageLinks.smallThumbnail : '';

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${hasThumbnail}")`
            }}
          />
          <div className="book-shelf-changer">
            <select value={value} onChange={(event) => onMoveBook(book, event.target.value)}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">
          {book.title}
        </div>
        <div className="book-authors">
          {book.authors && book.authors.map(author =>
            <p key={author}>
              {author}
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default Book;
