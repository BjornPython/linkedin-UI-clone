import React from 'react'
import SearchIcon from "../../public/svgs/search.svg"
function Search() {
    return (
        <div className='search-container'>
            <div className="input-container">
                <SearchIcon />
                <input type="text" placeholder='Search' />
            </div>

        </div>
    )
}

export default Search