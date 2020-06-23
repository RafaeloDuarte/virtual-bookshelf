import { createStore } from 'redux'

const INITIAL_STATE = {
    books : localStorage.getItem('books') ? JSON.parse(localStorage.getItem('books')) : []
}

function books(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'ADD_BOOK':
        return { ...state, books: [...state.books, action.book] };
      case 'EDIT_BOOK':
          const updatedBook = action.book;

          const updatedBooks = state.books.map(book => {
            if (book.bookId === updatedBook.bookId) {
              return updatedBook;
            }
            return book;
          });
    
          return {
            ...state,
            books: updatedBooks
          };
      default:
        return state;
    }
}
  
export const store = createStore(books)