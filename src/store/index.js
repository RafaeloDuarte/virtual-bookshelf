import { createStore } from 'redux'

const initialBooks = localStorage.getItem('books')

const INITIAL_STATE = {
  books: initialBooks ?
    JSON.parse(initialBooks) : []
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

      localStorage.setItem('books', JSON.stringify(updatedBooks))
      return {
        ...state,
        books: updatedBooks
      };
    default:
      return state;
  }
}

export const store = createStore(books)