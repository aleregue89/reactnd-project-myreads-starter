import React from 'react'
import BookShelf from './BookShelf'

class ListBooksContent extends React.Component {

    render() {

        // saving props from App.js in variables
    const {books} = this.props
    const {bookShelfTittle} = this.props
    const {moveBook} = this.props

    return (

        <div className="list-books-content">
            <div>
                {bookShelfTittle.map(shelf => (
                    <BookShelf key={shelf.key} shelf={shelf} books={books} moveBook={moveBook}/>
                ))}
            </div>
        </div>

    )

    }

    




}

export default ListBooksContent