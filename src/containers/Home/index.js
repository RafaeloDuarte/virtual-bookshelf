import React, { useState } from 'react';

import { books as Books } from '../../components/Books';
import { useSelector } from 'react-redux'
import Create from '../Create';

import './style.css';

function Home() {

  const booklist = useSelector(state => state.books)
  
  return (
    <>
      <div className='Home'>
        <div className='header'>
          <h1>Home</h1>
          <Create/>
        </div>
        <Books booklist={booklist}/>
      </div>
    </>
  );
}

export default Home;