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

        </div>
    )
}

export default Search