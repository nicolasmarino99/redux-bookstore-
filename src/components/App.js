import React from 'react';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import '../assets/styles/App.scss';

// eslint-disable-next-line arrow-body-style
const App = () => {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
  );
};

export default App;
