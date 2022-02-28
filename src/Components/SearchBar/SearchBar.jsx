import React, { useState } from 'react';


const SearchBar = (props) => {

    

    function handleSubmit(event) {
        event.preventDefault();
        console.log(props.search);
        props.getVideo();
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" value={props.search} onChange={(event) => props.setSearch(event.target.value)} />
            <button type="submit">Search</button>
        </form>
     );
}
 
export default SearchBar;