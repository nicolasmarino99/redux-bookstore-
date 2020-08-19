/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { object } from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/books';

const BookList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>Book ID</th>
        <th>Title</th>
        <th>Category</th>
        <th>options</th>
      </tr>
    </thead>
    <tbody>
      { books.map(book => (<Book key={book.id} book={book} removeBook={removeBook} />)) }
    </tbody>
  </table>
);
const mapDispatchProps = dispatch => ({ removeBook: book => dispatch(removeBook(book)) });

const mapStateTpProps = state => ({
  books: state.books,
});
// eslint-disable-next-line react/no-typos
BookList.PropTypes = {
  books: PropTypes.instanceOf(object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateTpProps, mapDispatchProps)(BookList);
