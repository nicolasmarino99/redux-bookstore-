/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/books';

const BookList = ({ books, removeBook }) => {
  const booksListArray = Object.values(books);

  return (
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
        { booksListArray.map(book => <Book key={book.id} book={book} removeBook={removeBook} />) }
      </tbody>
    </table>
  );
};

const mapDispatchToProps = dispatch => ({ removeBook: book => dispatch(removeBook(book)) });

const mapStateToProps = state => ({
  books: state.books,
});

BookList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  books: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
