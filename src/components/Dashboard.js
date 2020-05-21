import React, {useState, useEffect, useContext} from 'react';
import SearchBar from './SearchBar';
import UserContext from './UserContext';
import DisplayResults from './DisplayResults';
import {apiKey} from './utils';

const Dashboard = () => {
    const [inputValue, setInputValue] = useState('')
    const [ingredient, setIngredient] = useState('');
    const userInput = (e) => {
        // console.log('hello')
        setInputValue(e.target.value)
    }
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState('')
    const [url, setUrl] = useState(null)
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        inputValue ? setIngredient(inputValue) : alert('type something in first')

    }

    useEffect(() => {
        setUrl(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${apiKey}`)

    }, [ingredient])
        
    useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true)

          try {
            await fetch(url)
            .then(response => response.text())
            .then((result) => {
              const items = JSON.parse(result);
              console.log(items)
              setData(items);
              setIsLoading(false);
              setUrl('');
              
    
            })        
          } catch (error) {
            console.log(error)
            setError(error);
            setIsLoading(false)
          }
        };
        if (url) {
            fetchData();
        }
      }, [url]);
    

    return(
        <div>
            <SearchBar handleSubmit={handleSubmit} inputValue={inputValue} userInput = {userInput}/>
            {
            isLoading 
            ?
            <p>Loading...</p> : 
            // go over data from api call and publish the images + text on page
            <DisplayResults isLoading={isLoading} data={data}
            // data = {data.map((item) => {
            //     return console.log(item)
            // })} 
            />
            }
        </div>
    )

    // insert dashboard with a search bar containing the user's search
    // on submit of search button, load the search items below
    // search items will contain a link to the recipe's page that contain the ingredients the user searched for
}

export default Dashboard;