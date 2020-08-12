import React from 'react';
import Book from './Book'

const BookList = ({book: {id, title, category}}) => {
   return (
   <div className='bookStats-table'>
        <Book book={{id, title, category}}/>
    </div>)
};

export default BookList