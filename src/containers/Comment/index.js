import React, { useState } from 'react';
import { Button } from 'react-materialize'
import { useDispatch, useSelector } from 'react-redux';
import { editBook } from '../../actions/books'

function Comment({ id }) {

    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const books = useSelector(state => state.books)

    const updateComments = (comment) => {
        let currentBook
        books.map(b => {
            if(id == b.bookId) currentBook = b
        })
        let currentComments
        if (currentBook.comments) {
            currentComments = currentBook.comments
            currentComments = [...currentComments, comment]
        } else currentComments = [comment]

        currentBook.comments = currentComments
        dispatch(editBook(currentBook))
    }

    const addComment = () => {
        const newComment = {
            text: text,
            timestamp: new Date()
        }
        updateComments(newComment)
        //setText('')
    }

    return (
        <form onSubmit={() => addComment()}>
            <input
                type='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button>Adicionar Comentário</Button>
        </form>
    );
}

export default Comment;