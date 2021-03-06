import React, {Component} from 'react'
import * as BooksAPI from '../BooksAPI'

class BookItem extends Component{
    state = {
        category: 'none'
    }

    updateCategory = (book, event) => {
        if (event.target.value !== "none"){
            BooksAPI.update(book, event.target.value)
        }
        this.setState({category: event.target.value})
    }

    render() {
        const {book} = this.props
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select onChange={(e) => this.updateCategory(book, e)} value={book.shelf || this.state.category}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors[0]}</div>
            </div>
        )
    }
}

export default BookItem