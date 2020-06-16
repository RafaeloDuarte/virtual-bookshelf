import React from 'react';
import { Row, Col, Card, Icon, CardTitle } from 'react-materialize'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './style.css';

function Book() {

  const hash = window.location.hash
  const id = hash.substring(hash.lastIndexOf('/') + 1, hash.length)
  const books = useSelector(state => state.books)
  const book = books.filter( b => b.bookId == id ? b : null)
  const currentBook = book[0];
  
  return (
    <div className='Book'>
      <Link to='/'>
        <Icon large>arrow_back</Icon>
      </Link>
      <div className='bookDetails'>
      <Col
        m={2}
        s={7}
      >
        <Card
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">{currentBook.title}</CardTitle>}
            revealIcon={<Icon>more_vert</Icon>}
        >
          Descrição:{currentBook.description}
          <p>
            Categoria :                        
            <Link to={`/categories/${currentBook.category}`}>
              {currentBook.category}
            </Link>
          </p>
        </Card>
      </Col>
      </div>
    </div>
  );
}

export default Book;