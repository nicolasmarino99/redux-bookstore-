import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

const reducer = combineReducers({
  books: booksReducer,
  filter: filterReducer,
});

export default reducer;
