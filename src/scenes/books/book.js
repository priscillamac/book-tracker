import React, { Component } from 'react';

class Book extends Component {
  state = {
    value: ''
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const { book } = this.props;
    const { value } = this.state;
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${book.imageLinks.smallThumbnail}")`
            }}
          />
          <div className="book-shelf-changer">
            <select value={value} onChange={this.handleChange}>
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
        <div>
          Book Shelf: {book.shelf}
        </div>
        <div>
          Book ID: {book.id}
        </div>
        <div className="book-title">
          {book.title}
        </div>
        <div className="book-authors">
          {book.authors.map(author =>
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
