import React, { useState } from 'react';
import categories from '../variables/Categories';

const BookForm = ({ book }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleTextChange = e => setTitle(e.target.value);
  const handleOptionChange = e => setCategory(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value="" name="title" onChange={handleTextChange} />
      <select value="" name="category" required onChange={handleOptionChange}>
        { categories.map(category => <option key={category} value={category}>{category}</option>) }
      </select>
      <button type="submit">Submit</button>
    </form>
  )

};

export default BookForm;
