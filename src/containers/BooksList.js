/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import CategoryFilter from '../components/CategoryFilter';
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
      <nav>
        <div>
          <div id="Bookstore-CMS">Bookstore-CMS</div>
          <div>BOOKS</div>
          <div><CategoryFilter handleOptionChange={handleFilter} /></div>
        </div>
        <div id="Oval">
          <div id="profile-img" />
        </div>

      </nav>

      { filterArray().map(book => <Book key={book.id} book={book} removeBook={removeBook} />) }
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
