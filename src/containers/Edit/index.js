import React, { useState } from 'react'
import { Button } from 'react-materialize'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

import './style.css';

function editBook(book){
    return {type:'EDIT_BOOK', book}
}

function Edit() {

    const dispatch = useDispatch()
    const history = useHistory()

    const hash = window.location.hash
    const id = hash.substring(hash.lastIndexOf('/') + 1, hash.length)
    const books = useSelector(state => state.books)
    const book = books.filter( b => b.bookId == id ? b : null)
    const currentBook = book[0];
    
    const bookId = currentBook.bookId
    const [title, setTitle] = useState(currentBook.title)
    const [description, setDescription] = useState(currentBook.description)
    const [category, setCategory] = useState(currentBook.category)  

    function onSubmitNewBook (){
        const newBook = {
            bookId,
            title,
            description,
            category,
            timestamp: new Date()
        }
        console.log(newBook)
        dispatch(editBook(newBook))
        history.push('/')
    }

    function titleHandleChange(e){
        setTitle(e.target.value)
    }

    function descriptionHandleChange(e){
        setDescription(e.target.value)
    }

    function categoryHandleChange(e){
        setCategory(e.target.value)
    }

    console.log(currentBook)

    return (
        <div className='Edit'>
            <h3>Editar livro</h3>
            <form style={{background:'grey'}} id='form' onSubmit={ e => onSubmitNewBook(e)}>
                <input 
                    type='text' 
                    value={title}
                    placeholder={currentBook.title}
                    onChange={ e => titleHandleChange(e)}
                />
                <input 
                    rows="10" 
                    cols="30" 
                    id="description" 
                    placeholder={currentBook.description}
                    value={description} 
                    onChange={ e => descriptionHandleChange(e)}
                />
                <input 
                    type='text' 
                    value={category} 
                    placeholder={currentBook.category}
                    onChange={ e => categoryHandleChange(e)}
                />
                <Button>Editar Livro</Button>
            </form>
        </div>
    )
}

export default Edit