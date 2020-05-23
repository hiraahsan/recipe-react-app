import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DisplayResults = (props) => {
    const {data} = props
    const [id, setId] = useState('');
    return(
        <div>
            {
            data.length > 0
            ? 
            data.map((item) => {
            return             <Link to={{

            pathname:`/recipes/${item.id}`,
            state: {
                image: item.image,
                title: item.title,
                usedIngredients: item.usedIngredients,
                missedIngredients: item.missedIngredients
            }
            }}>
            <button onClick={() => setId(item.id)}>

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