import React from 'react'
import Book from './Book'

class BookShelf extends React.Component {

    render() {

        // adding props from ListBooksContent.js
        const {books} = this.props;
        //const {bookShelfTittle} = this.props;
        const {shelf} = this.props;
        const {moveBook} = this.props;

        // creating a variable to store the result of filter books in order to have the actul books stored in this section
        const bookOnShelf = books.filter(book => book.shelf === shelf.key);

        return (
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{shelf.name}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {bookOnShelf.map(book => (
                                <li key={book.id}>
                                    <Book key= {book.id} 
                                          shelf= {shelf.key} 
                                          book= {book} 
                                          moveBook={moveBook}
                                          books= {books}/>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                
            </div>
 
            
        )
            
    }

}

export default BookShelf
