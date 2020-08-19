import React, { useState } from 'react';
import categories from '../variables/Categories';

const BookForm = ({ book }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const handleTextChange = e => setTitle(e.target.value);
  const handleOptionChange = e => setCategory(e.target.value);

  return (
    <form>
      <input type="text" value="" name="title" />
      <select value="" name="category">
        { categories.map(category => <option key={category} value={category}>{category}</option>) }
      </select>
      <button type="submit">Submit</button>
    </form>
  )

};

export default BookForm;
