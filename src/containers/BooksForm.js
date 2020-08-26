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
  const [category, setCategory] = useState('');

  const handleTextChange = e => setTitle(e.target.value);
  const handleOptionChange = e => setCategory(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    e.target.elements.category.value = '';
    const book = {
      id: uuid(),
      title,
      category,
    };
    newBook(book);
    setTitle('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Please add a new book" onChange={handleTextChange} />
      <select name="category" required onChange={handleOptionChange}>
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
