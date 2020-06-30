import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-materialize'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { editBook, deleteBook } from '../../actions/books'
import back from '../../assets/back.svg'

import './style.css';

function Edit() {

    const dispatch = useDispatch()
    const history = useHistory()

    const hash = window.location.hash
    const id = Number(hash.substring(hash.lastIndexOf('/') + 1, hash.length))
    const books = useSelector(state => state.books)
    const book = books.filter(b => b.bookId === id ? b : null)
    const currentBook = book[0];

    const bookId = currentBook.bookId
    const [title, setTitle] = useState(currentBook.title)
    const [description, setDescription] = useState(currentBook.description)
    const [category, setCategory] = useState(currentBook.category)

    function onSubmitNewBook() {
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

    function titleHandleChange(e) {
        setTitle(e.target.value)
    }

    function descriptionHandleChange(e) {
        setDescription(e.target.value)
    }

    function categoryHandleChange(e) {
        setCategory(e.target.value)
    }

    function deleteBook(){
        const delBook = currentBook
        dispatch(deleteBook(delBook))
    }

    return (
        <div className='Edit'>
            <Link to='/'>
                <img src={back} alt='back' id='back' />
            </Link>
            <h3>Editar livro</h3>
            <form style={{ background: 'grey' }} id='form' onSubmit={e => onSubmitNewBook(e)}>
                <input
                    type='text'
                    value={title}
                    placeholder='Título'
                    onChange={e => titleHandleChange(e)}
                />
                <input
                    rows="10"
                    cols="30"
                    id="description"
                    placeholder='Descrição'
                    value={description}
                    onChange={e => descriptionHandleChange(e)}
                />
                <input
                    type='text'
                    value={category}
                    placeholder='Categoria'
                    onChange={e => categoryHandleChange(e)}
                />
                <div className='button'>
                    <Button id='edit'>Editar Livro</Button>
                    <Button id='delete' onClick={deleteBook()}>Deletar Livro</Button>
                </div>
            </form>
        </div>
    )
}

export default Edit