import React from 'react';
import categories from '../variables/Categories';

const BookForm = () => (
  <form>
    <input type="text" value="" name="title" />
    <select value="" name="category">
      { categories.map(category => <option key={category} value={category}>{category}</option>) }
    </select>
    <button type="submit">Submit</button>
  </form>

);

export default BookForm;
