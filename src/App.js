import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        {console.log(BooksAPI.getAll())}
        <Route exact path='/' component={ListBooks}/>
        <Route exact path='/search' component={SearchBooks}/>
      </div>
    )
  }
}

export default BooksApp
