import React from 'react'
import './SearchBar.scss'

const SearchBar = (props) => {
    return (
        <div className="movieSearch">
            <form className="movieSearchForm" onSubmit={(event) => event.preventDefault()}>
                <input type="text" className="movieSearchInput" placeholder="enter title" onChange={(event) => { props.onChange(event.target.value) }} />
            </form>
        </div>
    )
}

export default SearchBar