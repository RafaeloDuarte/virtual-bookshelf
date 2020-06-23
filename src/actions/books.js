export function addBook(book){
    return {type:'ADD_BOOK', book}
}

export function loadBooks(books){
    return {type:'ADD_BOOKS', books}
}