const booksReducer = (state = [], actions) => {
    switch (actions.type) {
        case 'CREATE_BOOK':
            return [...state, actions.book]
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== actions.book.id);
        default:
            return state;  
    }
}

export default booksReducer;
