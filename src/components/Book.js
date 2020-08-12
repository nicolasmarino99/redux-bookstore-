import React from 'react';
import PropTypes, { object } from 'prop-types';

const Book = (props) => {
  const {id, title, category} = props.books
   return (
   <div className='book'>
      <div className='row'>{id}</div>
      <div className='row'>{title}</div>
      <div className='row'>{category}</div>
    </div>)
}; 

Book.PropTypes = {
    book: PropTypes.instanceOf(object).isRequired
};

export default Book;