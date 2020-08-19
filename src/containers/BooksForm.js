import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import categories from '../variables/Categories';
import createBook from '../actions/books';

const mapDispatchProps = dispatch => ({
  addBook: book => {
    dispatch(createBook(book));
  },
});

const BookForm = ({ newBook }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleTextChange = e => setTitle(e.target.value);
  const handleOptionChange = e => setCategory(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const book = { title, category };
    newBook(book);
    setTitle('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value="" name="title" placeholder="Please add a new book" onChange={handleTextChange} />
      <select value="" name="category" required onChange={handleOptionChange}>
        { categories.map(category => <option key={category} value={category}>{category}</option>) }
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

BookForm.propTypes = {
  newBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchProps)(BookForm);
