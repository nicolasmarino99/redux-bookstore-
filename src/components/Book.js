import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBook }) => {
  const displayBook = (
    <tr>
      <td>{book.category}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>
        <button type="button">
          Comments
        </button>
      </td>
      <td>
        <button type="button" onClick={() => removeBook(book)}>
          Delete
        </button>
      </td>
      <td>
        <button type="button">
          Edit
        </button>
      </td>
    </tr>
  );

  return (
    displayBook
  );
};

Book.propTypes = {
  book: PropTypes.exact({
    id: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;
