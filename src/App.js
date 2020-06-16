import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom'

import Home from './containers/Home'
import Book from './containers/Book'
import Create from './containers/Create'
import Categories from './containers/Categories'
import Edit from './containers/Edit';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Home}/>
        <Route exact path='/book/:bookId' component={Book}/>
        <Route exact path='/create' component={Create}/>
        <Route exact path='/categories/:category' component={Categories}/>
        <Route exact path='/edit/:bookId' component={Edit}/>
      </Router>
    </div>
  );
}

export default App;
