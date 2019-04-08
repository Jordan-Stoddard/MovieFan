import React, { useState } from "react";
import {withRouter} from 'react-router-dom'

function SearchInput({setInputStateFunc, history, location}) {
  const [searchInput, setSearchInput] = useState("");

  const changeHandler = (e) => {
    setSearchInput(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setInputStateFunc(searchInput)
    pathName === '/tv-shows' || pathName === '/search-tv' || pathName.includes('/details/tv') ? history.push('/search-tv') : history.push('/search')
    setSearchInput("")
  }

  const pathName = location.pathname

  return (
    <div className="nav-bar-search-container">
      <form className="nav-bar-form" onSubmit={submitHandler}>
      <input
        className="nav-bar-search"
        placeholder={pathName === '/tv-shows' || pathName === '/search-tv' || pathName.includes('/details/tv') ? `Search TV shows...` : `Search movies...`}
        value={searchInput}
        onChange={changeHandler}
        title={pathName === '/tv-shows' || pathName === '/search-tv' || pathName.includes('/details/tv') ? 'Trying to search movies? Go to any movie portion of the site.' : 'Trying to search TV shows? Go to any TV portion of the site.'}
      />
     <button className="search-svg"><i className="fas fa-search "/></button>
      </form>
    </div>
  
  );
}

export default withRouter(SearchInput)
