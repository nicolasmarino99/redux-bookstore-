import React from 'react';
import PropTypes from 'prop-types';
import categories from '../variables/Categories';

categories.push('All');
const CategoryFilter = ({ handleOptionChange }) => (
  <form>
    <label htmlFor="category-filter">
      <select name="category-filter" id="category-filter" required onChange={handleOptionChange}>
        { categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        )) }
      </select>
    </label>
  </form>
);

CategoryFilter.propTypes = {
  handleOptionChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
