/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import Navbar from '../components/Navbar';
import { removeBook, changeFilter } from '../actions';

// eslint-disable-next-line object-curly-newline
const BookList = ({ books, removeBook, changeFilter, filter }) => {
  const handleFilter = e => changeFilter(e.target.value);
  const filterArray = () => {
    const booksArray = Object.values(books);
    if (filter === 'All') { return booksArray; }
    return booksArray.filter(book => book.category === filter);
  };
  return (
    <>
      <Navbar categoryFilterHandler={handleFilter} />
      <div id="books-container">
        <div id="books">
          { filterArray().map(book => <Book key={book.id} book={book} removeBook={removeBook} />) }
        </div>
      </div>  
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

BookList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  books: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
