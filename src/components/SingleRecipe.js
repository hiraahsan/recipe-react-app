import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {apiKey} from './utils';
import Steps from './Steps';

const SingleRecipe = (props) => {
    const [id, setId] = useState('')
    const [url, setUrl] = useState('')
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [instructions, setInstructions] = useState([]);
    const [ingredients, setIngredients] = useState();

    const {match, location} = props
    const {state} = location

 


    useEffect(() => {
        setId(match.params.id)
      setUrl(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`)
    }, [match.params.id, id])


    useEffect(() => {


            const fetchData = async () => {
    
              try {
                await fetch(url)
                .then(response => response.text())
                .then((result) => {
                  const items = JSON.parse(result);
                  console.log(items)
                  setData(items);
                  setUrl('');
                  setIsLoading(false);
                  
        
                })        
              } catch (error) {
                console.log(error)
              }
            };
            if (url) {
                fetchData();
            }
          }, [url]);

          useEffect( () => {
            if (data) {
              // go over data and save the steps in state
                for(let i = 0; i < data.length; i++) {
                    const steps = data[i].steps
                    for (let j=0; j<steps.length; j++) {
                        setInstructions(instructions => [instructions, <li>{`${j + 1}. ` + steps[j].step}</li> ])
                    }
                }
            } else if(!isLoading && (!data)) {
              alert('Sorry! The steps are not available for this recipe at the moment. Please search for another one.')
            }
        }, [data, isLoading])


        useEffect( () => {
          const usedIngredients = state.usedIngredients
          for (let i = 0; i < usedIngredients.length; i++) {
            const {amount, unit, name} = usedIngredients[i]
          setIngredients(ingredients => [ingredients, <li>{amount + ' ' + (unit ? unit : ' ') + name}</li>])
          }

          const missedIngredients = state.missedIngredients;
          for (let i = 0; i < missedIngredients.length; i++) {
            console.log(missedIngredients[i])
            const {amount, unit, name} = missedIngredients[i]
          setIngredients(ingredients => [ingredients, <li>{(amount ? amount : '') + ' ' + (unit ? unit + ' ' : '') + name}</li>])
          // setting conditional statements for units and amounts
          }
        }, [state.usedIngredients, state.missedIngredients])

    return(
        <div className="wrapper">
          {
            isLoading
            ? 
            <p>The recipe is loading...</p>
            :
            <div className="recipe-page">
              <span class="pre-heading">how to make</span>
        <h2>{state.title}</h2>
        <img src={state.image} alt={state.title}/>
        <div className="ingredients">
          <h3>Ingredients</h3>
          {ingredients}
        </div>
        <p>This will be a single recipe page</p>
        <Steps steps={instructions} />
        <Link to="/">Go Home</Link>
        </div>
        }
        </div>
    )
}

export default SingleRecipe;