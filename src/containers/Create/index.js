import React, { useEffect, useState } from 'react'
import { Icon, Button } from 'react-materialize'
import { useSelector, useDispatch } from 'react-redux'


import './style.css';

function addBook(book){
  return {type:'ADD_BOOK', book}
}

function Create() {

  //Lógica para exibição do formulário de criação
  let formView
  let openFormIcon
  let closeFormIcon
  
  function showCreate(){
    formView.style.display = 'grid'
    closeFormIcon.style.display = 'grid'
    openFormIcon.style.display = 'none'
  }
  
  function hiddenCreate(){
    formView.style.display = 'none'
    closeFormIcon.style.display = 'none'
    openFormIcon.style.display = 'grid'
  }
  
  useEffect(()=>{
    formView = document.getElementById('form')
    openFormIcon = document.getElementById('open_form')
    closeFormIcon = document.getElementById('close_form')
  })

  
  //Lógica de criação de novo livro;
  const [newBook, setNewBook] = useState({})
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const bookList = useSelector(state => state.books)
  const dispatch = useDispatch()

  const titleHandleChange = e =>{
    setTitle(e.target.value)
  }

  const descriptionHandleChange = e =>{
    setDescription(e.target.value)
  }

  const onSubmitNewBook = e =>{
    const book = {
      bookId:bookList.length + 1,
      title,
      description,
    }
    setNewBook(book)
    addNewBook()
  }

  function addNewBook(){
    dispatch(addBook(newBook))
    setTitle('')
    setDescription('')
    hiddenCreate()
  }
  
  return (
    <>
      <div className='Create'>
        <a href='#' onClick={ () => showCreate()} id='open_form'>
          <Icon large>add_circle</Icon>
        </a>
        <a href='#' onClick={ () => hiddenCreate()} id='close_form'>
          <Icon large>exit_to_app</Icon>
        </a>
        <form className='form' id='form' onSubmit={ e => onSubmitNewBook(e)}>
          <div>
            <h3>Título</h3>
          </div>
          <input type='text' onChange={ e => titleHandleChange(e)}/>
          <h3>Descrição</h3>
          <textarea rows="10" cols="30" id="description" onChange={ e => descriptionHandleChange(e)}/>
          <Button>Adicionar Novo Livro</Button>
        </form>
      </div>
    </>
  );
}

export default Create;