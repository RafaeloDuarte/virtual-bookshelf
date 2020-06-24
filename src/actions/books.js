export function addBook(book){
    return {type:'ADD_BOOK', book}
}

export function loadBooks(books){
    return {type:'ADD_BOOKS', books}
}

export function editBook(book){
    return {type:'EDIT_BOOK', book}
}