import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {apiKey} from './utils';
import Steps from './Steps';

const SingleRecipe = (props) => {
    const [id, setId] = useState()
    const [url, setUrl] = useState('')
    const [data, setData] = useState();
    const [instructions, setInstructions] = useState([]);
    const [missedIngredients, setMissedIngredients] = useState();


    const {match, location} = props
    // for(let i=0; i<location.state.missedIngredients.length; i++) {
    //     console.log(location.state.missedIngredients[i].name)
    // }

    useEffect( () => {
        if (data) {
            for(let i = 0; i < data.length; i++) {
                const steps = data[i].steps
                for (let j=0; j<steps.length; j++) {
                    // console.log(steps[j].step)
                    setInstructions(instructions => [...instructions, steps[j].step])
                }
            }
        }
    }, [data])


    useEffect(() => {
        setId(match.params.id)
        setUrl(`https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apiKey}`)
        setMissedIngredients(location.state.missedIngredients)
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
                //   setIsLoading(false);
                  setUrl('');
                  
        
                })        
              } catch (error) {
                console.log(error)
                // setError(error);
                // setIsLoading(false)
              }
            };
            if (url) {
                fetchData();
            }
          }, [url]);
    return(
        <>
        <p>This will be a single recipe page</p>
        <Steps steps={instructions} />
        {/* {steps => steps.map((step) => {
            return <p>{step}</p>;
        })} */}
        <Link to="/">Go Home</Link>
        </>
    )
}

export default SingleRecipe;