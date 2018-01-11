import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {
    render() {
        const {shelfBooks} = this.props
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <BookShelf
                            title={"Currently Reading"}
                            shelf={"currentlyReading"}
                            books={shelfBooks}
                        />
                        <BookShelf
                            title={"Want to Read"}
                            shelf={"wantToRead"}
                            books={shelfBooks}
                        />
                        <BookShelf
                            title={"Read"}
                            shelf={"read"}
                            books={shelfBooks}
                        />
                    </div>
                </div>
                <div className="open-search">
                <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks