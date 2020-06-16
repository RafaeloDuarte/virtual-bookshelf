import { createStore } from 'redux'

const INITIAL_STATE = {
    books : [
        { bookId: 1, title:'Livro 1',description:'Esse é um livro', category: 'Romance',  comments:[{text:'Muito massa', timestamp:new Date()}, {text:'Muito massa', timestamp:new Date()}]},
        { bookId: 2, title:'Livro 2',description:'Esse é um outro livro', category: 'Romance', comments:[{text:'Muito massa', timestamp:new Date()}, {text:'Muito massa', timestamp:new Date()}]},    
        { bookId: 3, title:'Livro 1',description:'Esse é um livro', category: 'Romance', comments:[{text:'Muito massa', timestamp:new Date()}, {text:'Muito massa', timestamp:new Date()}]},
        { bookId: 4, title:'Livro 1',description:'Esse é um livro', category: 'Romance', comments:[{text:'Muito massa', timestamp:new Date()}, {text:'Muito massa', timestamp:new Date()}]},
    ]
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