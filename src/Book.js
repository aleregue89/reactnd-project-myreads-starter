import React from 'react'
import BookShelfChanger from './BookShelfChanger'
import defaultCover from './icons/defaultCover.jpg'

class Book extends React.Component {

    render() {

        // adding props from BookShelf.js
        const {book} = this.props;
        const {shelf} = this.props;
        const {moveBook} = this.props;

        // creating a variable to store my book property for images and author to later pass it to backgroundImage
        const image = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : defaultCover
        const author = book.authors ? book.authors.join(', ') : 'Unknown'

        return (
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}></div>
                            <BookShelfChanger book={book} 
                                              shelf={shelf}    
                                              moveBook={moveBook}
                            />
                        </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{author}</div>
                </div>
            
        )
    }
}

export default Book


//book.authors.join(', ')