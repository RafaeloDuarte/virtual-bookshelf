import { createStore } from 'redux'

const INITIAL_STATE = {
    books : [
        { bookId: 1, title:'Livro 1',description:'Esse é um livro'},
        { bookId: 2, title:'Livro 2',description:'Esse é um outro livro'},    
    ]
}

function books(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'ADD_BOOK':
        return { ...state, books: [...state.books, action.book] };
      default:
        return state;
    }
}
  
export const store = createStore(books)