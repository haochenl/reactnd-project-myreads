
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import BookItem from './BookItem'

class SearchBooks extends Component {
    state = {
        books: [],
        showingQuery: ''
    }

    updateQuery = (query) => {
        if (query){
            BooksAPI.search(query.trim()).then((books) => (
                this.setState({books: books})
            ))
        } else {
            this.setState({books: []})
        }
        this.setState({showingQuery: query})
    }

    render() {
        const {books, showingQuery} = this.state

        let showingBooks
        if (books && books.length > 0) {
            showingBooks = books.filter((book) => book.authors !== undefined)
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                        <div className="search-books-input-wrapper">
                            <input 
                                type="text" 
                                placeholder="Search by title or author"
                                value={showingQuery}
                                onChange={(event) => this.updateQuery(event.target.value)}
                            />
                        </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {showingBooks && showingBooks.length > 0 && showingBooks.map((book) => (
                            <li key={book.id}>
                                <BookItem
                                    url={book.imageLinks.smallThumbnail}
                                    title={book.title}
                                    author={book.authors[0]}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks