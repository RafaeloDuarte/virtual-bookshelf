import React, { useEffect, useState } from 'react'
import { Icon, Button } from 'react-materialize'

import './style.css';

function Create() {

  let formView
  let openFormIcon
  let closeFormIcon
  const [newBook, setNewBook] = useState({})

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

  return (
    <>
      <div className='Create'>
        <a href='#' onClick={ () => showCreate()} id='open_form'>
          <Icon large>add_circle</Icon>
        </a>
        <a href='#' onClick={ () => hiddenCreate()} id='close_form'>
          <Icon large>exit_to_app</Icon>
        </a>
        <form className='form' id='form'>
          <div>
            <h3>Título</h3>
          </div>
          <input type='text'/>
          <h3>Descrição</h3>
          <textarea rows="10" cols="30" id="description"/>
          <Button>Adicionar Novo Livro</Button>
        </form>
      </div>
    </>
  );
}

export default Create;