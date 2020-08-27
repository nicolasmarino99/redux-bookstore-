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
        <div id="filter">
          <div id="Bookstore-CMS">Bookstore-CMS</div>
          <div id="BOOKS">BOOKS</div>
          <div id="FILTER"><CategoryFilter handleOptionChange={handleFilter} /></div>
        </div>
        <div id="Oval">
            <svg id="profile-img" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
        </div>

      </nav>
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
