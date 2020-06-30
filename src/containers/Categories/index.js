import React from 'react';
import { useSelector } from 'react-redux'
import { books as Books } from '../../components/Books'
import './style.css';

function Categories() {

  const hash = window.location.hash
  const queryCategory = hash.substring(hash.lastIndexOf('/') + 1, hash.length)
  const books = useSelector(state => state.books)
  const categoryBooks = books.filter( b => b.category === queryCategory ? b : null)

  console.log(categoryBooks)

  return (
    <div>
      <h1>Livros da categoria {queryCategory}</h1>
      <Books booklist={categoryBooks}/>
    </div>
    );
}

export default Categories;