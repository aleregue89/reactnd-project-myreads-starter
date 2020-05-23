import React from 'react'
import {Link} from 'react-router-dom'

const OpenSearchButton = () => {
    return (
      <div className="open-search">
        <Link className= 'search-books' to= '/SearchBooks'>
          <button>Add a Book</button>
        </Link>
      </div>
    )
  }

export default OpenSearchButton