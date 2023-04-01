import React from 'react'
import SearchIcon from "../../public/svgs/search.svg"
import LinkedIn from "../../public/svgs/linkedin.svg"

function Search() {
    return (
        <div className='search-container'>
            <LinkedIn />
            <div className="input-container">
                <div className="search-div">
                    <SearchIcon className="search-input-icn" />
                </div>

                <input type="text" placeholder='Search' />
            </div>

            <div className="nav-btn hide-search">
                <SearchIcon className="nav-btn-icn" />
                <p>Search</p>
            </div>

        </div>
    )
}

export default Search