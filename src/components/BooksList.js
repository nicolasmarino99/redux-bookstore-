import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { Array } from 'prop-types';
import Book from './Book';

// eslint-disable-next-line react/prop-types
const BookList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {
          // eslint-disable-next-line react/prop-types
          books.map(book => (
            <Book key={book.id} book={book} />
          ))
        }
    </tbody>
  </table>
);
const mapStateTpProps = state => ({
  books: state.books,
});
// eslint-disable-next-line react/no-typos
BookList.PropTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateTpProps, null)(BookList);
