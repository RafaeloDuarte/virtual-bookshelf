import React, { useState } from 'react';

import './style.css';
import { books as Books } from '../../components/Books';

function Home() {

  const [booklist, setBooklist] = useState([
    { bookId: 1, title:'Book1',description:'Esse é um livro'},
    { bookId: 2, title:'Book2',description:'Esse é um outro livro'},
  ])
  

  return (
    <>
      <h1>Home</h1>
      <Books booklist={booklist}/>
    </>
  );
}

export default Home;