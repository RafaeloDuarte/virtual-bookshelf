import React from 'react';

import './style.css';

function Book() {

  const hash = window.location.hash
  const id = hash.substring(hash.lastIndexOf('/') + 1, hash.length)

  console.log(id)

  return <h1>Book</h1>;
}

export default Book;