import React, {useState, useEffect} from 'react';
import UserContext from './UserContext';

const SearchBar = ({inputValue, userInput, handleSubmit}) => {     

    return(
        <form 
        onSubmit={(e) => handleSubmit(e)} 
        action="searchRecipes">
            <input onChange={userInput} value={inputValue} type="text"/>
            <input type="submit" value="Search"/>
        </form>
    )

}

export default SearchBar;
