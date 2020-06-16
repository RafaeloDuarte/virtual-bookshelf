import React, { useEffect } from 'react';
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
  
  let inputComment

  function toggleInput(){
    //inputComment.style.display = 'grid'
  }
  
  useEffect(()=>{
    inputComment = document.getElementById('input-comment')
  })
  
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
          DESCRIÇÃO:{currentBook.description}
          <p>
            CATEGORIA :                        
            <Link to={`/categories/${currentBook.category}`}>
              {currentBook.category}
            </Link>
          </p>
          <Link to={`/edit/${currentBook.bookId}`}>
            <Icon>edit</Icon>          
          </Link>
          <p>
            COMENTÁRIOS:
         </p>
            {currentBook.comments.map(comment => (
          <div className='comments'>
              <p>
                {comment.text}
              </p>
              <p> 
                 {comment.timestamp.toString()}
              </p>
          </div>
            ))}
          <a onClick={toggleInput()}>
            <Icon>add_circle</Icon>          
          </a>
          <input id='input-comment' type='text' />
          
        </Card>
      </Col>
      </div>
    </div>
  );
}

export default Book;