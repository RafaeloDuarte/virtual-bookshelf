import React from 'react';
import { useSelector } from 'react-redux'

import Translate from '../../components/Translate';
import Create from '../Create';
import { books as Books } from '../../components/Books';
import { getLabels } from '../../config/language'

import './style.css';

function Home() {

  const booklist = useSelector(state => state.books)
  const optionLang = JSON.parse(localStorage.getItem('language'))

  return (
    <>
      <div className='Home'>
        <Translate />
        <div className='main'>
          <h1>{getLabels(optionLang).homeH1}</h1>
          <Create />
        </div>
        <Books booklist={booklist} />
      </div>
    </>
  );
}

export default Home;