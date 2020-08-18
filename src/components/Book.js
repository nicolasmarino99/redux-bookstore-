import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <tr>
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
  </tr>
);

Book.propTypes = {
  // eslint-disable-next-line no-undef
  id: propTypes.number,
  // eslint-disable-next-line no-undef
  title: propTypes.string,
  category: PropTypes.string,
}.isRequired;

export default Book;
