import React from 'react';

const SearchBar = ({inputValue, userInput, handleSubmit}) => {     

    return(
        <form 
        onSubmit={(e) => handleSubmit(e)} 
        action="search-recipes">
            <input placeholder="Enter ingredient(s) here!" onChange={userInput} value={inputValue} type="text"/>
            <input className="search-bar" type="submit" value="Search"/>
       </form>
    )

}

export default SearchBar;
