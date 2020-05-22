import React from 'react'
import {Link} from 'react-router-dom'
//import Book from './Book'
import * as BooksAPI from './BooksAPI'
import SearchBooksList from './SearchBooksList'

class SearchBooks extends React.Component {

  state = {
    query : '',
    searchedBooks : []
  }

  // Working for SearchBooks 
  // adding a new method to handle the search input
  handleSearch = event => {
    if(event.target.value === '') {
      this.setState ({
        searchedBooks : []
      })
    } else {
      this.setState ({
        query : event.target.value.trim()
      })
    
      // 2. calling BooksAPI
      BooksAPI.search(event.target.value)
        .then(searchResults => {
          if(searchResults.length !== 0) {
            this.setState({searchedBooks : searchResults})
          } else {
            this.setState({searchedBooks : []})
          }
        })
    } 
  }
  
  render () {

    // addign props from App.js
    const {books} = this.props
    const {moveBook} = this.props
    

    return (
      <div className="app">
          <div className="search-books">
            <div className="search-books-bar">
              <Link to="/">
                <button className="close-search">
                          Close
                </button>
              </Link>
              <div className="search-books-input-wrapper">
                {/*
                          NOTES: The search from BooksAPI is limited to a particular set of search terms.
                          You can find these search terms here:
                          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                          you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        
                <input 
                    type="text" 
                    placeholder="Search by title or author"
                    onChange= {this.handleSearch}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                { 
                  this.state.searchedBooks.map(book => {
                    books.map(theBook => {
                      if(book.title === theBook.title) {
                        book.shelf = theBook.shelf
                      }
                      return true
                    })
                      return (
                        <div key={book.id}>
                          <SearchBooksList 
                                          id={book.id}
                                          value={book.shelf ? book.shelf : 'none'}
                                          book={book}
                                          title={book.title}
                                          authors={book.authors}
                                          moveBook={moveBook}
                          />
                        </div>
                      )
                  })
                } 
              </ol>
            </div>
          </div>
      </div>                    

    )

      
  }
}

export default SearchBooks







/*
const SearchBooksBar = props => {
    return (
      <div className="search-books-bar">
        <ButtonCloseSearch />
        <SearchBooksInputWrapper />
      </div>
    );
  };

  const ButtonCloseSearch = () => {
    return (
      <Link to="/">
        <button className="close-search">Close</button>
      </Link>
    );
  };

  class SearchBooksInputWrapper extends React.Component {
    render() {
      return (
        <div className="search-books-input-wrapper">
          {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
  
                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  *///}
         /* <input type="text" placeholder="Search by title or author" />
        </div>
      );
    }
  }

  const SearchBooksResults = props => {
    return (
      <div className="search-books-results">
        <ol className="books-grid">
          <Book />
        </ol>
      </div>
    );
  };

export default SearchBooks






const {search} = this.props
      const {moveBook} = this.props
      const {resetSearch} = this.props
      //const {searchdBooks} = this.props

        return (
            <div className="app">
                <div className="search-books">
                  <div className="search-books-bar">
                    <Link to="/">
                      <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                      {
                                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                                You can find these search terms here:
                                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
  
                                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                                you don't find a specific author or title. Every search is limited by search terms.
                              
                            
                      <input onChange={event => search(event.target.value)}
                          type="text" 
                          placeholder="Search by title or author" 
                      />
                    </div>
                  </div>
                  <div className="search-books-results">
                    <ol className="books-grid">
                      {this.props.searchedBooks.length !== 0 ? (
                        this.props.searchedBooks.map((book) => (
                          <li key={book.id}>
                            <Book book= {book}
                                  moveBook={moveBook}
                                  />
                          </li>
                        ))) : <li></li> }
                    </ol>
                  </div>
                </div>
            </div>                    

        )*/