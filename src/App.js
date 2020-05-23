import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooksContent from './ListBooksContent'
import SearchBooks from './SearchBooks'
import {Route} from 'react-router-dom'
import OpenSearchButton from './OpenSearchButton'

class BooksApp extends React.Component {

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

    //showSearchPage: false,
    books: [],
    isLoading: true,
    // new state property to store the search results from the user
  }

  // 1 - using fetch & ComponentDidMount life cycle event in order to get the array of books from the API
  fetch() {
    BooksAPI.getAll().then( books => {
      this.setState({
        books,
        isLoading: false,
      })
    });
  }
  componentDidMount() {
    this.fetch();
  }

  //2- adding a new method (arrow function) to change the shelf property from a book to another shelf
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf) // calling BooksAPI update method
      .then(books => {
        console.log(books)
        console.log(book)
        console.log(shelf)
      })

    const movingBook =this.state.books.map(i => { // mapping books array 
      if(i.id === book.id) {
        i.shelf = shelf;
      }
      return i;
    });
    
    this.setState({ // updating my state of the app
      books: movingBook
    })

  }

  bookShelfTittle = [
    {key : 'currentlyReading', name : 'Currently Reading'},
    {key : 'wantToRead', name : 'Want to Read'},
    {key : 'read', name : 'read'}
  ]

  render() {
    return (
      <div className="app">
        <Route exact path = '/' render = {() => (
          <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <ListBooksContent books= {this.state.books} 
                            bookShelfTittle= {this.bookShelfTittle}
                            moveBook= {this.moveBook} />
          <OpenSearchButton />
        </div>
        )} />
        <Route exact path = '/SearchBooks' render = {() => (
          <SearchBooks 
            //searchedBooks= {this.state.searchedBooks}
            //search= {this.search}
            moveBook= {this.moveBook}
            books= {this.state.books}
          />
            
        )} />
          
      </div>
    )
  }
}

export default BooksApp
