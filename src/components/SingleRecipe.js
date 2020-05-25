import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {apiKey} from './utils';
import Steps from './Steps';

const SingleRecipe = (props) => {
    const [id, setId] = useState('')
    const [url, setUrl] = useState('')
    const [data, setData] = useState();
    const [instructions, setInstructions] = useState([]);


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
                        setInstructions(instructions => [...instructions, steps[j].step])
                    }
                }
            }
        }, [data])

    return(
        <div className="wrapper recipe-page">
        <h2>{state.title}</h2>
        <img src={state.image} alt={state.title}/>
        <p>This will be a single recipe page</p>
        <Steps steps={instructions} />
        <Link to="/">Go Home</Link>
        </div>
    )
}

export default SingleRecipe;