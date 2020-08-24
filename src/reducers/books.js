import { uuid } from 'uuidv4';

const booksReducer = (() => {
  const initialState = (() => {
    const books = window.localStorage.getItem('books');
    if (!books) {
      return {
        0: { id: uuid(), title: 'Lolita', category: 'Romance' },
        1: { id: uuid(), title: 'Lolita', category: 'Romance' },
      };
    }
    return JSON.parse(books);
  })();

  return (state = initialState, actions) => {
    let newState;
    switch (actions.type) {
      case 'CREATE_BOOK':
        newState = [...Object.values(state), actions.book];
        return newState;
      case 'REMOVE_BOOK':
        newState = [...Object.values(state).filter(book => book.id !== actions.book.id)];
        return newState;
      default:
        return state;
    }
  };
})();

export default booksReducer;
