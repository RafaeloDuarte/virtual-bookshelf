import React, { useEffect } from 'react';
import { Col, Card, Icon, CardTitle } from 'react-materialize'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Comment from '../Comment'
import back from '../../assets/back.svg'
import edit from '../../assets/edit.svg'
import plus from '../../assets/plus_circle.svg'
import remove from '../../assets/remove.svg'
import { deleteBook } from '../../actions/books'
import { getLabels } from '../../config/language'

import './style.css';

function Book() {

  const hash = window.location.hash
  const id = Number(hash.substring(hash.lastIndexOf('/') + 1, hash.length))
  const books = useSelector(state => state.books)
  const book = books.filter(b => b.bookId === id ? b : null)
  const currentBook = book[0];
  const optionLang = JSON.parse(localStorage.getItem('language'))
  const labels = getLabels(optionLang)

  const dispatch = useDispatch()

  let inputComment

  function toggleInput() {
    inputComment.style.display = 'grid'
  }

  function deleteCurrentBook() {
    dispatch(deleteBook(currentBook))
  }

  useEffect(() => {
    inputComment = document.getElementById('input-comment')
  }, [books])

  return (
    <div className='Book'>
      <Link to='/'>
        <img src={back} alt='back' id='back' />
      </Link>
      <div className='bookDetails'>
        <Col m={2} s={7}>
          <Card
            closeIcon={<Icon>close</Icon>}
            header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">{currentBook.title}</CardTitle>}
            revealIcon={<Icon>more_vert</Icon>}
          >
            {labels.description}:{currentBook.description}
            <p>
              {labels.category} :
              <Link to={`/categories/${currentBook.category}`}>
                {currentBook.category}
              </Link>
            </p>
            <Link to={`/edit/${currentBook.bookId}`}>
              <img src={edit} id='edit_button'></img>
            </Link>
            <p>
              {labels.comments}:
            </p>
            {currentBook.comments &&

              currentBook.comments.map(comment => (
                <div className='comments'>
                  <p>
                    {comment.text}
                  </p>
                  <p>
                    {comment.timestamp}
                  </p>
                </div>
              ))}
            <a onClick={() => toggleInput()}>
              <img src={plus} id='add_button'></img>
            </a>
            <div id='input-comment'>
              <Comment id={id} />
            </div>

          </Card>
        </Col>
      </div>
      <div id='remove'>
        <Link to='/' onClick={e => deleteCurrentBook()}>
          <img src={remove} alt='remove' />
        </Link>
      </div>
    </div>
  );
}

export default Book;