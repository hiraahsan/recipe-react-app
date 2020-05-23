import React, { useEffect, useState } from 'react';

const Steps = (props) => {
    const {steps} = props
    const [instructions, setInstructions] = useState([]);
    // useEffect(() => {
    //     for(let i=0; i<steps.length; i++) {
    //         console.log(steps[i])
    //         for(let j=0; j<steps[i].length; j++) {
    //             console.log(steps[i][j])
    //             setInstructions(instructions => [...instructions, steps[i][j].step])
    //         }
    //     }
    // }, [steps])
    return(
        <>
        <p>These are the steps</p>
        {steps}
        </>
    )
}

export default Steps;