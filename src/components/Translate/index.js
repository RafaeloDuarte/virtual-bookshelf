import React, { useState } from 'react';
import england from '../../assets/england.jpg'
import portugal from '../../assets/portugal.jpg'
import { toggleLang } from '../../actions/language'
import './style.css'
import { useDispatch } from 'react-redux';

function Translate() {

    const [language, setLanguage] = useState(true)
    const dispatch = useDispatch()

    function toggleEngLanguage() {
        dispatch(toggleLang(true))
    }

    function togglePortLanguage() {
        dispatch(toggleLang(false))
    }

    return (
        <div className='translation'>
            <a href='/' onClick={() => toggleEngLanguage()}>
                <img src={england} />
            </a>
            <a href='/' onClick={() => togglePortLanguage()}>
                <img src={portugal} />
            </a>
        </div>
    );
}

export default Translate;