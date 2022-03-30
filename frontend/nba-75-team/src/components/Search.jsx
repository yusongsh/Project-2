import React from 'react'

const Search = (props) => {

    return(
    <div className='search-bar'>
        <input type='text' name='search' value={props.value} placeholder='Type in your fav player...' onChange={props.onChange}> 
        </input>
        <button className="search-button" onClick={props.onSubmit}>Search</button>
     </div>
    )
}

export default Search