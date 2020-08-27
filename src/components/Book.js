import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => (
  <div className="Book">
    <div className="info">
      <div className="book-info">
        <div className="category">{book.category}</div>
        <div className="title">{book.title}</div>
        <div className="author">{book.author}</div>
      </div>
      <div className="options">
        <button type="button">Comments</button>
        <button type="button" onClick={() => removeBook(book)}>Delete</button>
        <button type="button">Edit</button>
      </div>
    </div>

  </div>
);

Book.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
