import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

import ListBooksContent from './ListBooksContent'
import SearchBooks from './SearchBooks'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'


class BooksApp extends React.Component {

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */

    //showSearchPage: false,
    // adding books as a new state
    books: [],
    isLoading: true,
    // new state property to store the search results from the user
    //searchedBooks: []
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
    // mapping books array and saving the new array resulted from it in a brand new variable
    // calling BooksAPI update method
    BooksAPI.update(book, shelf)
      .then(books => {
        console.log(books)
        console.log(book)
        console.log(shelf)
      })

    const movingBook =this.state.books.map(i => {
      if(i.id === book.id) {
        i.shelf = shelf;
      }
      return i;
    });
    // updating my state of the app
    this.setState({
      books: movingBook
    })

  }

  bookShelfTittle = [
    {key : 'currentlyReading', name : 'Currently Reading'},
    {key : 'wantToRead', name : 'Want to Read'},
    {key : 'read', name : 'read'}
  ]

  // 2 - Working for SearchBooks 
  // adding a new method to handle the search input on SearchPage
  search = query => {
    if(query.length !== 0) {

      // 3. calling BooksAPI
      BooksAPI.search(query)
        .then(searchResults => {
          if(searchResults.error) {
            this.setState({searchedBooks : []})
          } else {
            this.setState({searchedBooks : searchResults})
          }
        })
    } else{
      this.setState({searchedBooks : []})
    }
  }

  // adding a method to reset my search 
  resetSearch = () => {
    this.setState ({
      searchedBooks : []
    })
  }

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
            //resetSearch= {this.resetSearch}
          />
            
        )} />
          
      </div>
    )
  }
}

const OpenSearchButton = () => {
  return (
    <div className="open-search">
      <Link className= 'search-books' to= '/SearchBooks'>
        <button>Add a Book</button>
      </Link>
    </div>
  );
};

export default BooksApp
