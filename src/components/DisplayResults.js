import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DisplayResults = (props) => {
    const {data} = props
    const [id, setId] = useState('');
    return(

        // display the data received from api call, if there is at least 1 result received
        <div className={data.length > 0 ? "display-results" : ""}>
            {
            data.length > 0
            ? 
            data.map((item) => {
                // sending props for individual page recipes
            return             <Link to={{

            pathname:`/recipes/${item.id}`,
            state: {
                image: item.image,
                title: item.title,
                usedIngredients: item.usedIngredients,
                missedIngredients: item.missedIngredients
            }
            }}>
            <button className="recipe-results" onClick={() => setId(item.id)}>

            <img src={item.image} alt={item.title} /> <h2>{item.title}</h2> 
            <p>Missed ingredients: {item.missedIngredients.map(element => {
                return element.name + ' '
                })}</p>
        </button>
        </Link>
        })
            :
            <p>No data yet</p>
            }
        </div>
    )
}
export default DisplayResults;