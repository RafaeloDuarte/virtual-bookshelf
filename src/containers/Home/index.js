import React, { useState } from 'react';

import './style.css';
import { books as Books } from '../../components/Books';
import { useSelector } from 'react-redux'

function Home() {

  const booklist = useSelector(state => state.books)
  
  return (
    <>
      <h1>Home</h1>
      <Books booklist={booklist}/>
    </>
  );
}

export default Home;