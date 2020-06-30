import React, { useEffect, useState } from 'react'
import { Button } from 'react-materialize'
import { useSelector, useDispatch } from 'react-redux'

import plus from '../../assets/plus_circle.svg'
import right_arrow from '../../assets/right-arrow.svg'
import { addBook } from '../../actions/books'
import { getLabels } from '../../config/language'

import './style.css';

function Create() {

  const optionLang = JSON.parse(localStorage.getItem('language'))
  const labels = getLabels(optionLang)

  //Lógica para exibição do formulário de criação
  let formView
  let openFormIcon
  let closeFormIcon

  function showCreate() {
    formView.style.display = 'grid'
    closeFormIcon.style.display = 'grid'
    openFormIcon.style.display = 'none'
  }

  function hiddenCreate() {
    formView.style.display = 'none'
    closeFormIcon.style.display = 'none'
    openFormIcon.style.display = 'grid'
  }

  useEffect(() => {
    formView = document.getElementById('form')
    openFormIcon = document.getElementById('open_form')
    closeFormIcon = document.getElementById('close_form')
  })


  //Lógica de criação de novo livro;
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')

  const bookList = useSelector(state => state.books)
  const dispatch = useDispatch()

  const titleHandleChange = e => {
    setTitle(e.target.value)
  }

  const descriptionHandleChange = e => {
    setDescription(e.target.value)
  }

  const categoryHandleChange = e => {
    setCategory(e.target.value)
  }

  function onSubmitNewBook() {
    if (!title || !description || !category) {
      alert('Favor preencher todos os campos para adicionar novo livro.')
      return
    }
    const book = {
      bookId: bookList.length + 1,
      title,
      description,
      category,
      comments: [{}],
      timestamp: new Date()
    }
    dispatch(addBook(book))
    localStorage.setItem('books', JSON.stringify([...bookList, book]))

    setTitle('')
    setDescription('')
    hiddenCreate()

  }

  return (
    <>
      <div className='Create'>
        <a href='#' onClick={() => showCreate()} id='open_form'>
          <img src={plus} alt='plus' />
        </a>
        <a href='#' onClick={() => hiddenCreate()} id='close_form'>
          <img src={right_arrow} alt='right_arrow' />
        </a>
        <form className='form' id='form' onSubmit={e => onSubmitNewBook(e)}>
          <div>
            <h3>{labels.title}</h3>
          </div>
          <input
            type='text'
            value={title}
            onChange={e => titleHandleChange(e)}
          />
          <h3>{labels.description}</h3>
          <textarea
            rows="10"
            cols="30"
            id="description"
            value={description}
            onChange={e => descriptionHandleChange(e)}
          />
          <h3>{labels.category}</h3>
          <input
            type='text'
            value={category}
            onChange={e => categoryHandleChange(e)}
          />
          <Button>{labels.addNewBook}</Button>
        </form>
      </div>
    </>
  );
}

export default Create;