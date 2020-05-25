import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import DisplayResults from './DisplayResults';
import {apiKey} from './utils';


const Dashboard = () => {
    const [inputValue, setInputValue] = useState('')
    const [ingredient, setIngredient] = useState('');
    const userInput = (e) => {
        setInputValue(e.target.value)
    }

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState('')
    const [url, setUrl] = useState(null)
    const [error, setError] = useState('')

    // set input value on submission of form
    const handleSubmit = (e) => {
        e.preventDefault();
        inputValue ? setIngredient(inputValue) : alert('type something in first')

    }

    useEffect(() => {
        setUrl(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&apiKey=${apiKey}`)

    }, [ingredient])

    // api call fetching ingredients
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
          } catch (err) {
            console.log(err)
            setError(err);
            alert(error)
            setIsLoading(false)
          }
        };
        if (url) {
            fetchData();
        }
      }, [url]);
    
    



    return(
        <div className="wrapper">
            <SearchBar handleSubmit={handleSubmit} inputValue={inputValue} userInput = {userInput}/>
            {
            isLoading 
            ?
            <p>Loading...</p> : 
            // goes over data and publishes the information on page
            <DisplayResults isLoading={isLoading} data={data} />
            }
        </div>
    )
}

export default Dashboard;