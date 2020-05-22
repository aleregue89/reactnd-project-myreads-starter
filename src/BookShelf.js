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



/* 
<div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            <li>
                                <Book />
                            </li>
                            <li>
                                <Book />
                            </li>
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            <li>
                                <Book />
                            </li>
                            <li>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 174, backgroundImage: 'url("http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api")' }}></div>
                                        <div className="book-shelf-changer">
                                            <select>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">Oh, the Places You'll Go!</div>
                                    <div className="book-authors">Seuss</div>
                                </div>
                            </li>
                            <li>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api")' }}></div>
                                        <div className="book-shelf-changer">
                                            <select>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">The Adventures of Tom Sawyer</div>
                                    <div className="book-authors">Mark Twain</div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
*/