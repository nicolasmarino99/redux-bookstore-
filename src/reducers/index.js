import { combineReducers } from 'redux';
import booksReducer from './books';

const reducer = combineReducers({
  books: booksReducer,
});

export default reducer;
