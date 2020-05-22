import React from 'react'

class BookShelfChanger extends React.Component {

    render() {

        // adding props from Book.js
        const {book} = this.props
        const {moveBook} = this.props

        return (
            <div className="book-shelf-changer">
                <select value= {book.shelf} onChange= {(event) => moveBook(book, event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }

}

export default BookShelfChanger