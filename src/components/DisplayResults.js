import React from 'react';

const DisplayResults = (props) => {
    const {isLoading, data} = props
    const handleClick = () => {
        console.log('hello there')
    }
    return(
        <div>
            {
            data.length > 0
            ? 
            data.map((item) => {
            return             <button onClick={handleClick}>

            <img src={item.image} alt={item.title} /> <h2>{item.title}</h2> 
            <p>Missed ingredients: {item.missedIngredients.map(element => {
                return element.name + ' '
                })}</p>
        </button>
        })
            :
            <p>No data yet</p>
            }
        </div>
    )
}
export default DisplayResults;