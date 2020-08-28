import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { uuid } from 'uuidv4';
import categories from '../variables/Categories';
import { createBook } from '../actions';

const mapDispatchProps = dispatch => ({
  newBook: book => {
    dispatch(createBook(book));
  },
});

const BookForm = ({ newBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [currentPage, setCurrentPage] = useState('');
  const [totalPages, setTotalPages] = useState('');

  const handleTextChange = e => setTitle(e.target.value);
  const handleAuthorTextChange = e => setAuthor(e.target.value);
  const handleOptionChange = e => setCategory(e.target.value);
  const handleCurrentNumber = e => setCurrentPage(e.target.value);
  const handleTotalNumber = e => setTotalPages(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    e.target.elements.category.value = '';
    const book = {
      id: uuid(),
      title,
      category,
      author,
      totalPages,
      currentPage,
    };
    newBook(book);
    setTitle('');
    setCategory('');
  };

  return (
    <div id="BooksForm">
      <h1>ADD NEW BOOK</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Book title" required onChange={handleTextChange} />
        <input type="text" name="title-author" placeholder="Book author" required onChange={handleAuthorTextChange} />
        <select name="category" required onChange={handleOptionChange}>
          <option value="Categories" selected disabled hidden>Categories</option>
          { categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input type="number" name="current-page" placeholder="Current page" required onChange={handleCurrentNumber} />
        <input type="number" name="total-pages" placeholder="Total pages" required onChange={handleTotalNumber} />
        <button id="submit" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  newBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchProps)(BookForm);
